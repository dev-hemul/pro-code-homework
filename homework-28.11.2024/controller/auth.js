import fs from 'fs/promises';
import path from 'path';
import jws from 'jws';
import Token from './../model/auth.js';
import { nanoid } from 'nanoid';

const alg = 'RS512';
const lifedur = 5 * 60 * 1000;  // 5 минут

const rootdir = process.cwd();

const priv = await fs.readFile(path.join(rootdir, 'keys/privateKey.pem'), 'utf8');
const pub = await fs.readFile(path.join(rootdir, 'keys/publicKey.pem'), 'utf8');

// Функция для создания access token
const createAccessToken = (payload) => {
    payload.exp = payload.exp || Date.now() + lifedur;
    const jti = nanoid();
    payload.jti = jti;

    const token = jws.sign({
        header: { alg: alg },
        payload,
        secret: priv,
    });

    return { token, jti };
};

// Функция для создания refresh token
const createRefreshToken = async (jti, userId, accessT) => {
    const token = nanoid();
    await Token.create({
        userId: userId,
        accessToken: accessT,  // передаем созданный accessToken
        refreshToken: token,
        jti: jti,
    });
    return token;
};

// Функция для создания обоих токенов
const createTokens = async (payload) => {
    try {
        const { token: accessT, jti } = createAccessToken(payload);
        const refreshT = await createRefreshToken(jti, payload.iss, accessT);  // передаем payload.iss как userId

        console.log('Access Token:', accessT);
        console.log('Refresh Token:', refreshT);

        if (!accessT || !refreshT) {
             console.error("Access Token or Refresh Token is missing");
              throw new Error('Access or refresh token is missing');
        }

        await Token.updateOne({ jti }, { $set: { accessToken: accessT, refreshToken: refreshT } });

        return { accessT, refreshT };
    } catch (error) {
        console.error('Error while creating tokens:', error);
        throw new Error('Failed to create tokens');
    }
};



// Функция для замены токенов
const replaceTokens = async (accessT, refreshT) => {
    const payload = getPayloadAccessT(accessT);
    const { jti } = payload;

    const token = await Token.findOne({ jti, refreshToken: refreshT });
    if (!token) return false;

    await Token.deleteOne({ jti, refreshToken: refreshT });

    // Удаление старой даты истечения срока действия
    delete payload.exp;

    return createTokens(payload);
};

// Функция для отзыва refresh токенов по issuer
const withdrawRefreshTokensByIssuer = async (iss) => {
    await Token.deleteMany({ userId: iss });
};

// Функция для удаления refresh токена
const removeRefreshT = async (refreshT) => {
    const token = await Token.findOneAndDelete({ refreshToken: refreshT });
    return token ? true : false;
};

// Функция для извлечения payload из access token
const getPayloadAccessT = (accessT) => {
    const result = jws.decode(accessT);
    if (!result) {
        throw new Error('Invalid access token');
    }
    return JSON.parse(result.payload);
};

// Функция для проверки подписи access token
const verifySign = (accessT) => {
    const result = jws.verify(accessT, alg, pub);
    return result;
};

// Функция для проверки состояния access token
const verifyAccessT = (accessT) => {
    const result = verifySign(accessT);
    if (!result) {
        return 'bad_sign';
    }

    const { exp } = getPayloadAccessT(accessT);
    if (exp < Date.now()) {
        return 'expired';
    }

    return 'ok';
};

export {
    createTokens,
    replaceTokens,
    getPayloadAccessT,
    withdrawRefreshTokensByIssuer,
    removeRefreshT,
    verifyAccessT,
    verifySign,
};

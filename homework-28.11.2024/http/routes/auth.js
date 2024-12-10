import {Router} from 'express';
import * as auth from './../../controller/auth.js';
import onlyAuthMv from './mv/onlyAuth.js';

const router = Router();

const checkPwd = (login, pwd) => { // for test
	if(login === 'admin' && pwd === '123') {
		return 1;
	}
	
	if (login === 'lol' && pwd === '456') {
		return 15;
	}
	
	return false;
}

// Приходять login + pwd. Створюємо токен
router.post('/strategy/local/login', (req, res) => {
	// valid ajv
	const {login, password} = req.body;
	
	// check login+pwd to bd
	const uid = checkPwd(login, password);
	if(!uid) {
		res.json({ status: 'bad signin' });
		return;
	}
	
	const tokens = auth.createTokensForUid(uid);
	res.json({ status: 'ok', payload: {tokens} });
})

// Для розлогіну
router.post('/logout', onlyAuthMv, (req, res) => {
	// valid
	const {refreshT} = req.body;
	auth.removeRefreshT(refreshT)
	res.json({ status: 'ok'});
})

// Заміна токену
router.post('/replaceTokens', (req, res) => {
  const { accessT, refreshT } = req.body;
	console.log(`Токен доступу з фронта: ${accessT}`);
	console.log(`Рефреш токен з фронта: ${refreshT}`);
  if (!accessT || !refreshT) {
    return res.status(400).json({ error: 'Необхідний Access Token і Refresh токен' });
  }
  const validSign = auth.verifySign(accessT);
  if (validSign !== true) {
    return res.status(403).json({ error: 'Invalid access token signature' });
  }

  const newTokens = auth.replaceTokens(accessT, refreshT);
	console.log(newTokens);
  if (!newTokens) {
    return res.status(400).json({ error: 'Failed to refresh tokens' });
  }
	console.log(newTokens)
  return res.json({ status: 'ok', payload: { Newtokens: newTokens } });
});


export default router;
export const userSchema = {
  type: "object",
  properties: {
    login: {
      type: "string",
      minLength: 3,
      pattern: "^[a-zA-Zа-яА-ЯёЁіїєґІЇЄҐ]+$" // Допустимі лише літери (російські, українські та латинські)
    },
    password: {
      type: "string", // Изменено на строку
      minLength: 3,
      pattern: "^[0-9]+$" // Допустимы только цифры
    }
  },
  required: ["login", "password"]
};

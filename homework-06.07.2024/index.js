import validator from 'validator';

const email = 'email@example.com';
const str = '12';

console.log(validator.isEmail(email));
console.log(validator.isEmpty(str));

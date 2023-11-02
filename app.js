const JSONusers = require("./db.json");
const validator = require("validator");

const users = JSONusers.users;

users.forEach(user => {
    const email = validator.isEmail(user.email);
    if (email === true) {
        console.log(`La mail di ${user.name} è valida`);
    } else {
        console.log(`La mail di ${user.name} non è valida`);
    };
});

console.log(`
---Normalizzazione Email---
`);

users.forEach(user => {
    const sanitize = validator.isEmail(user.email);
    if (sanitize === false) {
        const emailSanitize = validator.normalizeEmail(user.email);
        console.log(`La email di ${user.name} valida è ${emailSanitize}`);
    }
})


const orm = require('../config/orm.js');
const burger = {
    all: (cb) => {
        orm.all((res) => {
            cb(res);
        });
    },
    create: (name, cb) => {
        orm.create(name, (res) => {
            cb(res);
        });
    },
    update: (id, cb) => {
        orm.update(id, (res) => {
            cb(res);
        });
    }
};
module.exports = burger;
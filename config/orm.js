const connection = require('./connection.js');
// function printQuestionMarks(numb) {
//     let arr = [];
//     for (let t = 0; t < numb; t++) { arr.push("?"); }
//     return arr.toString();
// }
// function objToSql(ob) {
//     let arr = [];
//     for (let key in ob) {
//         let value = ob[key];
//         if (Object.hasOwnProperty.call(ob, key)) {
//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'";
//             }
//             arr.push(key + "=" + value);
//         }
//     }
//     return arr.toString();
// }
let orm = {
    all: (cb) => {
        let queryString = "SELECT * FROM burgers;";
        connection.query(queryString, (err, result) => {
            if (err) { throw err; }
            cb(result);
        });
    },
    create: (name, cb) => {
        let queryString = "INSERT INTO burgers (name) VALUES (?);"
        console.log(queryString);
        connection.query(queryString, [name], (err, result) => {
            if (err) { throw err; }
            cb(result);
        });
    },
    update: (id, cb) => {
        let queryString = "UPDATE burgers SET devoured=true WHERE id=?"
        console.log(queryString);
        connection.query(queryString, [id], (err, result) => {
            if (err) { throw err; }
            cb(result);
        });
    }
};
module.exports = orm;
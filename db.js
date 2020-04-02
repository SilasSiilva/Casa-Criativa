const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./project.db')

db.serialize(function () {
    // criar tablea
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS ideas(
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     image TEXT,
    //     title TEXT,
    //     category TEXT,
    //     description TEXT,
    //     link TEXT
    // );`)
    // inserir dados na tabela
    // const query =
    //     `INSERT INTO ideas(
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    // ) VALUES(?,?,?,?,?)`
    // const values = [
    //     "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    //     "cursos de programação",
    //     "Estudo",
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe velit quos est nisi modi excepturi",
    //     "https://www.google.com"
    // ]
    // db.run(query, values, function (err) {
    //     if (err) return console.log(err)
    //     console.log(this)
    // })


    // deletar um dado da tabela

    // db.run(`DELETE FROM ideas WHERE id = ? `, [5], function (err) {
    //     if (err) return console.log(err)
    //     console.log('DELETADO', this)
    // })

    // consultar a tabela
    // db.all(`SELECT * FROM  ideas`, function (err, rows) {
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })

})


module.exports = db
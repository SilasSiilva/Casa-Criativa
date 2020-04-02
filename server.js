const express = require('express')

const server = express()

const db = require('./db')


const nunjuks = require('nunjucks')
nunjuks.configure("views", {
    express: server,
    noCache: true,
})

server.use(express.static('public'))

server.use(express.urlencoded({ extended: true }))


server.get('/', (req, res) => {

    db.all(`SELECT * FROM  ideas`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send('Erro no Banco de Dados!')
        }
        reversedIdeas = [...rows].reverse()

        let lastIdea = []
        for (idea of reversedIdeas) {
            if (lastIdea.length < 3) {
                lastIdea.push(idea)
            }
        }
        res.render('index.html', { ideas: lastIdea })
    })


})
server.get('/ideias', (req, res) => {

    db.all(`SELECT * FROM  ideas`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send('Erro no Banco de Dados!')
        }
        reversedIdeas = [...rows].reverse()
        res.render('ideias.html', { ideas: reversedIdeas })
    })


})

server.post('/', (req, res) => {
    const query =
        `INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES(?,?,?,?,?)`

    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
    ]
    db.run(query, values, function (err) {
        if (err) {
            console.log(err)
            return res.send('Erro no Banco de Dados!')
        }
        return res.redirect('/ideias')
    })
})

server.listen(1000)
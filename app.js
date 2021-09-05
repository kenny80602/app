const express = require('express')
let users = require('./db')
const app = express()
const port = 3000


app.use(express.json())


app.get('/', (req, res) => {
    res.json(users)
})

app.post('/', function (req, res) {
    const user = req.body;
    users.push({
        id: users.length + 1,
        ...user
    })
    res.send('ok');

    //res.send(users);
});

app.put('/:id', function (req, res) {
    let id = parseInt(req.params.id);
    const user = req.body;
    const updateId = users.findIndex(e => e.id === id);
    //const updateId = id;
    users[updateId] = {
        id: updateId + 1,
        ...user
    };
    res.send('ok');
});

app.delete('/:id', function (req, res) {
    let id = req.params.id;
    users = users.filter(a => a.id !== parseInt(id, 10));
    // users = users.filter(function (a) {
    //     return a.id !== parseInt(id, 10)
    // });
    res.send('ok');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// function add(a, b) {
//     return a + b;
// }

// const add = a => a + 1;

// const add = (a, b) => {
//     return a + b;
// }
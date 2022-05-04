const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    // res.send(users);
})

// creating object
const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01300332241' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01300332241' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01300332241' },
    { id: 4, name: 'Suchonda', email: 'Suchonda@gmail.com', phone: '01300332241' },
    { id: 5, name: 'srabonti', email: 'Srabonti@gmail.com', phone: '01300332241' },
    { id: 6, name: 'sabila', email: 'Sabila@gmail.com', phone: '01300332241' },
    { id: 7, name: 'sohana', email: 'Sohana@gmail.com', phone: '01300332241' }
]

// creating users api 
app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

// dynamic route user api
app.get('/user/:id', (req, res) => {
    // console.log(req.params); // Here params is an object and id is an property..
    // filter by params
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
})

// post data
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to the port', port)
})
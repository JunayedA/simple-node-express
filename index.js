const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const handler = (req, res) =>{
    res.send('WOW, i am excited i am learning node and express')
}

app.get('/', handler);

const users =[
    {id:0,name:"sabana", email:'sabana@gmail.com',phone:'017999333999'},
    {id:1,name:"sbnur", email:'sabansbnur@gmail.com',phone:'017999333999'},
    {id:2,name:"sucorita", email:'sucorita@gmail.com',phone:'017999333999'},
    {id:3,name:"sonia", email:'sonia@gmail.com',phone:'017999333999'},
    {id:4,name:"susmita", email:'susmita@gmail.com',phone:'017999333999'},
    {id:5,name:"karim", email:'karim@gmail.com',phone:'017999333999'},
    {id:6,name:"johir", email:'johir@gmail.com',phone:'017999333999'},
    {id:7,name:"josim", email:'josim@gmail.com',phone:'017999333999'},

]

app.get('/users', (req, res)=>{
    const search = req.query.search;
    //use query parameters
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

//app.METHOD
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post')
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})
// dynamic api
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res)=>{
    res.send(['mango', 'oranges','banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('Yammy Yammy fazli')
})

app.listen(port, () =>{
    console.log('listening to port', port);
});
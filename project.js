//We are building the rest api.And we deal with the users in this project
//This api supports the json based data.
// Perform GET op. on /users
// if u will use GET on --> /users . Then it will list all the users. ........done
//GET /users/1 - It will FETCH or GET the users with id 1.........done
//GET /users/2 - It will FETCH or GET the users with id 2..............done

//POST /users - It will create the user.
//PATCH /users/1 - Edit the user with id 1
//DELETE /users/1 - Del. the user with id 1
const express = require('express');
const users = require("./../Downloads/MOCK_DATA.json");
const app = express();
const port = 8000;
//Routes
app.get('/api/users/', (req, res)=>{
    return res.json(users);
});
app.get('/api/users', (req, res)=>{
});
   // const id =  Number(req.arish.id);
    //const user = users.find((user) => user.id === id);
    //return res.json(user);
   // const html =`<ul>${users.map((user) => `<li>${user.first_name}</li>`</ul>`;
    //    </ul>
//res.send(html);
   // });

app.listen(port, () => console.log(`Server started at port :${port}`));



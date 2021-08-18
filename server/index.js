const express = require("express");
const routes = require('./routes/routes');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("db connected...!");
    // const port = PORT;
    app.listen(port, () =>
      console.log(`Your server is running on port ${port}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
// const express = require('express')
// const bodyParser = require('body-parser')
// const mysql = require('mysql')

// const app = express()
// const port = process.env.PORT || 5000;

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// // MySQL
// const pool  = mysql.createPool({
//     connectionLimit : 10,
//     host            : 'localhost',
//     user            : 'root',
//     password        : '',
//     database        : 'nodejs_beers'
// })
   
// // Get all beers
// app.get('/beers', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err) throw err
//         console.log('connected as id ' + connection.threadId);
//         connection.query('SELECT * from beers', (err, rows) => {
//             connection.release() // return the connection to pool

//             if (!err) {
//                 res.send(rows)
//             } else {
//                 console.log(err)
//             }

//             // if(err) throw err
//             console.log('The data from beer table are: \n', rows)
//         })
//     })
// })

// // Get an beer
// app.get('/:id', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err) throw err
//         connection.query('SELECT * FROM beers WHERE id = ?', [req.params.id], (err, rows) => {
//             connection.release() // return the connection to pool
//             if (!err) {
//                 res.send(rows)
//             } else {
//                 console.log(err)
//             }
            
//             console.log('The data from beer table are: \n', rows)
//         })
//     })
// });

// // Delete a beer
// app.delete('/:id', (req, res) => {

//     pool.getConnection((err, connection) => {
//         if(err) throw err
//         connection.query('DELETE FROM beers WHERE id = ?', [req.params.id], (err, rows) => {
//             connection.release() // return the connection to pool
//             if (!err) {
//                 res.send(`Beer with the record ID ${[req.params.id]} has been removed.`)
//             } else {
//                 console.log(err)
//             }
            
//             console.log('The data from beer table are: \n', rows)
//         })
//     })
// });

// // Add beer
// app.post('', (req, res) => {

//     pool.getConnection((err, connection) => {
//         if(err) throw err
        
//         const params = req.body
//         connection.query('INSERT INTO beers SET ?', params, (err, rows) => {
//         connection.release() // return the connection to pool
//         if (!err) {
//             res.send(`Beer with the record ID  has been added.`)
//         } else {
//             console.log(err)
//         }
        
//         console.log('The data from beer table are:11 \n', rows)

//         })
//     })
// });


// app.put('', (req, res) => {

//     pool.getConnection((err, connection) => {
//         if(err) throw err
//         console.log(`connected as id ${connection.threadId}`)

//         const { id, name, tagline, description, image } = req.body

//         connection.query('UPDATE beers SET name = ?, tagline = ?, description = ?, image = ? WHERE id = ?', [name, tagline, description, image, id] , (err, rows) => {
//             connection.release() // return the connection to pool

//             if(!err) {
//                 res.send(`Beer with the name: ${name} has been added.`)
//             } else {
//                 console.log(err)
//             }

//         })

//         console.log(req.body)
//     })
// })


// // Listen on enviroment port or 5000
// app.listen(port, () => console.log(`Listening on port ${port}`))

// PORT=4000,
// HOST = localhost,
// USER = root,
// PASSWORD = ZZZ,
// DATABASE = posts
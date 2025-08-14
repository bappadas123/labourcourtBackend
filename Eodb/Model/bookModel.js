
var con = require('../config/db');
const createUser = (request, response) => {
    
const { name, email } = request.body;
     //let name = "sss";//request.body.name;
   // let email = "asd";//request.body.email;

    console.log("name: ", name);
  

con.query('INSERT INTO users (username, useremail) VALUES ($1, $2) RETURNING *', [name, email], (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User added : ${result.rowCount}`)
    })
}

const getUsers = (request, response) => {
    con.query('SELECT * FROM users ORDER BY userid ASC', (error, results) => {
        if (error) {
            throw error
            
        }
          if (results.rows.length === 0) {
                return response.status(404).json({ message: 'user name not found' });
            }
            else
            response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    console.log('ssss'+id);
    con.query('SELECT * FROM users WHERE userid = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        console.log("test"+results.rows);
        response.status(200).json(results.rows[0])
    })
}


const updateUserRecord = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        name,
        email
    } = request.body
    con.query(
        'UPDATE users SET username = $1, useremail = $2 WHERE userid = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    con.query('DELETE FROM users WHERE userid = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUserRecord,
    deleteUser,
}

/*
const bcrypt = require('bcrypt');

const saltRounds = 10; // Number of salt rounds

const hashPassword = async (plainPassword) =&gt; {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainPassword, salt);
    return hash;
  } catch (error) {
    console.error('Error hashing password:', error);
  }
};
*/
import pool from '../config/db.js';

const getAllUsersServices = async ()=>{
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
}


const getUserByIdServices = async (id)=>{
    const result = await pool.query("SELECT * FROM users where id = $1", [id]);
    return result.rows[0];
}


const createUserServices = async (name, email)=>{
    const result = await pool.query("INSERT INTO users  (name, email) VALUES ($1, $2) RETURNING *", [name , email]);
    return result.rows[0];
}


const updateUserByIdServices = async (id, name , email)=>{
    const {id} = req.params
    const result = await pool.query('UPDATE users SET name=$1, email=$2 where id = $3 RETURNING *', [name, email])
}


const deleteUserServices = async (id)=>{
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id])
    return result.rows[0];
}


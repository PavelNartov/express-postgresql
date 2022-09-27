const db = require('../db')

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body
    const newPerson = await db.query(
      'INSERT INTO person(name, surname) VALUES ($1, $2) RETURNING *',
      [name, surname]
    )
    res.json(newPerson.rows[0])
  }

  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM person')
    res.json(users.rows)
  }

  async getOneUser(req, res) {
    const { id } = req.params
    const person = await db.query('SELECT * FROM person WHERE id=$1', [id])
    res.json(person.rows[0])
  }

  async updateUser(req, res) {
    const { id } = req.params
    const { name, surname } = req.body
    const updatedPerson = await db.query(
      'UPDATE person SET name=$1, surname=$2 WHERE id=$3 RETURNING *',
      [name, surname, id]
    )
    res.json(updatedPerson.rows[0])
  }

  async deleteUser(req, res) {
    const { id } = req.params
    const result = await db.query('DELETE FROM person WHERE id=$1', [id])
    res.json(result.rowCount)
  }
}

module.exports = new UserController()

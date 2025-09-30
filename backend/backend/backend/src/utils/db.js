const knex = require('knex');
const path = require('path');


const dbFile = process.env.DATABASE_FILE || path.join(__dirname, '../../data/database.sqlite');


const db = knex({
client: 'sqlite3',
connection: {
filename: dbFile
},
useNullAsDefault: true
});


async function initDb(){
// cria tabela users se não existir
const exists = await db.schema.hasTable('users');
if(!exists){
await db.schema.createTable('users', table => {
table.increments('id').primary();
table.string('name').notNullable();
table.string('email').notNullable().unique();
table.string('password').notNullable(); // hash
table.string('role').notNullable().defaultTo('user');
table.timestamp('created_at').defaultTo(db.fn.now());
});
console.log('Tabela users criada');
}
}


module.exports = { db, initDb };

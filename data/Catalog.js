const sqlite3 = require('sqlite3');
const { resolve } = require('styled-jsx/css');

// データベースファイルとの接続
const db = new sqlite3.Database('yourCatalog.db');

class Catalog {
  constructor(id, title, description, imageUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  static async createTable() {
    return new Promise((resolve, reject) => {
      db.run(`CREATE TABLE IF NOT EXISTS catalog (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          description TEXT,
          imageUrl TEXT
        )`, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async addCatalog() {
    const query = `INSERT INTO catalog (title, description, imageUrl) VALUES (?, ?, ?)`;
    try {
      await new Promise((resolve, reject) => {
        db.run(query, [this.title, this.description, this.imageUrl], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
      console.log(`A new catalog entry has been added.`);
    } catch (err) {
      console.error(err.message);
    }
  }

  async deleteAllCatalog() {
    const query = `DELETE FROM catalog `;
    try {
      await new Promise((resolve, reject) => {
        db.run(query, [this.id], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
      console.log(`Catalog entry with id ${this.id} has been deleted.`);
    } catch (err) {
      console.error(err.message);
    }
  }
  async deleteCatalogEvery() {
    const query = `DROP TABLE catalog `;
    try {
      await new Promise((resolve, reject) => {
        db.run(query, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
      console.log(`Catalog table has been deleted.`);
    } catch (err) {
      console.error(err.message);
    }
  }

  async getCatalogById(id){
    const query =`SELECT * FROM catalog WHERE id = ?`;
    return new Promise ((resolve,reject)=>{
        db.get(query,[id],(err,row)=>{
            if(err){
                reject(err);
            }else{
                resolve(row);
            }
        })
    })
  }


  async  getAllCatalog() {
    try {
      const query = `SELECT * FROM catalog`;
      return await new Promise((resolve, reject) => {
        db.all(query, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    } catch (error) {
      throw new Error(`Error fetching all catalogs: ${error.message}`);
    }
  }

  
}

exports.Catalog = Catalog
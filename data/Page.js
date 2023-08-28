const sqlite3 = require('sqlite3');
// データベースファイルとの接続
const db = new sqlite3.Database('yourCatalog.db');

class Page {
  constructor(id, title, description, imageUrl,content,catalog_id) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.content = content;
    this.catalog_id = catalog_id;
  }

  static async createTable() {
    return new Promise((resolve, reject) => {
      db.run(`CREATE TABLE IF NOT EXISTS page (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          description TEXT,
          imageUrl TEXT,
          content TEXT,
          catalog_id INTEGER
        )`, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async addPage() {
    const query = `INSERT INTO page (title, description, imageUrl, content, catalog_id) VALUES (?, ?, ?, ?, ?)`;

    try {
      await new Promise((resolve, reject) => {
        db.run(query, [this.title, this.description, this.imageUrl,this.content,this.catalog_id], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
      console.log(`A new page entry has been added.`);
    } catch (err) {
      console.error(err.message);
    }
  }

  async getPageById(id,catalog_id){
    const query =`SELECT * FROM page WHERE id = ? AND catalog_id = ?`;
    return new Promise ((resolve,reject)=>{
      db.get(query,[id,catalog_id],(err,row)=>{
        if(err){
            reject(err);
        }else{
            resolve(row);
        }
    })
    })
  }

  async deletePage() {
    const query = `DELETE FROM page WHERE id = ?`;
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
  async  getAllPage() {
    try {
      const query = `SELECT * FROM page`;
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
      throw new Error(`Error fetching all pages: ${error.message}`);
    }
  }
  async  getAllPageByCatalogId(idc) {
    try {
      const query = `SELECT * FROM page where catalog_id = ?`;
      return await new Promise((resolve, reject) => {
        db.all(query,[idc], (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    } catch (error) {
      throw new Error(`Error fetching all pages: ${error.message}`);
    }
  }
}
exports.Page = Page
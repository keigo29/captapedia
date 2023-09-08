exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 45:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const sqlite3 = __webpack_require__(661);
const { resolve } = __webpack_require__(463);
// データベースファイルとの接続
const db = new sqlite3.Database("yourCatalog.db");
class Catalog {
    constructor(id, title, description, imageUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    static async createTable() {
        return new Promise((resolve, reject)=>{
            db.run(`CREATE TABLE IF NOT EXISTS catalog (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          description TEXT,
          imageUrl TEXT
        )`, (err)=>{
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
            await new Promise((resolve, reject)=>{
                db.run(query, [
                    this.title,
                    this.description,
                    this.imageUrl
                ], (err)=>{
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
            await new Promise((resolve, reject)=>{
                db.run(query, [
                    this.id
                ], (err)=>{
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
            await new Promise((resolve, reject)=>{
                db.run(query, (err)=>{
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
    async getCatalogById(id) {
        const query = `SELECT * FROM catalog WHERE id = ?`;
        return new Promise((resolve, reject)=>{
            db.get(query, [
                id
            ], (err, row)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }
    async getAllCatalog() {
        try {
            const query = `SELECT * FROM catalog`;
            return await new Promise((resolve, reject)=>{
                db.all(query, (err, rows)=>{
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
exports.Catalog = Catalog;


/***/ }),

/***/ 516:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const sqlite3 = __webpack_require__(661);
// データベースファイルとの接続
const db = new sqlite3.Database("yourCatalog.db");
class Page {
    constructor(id, title, description, imageUrl, content, catalog_id){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.content = content;
        this.catalog_id = catalog_id;
    }
    static async createTable() {
        return new Promise((resolve, reject)=>{
            db.run(`CREATE TABLE IF NOT EXISTS page (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          description TEXT,
          imageUrl TEXT,
          content TEXT,
          catalog_id INTEGER
        )`, (err)=>{
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
            await new Promise((resolve, reject)=>{
                db.run(query, [
                    this.title,
                    this.description,
                    this.imageUrl,
                    this.content,
                    this.catalog_id
                ], (err)=>{
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
    async getPageById(id, catalog_id) {
        const query = `SELECT * FROM page WHERE id = ? AND catalog_id = ?`;
        return new Promise((resolve, reject)=>{
            db.get(query, [
                id,
                catalog_id
            ], (err, row)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }
    async deletePage() {
        const query = `DELETE FROM page WHERE id = ?`;
        try {
            await new Promise((resolve, reject)=>{
                db.run(query, [
                    this.id
                ], (err)=>{
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
    async getAllPage() {
        try {
            const query = `SELECT * FROM page`;
            return await new Promise((resolve, reject)=>{
                db.all(query, (err, rows)=>{
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
    async getAllPageByCatalogId(idc) {
        try {
            const query = `SELECT * FROM page where catalog_id = ?`;
            return await new Promise((resolve, reject)=>{
                db.all(query, [
                    idc
                ], (err, rows)=>{
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
    async deleteAllPage() {
        try {
            const query = `Delete FROM page`;
            return await new Promise((resolve, reject)=>{
                db.run(query, (err, rows)=>{
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
            });
        } catch (error) {
            throw new Error(`Error delete all pages: ${error.message}`);
        }
    }
}
exports.Page = Page;


/***/ })

};
;
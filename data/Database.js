const sqlite3 = require('sqlite3');
const { default: Catalog } = require('./Catalog');

// export default class Database {
   
//     constructor() {
//         const db = new sqlite3.Database('db');
//         this.dbGet = promisify(db.get.bind(db));
//         this.dbAll = promisify(db.all.bind(db));
//         this.dbRun = function(arg: string) {
//             return new Promise<any>((resolve, reject) => {
//                 db.run.apply(db, [
//                     arg,
//                     function(this: sqlite3.Database, err: Error) {
//                         err ? reject(err) : resolve(this)
//                     }
//                 ]
//                 );
//             });
//         }
//     }
//   }









(() => {
var exports = {};
exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 661:
/***/ ((module) => {

"use strict";
module.exports = require("sqlite3");

/***/ }),

/***/ 463:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/css");

/***/ }),

/***/ 183:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const { Catalog } = __webpack_require__(45);
const { Page } = __webpack_require__(516);
// const express = require('express');
// Catalog インスタンスを生成
const db1 = new Catalog();
const db2 = new Page();
const id = 2;
const idc = 2;
// createTable メソッドを呼び出してテーブルを作成
Catalog.createTable().then(()=>{
    console.log("Table created successfully.");
    // 新しいカタログエントリのインスタンスを作成
    const newCatalogEntry = new Catalog(null, "まんこ", "世界のまんこをみる", "http");
    // カタログエントリをデータベースに保存
    newCatalogEntry.addCatalog().then(()=>{
        // データベースへの保存が成功した場合の処理
        console.log("Catalog entry has been saved.");
    // 新しいエントリのIDを取得
    // const id = newCatalogEntry.id;
    // カタログエントリをデータベースから取得する
    // db1.getCatalogById(id)
    //   .then(selectedCatalog => {
    //     console.log("Selected catalog:", selectedCatalog);
    //   })
    //   .catch(error => {
    //     console.error("Error selecting catalog:", error);
    //   });
    }).catch((error)=>{
        // データベースへの保存が失敗した場合の処理
        console.error("Error adding catalog entry:", error);
    });
}).catch((error)=>{
    console.error("Error creating table:", error);
});
db1.getAllCatalog().then((allCatalog)=>{
    console.log("all catalog", allCatalog);
}).catch((error)=>{
    console.error("Error all catalog:", error);
});
Page.createTable().then(()=>{
    console.log("Table created successfully.");
    // 新しいカタログエントリのインスタンスを作成
    const newPageEntry = new Page(null, "かいりまんこ", "かいりのまんこをみる", "http", "陰部 は、人間の体の特定の部分を指す用語であり、通常は生殖器を指します。男性の場合、陰部は陰茎（ペニス）と陰嚢（陰部の皮膚に覆われた袋状の部分）を含みます。女性の場合、陰部は外陰部（陰核、陰唇など）を指します。この用語は医学的な文脈や解剖学的な説明で使われることがありますが、一般的な会話や公共の場で使用する際には、適切な敬意と注意を払うことが重要です。個人的な話題や尊重を欠く表現は避け、相手の感情や文化的な背景を尊重するよう心掛けましょう。", 2);
    // カタログエントリをデータベースに保存
    newPageEntry.addPage().then(()=>{
        // データベースへの保存が成功した場合の処理
        console.log("Catalog entry has been saved.");
        // 新しいエントリのIDを取得
        // const id = newCatalogEntry.id;
        // カタログエントリをデータベースから取得する
        db2.getPageById(id, 1).then((selectedPage)=>{
            console.log("Selected Page:", selectedPage);
        }).catch((error)=>{
            console.error("Error selecting Page:", error);
        });
        db2.getAllPage().then((allPage)=>{
            console.log("all page", allPage);
        }).catch((error)=>{
            console.error("Error all page:", error);
        });
        db2.getAllPageByCatalogId(idc).then((AllPageByCatalogId)=>{
            console.log("あんぽるきや", AllPageByCatalogId);
        }).catch((error)=>{
            console.error("Error all page:", error);
        });
    }).catch((error)=>{
        // データベースへの保存が失敗した場合の処理
        console.error("Error adding Page entry:", error);
    });
}).catch((error)=>{
    console.error("Error creating table:", error);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [889], () => (__webpack_exec__(183)));
module.exports = __webpack_exports__;

})();
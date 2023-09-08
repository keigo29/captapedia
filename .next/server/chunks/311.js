exports.id = 311;
exports.ids = [311];
exports.modules = {

/***/ 269:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 707:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "header_title__Sx5Xi"
};


/***/ }),

/***/ 135:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "main_content__Iy_e8",
	"h2": "main_h2__lkFgs",
	"card": "main_card__o_B_o",
	"img": "main_img__5EZPv",
	"h4": "main_h4__V6bTG",
	"button": "main_button__ALzm8",
	"modalOverlay": "main_modalOverlay__eFCIK",
	"modal": "main_modal__2ZZmh",
	"modalContent": "main_modalContent__4TvRi",
	"ima": "main_ima__elDfH",
	"modalh4": "main_modalh4__U6Y5S",
	"modalMain": "main_modalMain__Ok35M",
	"modalText": "main_modalText__3LY_y",
	"cmodal": "main_cmodal__u_0Z1",
	"chead": "main_chead__JPvbs",
	"f": "main_f__e7ClP",
	"description": "main_description__slwO0",
	"flexcon": "main_flexcon__vUtqe",
	"containpm": "main_containpm__vRyoP",
	"plusimg": "main_plusimg____RpQ",
	"titlep": "main_titlep__jcvRC",
	"main": "main_main__ObG5I",
	"flexconc": "main_flexconc__BbTNu",
	"categoli": "main_categoli__YJMkW",
	"contain": "main_contain__1TVIR",
	"title": "main_title__nIhFv",
	"containp": "main_containp__MuqLk",
	"page": "main_page__Zqo7O",
	"modalF": "main_modalF__uDjXq",
	"inputxt": "main_inputxt__cGJ_A",
	"inputxtArea": "main_inputxtArea__xNH8o",
	"imgr": "main_imgr___vnBc",
	"cform": "main_cform__BVepg",
	"imgAdd": "main_imgAdd__hn2qn",
	"inputImg": "main_inputImg__hLtLD",
	"modalFp": "main_modalFp__yWzrM",
	"imgrf": "main_imgrf__suvEd"
};


/***/ }),

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/header.module.scss
var header_module = __webpack_require__(707);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./components/header.js


function Header() {
    const title = "<Catapedia/>";
    const clickHander = ()=>{
        location.reload();
    };
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: (header_module_default()).header,
        onClick: clickHander,
        children: /*#__PURE__*/ jsx_runtime.jsx("header", {
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (header_module_default()).title,
                children: title
            })
        })
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/main.module.scss
var main_module = __webpack_require__(135);
var main_module_default = /*#__PURE__*/__webpack_require__.n(main_module);
;// CONCATENATED MODULE: ./public/img/ic_baseline-plus.svg
/* harmony default export */ const ic_baseline_plus = ({"src":"/_next/static/media/ic_baseline-plus.831ee556.svg","height":72,"width":71,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/img/x.png
/* harmony default export */ const x = ({"src":"/_next/static/media/x.97857446.png","height":102,"width":102,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARUlEQVR42k3NsRVAQBAA0dlDIhCoQgnEyqAVTe0UoS3RPvfzeQPYDBvFoBR3Z4+cKG6+XmBlnvl4Q1acK7g48nOgl9G/PmBNEnbJGx7hAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/main.js






const Pages = (props)=>{
    const maxLength = 70;
    const [showDetail, setShowDetail] = (0,external_react_.useState)(false);
    const toggleDetail = ()=>{
        setShowDetail(!showDetail);
    };
    const detail = (id)=>{
        toggleDetail();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (main_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: props.img,
                height: 60,
                className: (main_module_default()).img
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (main_module_default()).h4,
                children: props.h4
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (main_module_default()).content,
                children: props.content ? props.content.length > maxLength ? props.content.substr(0, maxLength) + "..." : props.content : ""
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (main_module_default()).button,
                onClick: ()=>detail(props.id),
                children: " もっと見る"
            }),
            showDetail && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (main_module_default()).modalOverlay,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (main_module_default()).modal,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (main_module_default()).modalContent,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (main_module_default()).ima,
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: props.img,
                                        height: 200,
                                        className: (main_module_default()).img
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (main_module_default()).modalh4,
                                        children: props.h4
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (main_module_default()).modalMain,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (main_module_default()).modalhead
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (main_module_default()).modalText,
                                        children: props.content
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (main_module_default()).button,
                                onClick: toggleDetail,
                                children: "戻る"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
const PostP = (props)=>{
    const [clikedImage, setClikedImage] = (0,external_react_.useState)(false);
    const [cliked, setCliked] = (0,external_react_.useState)(false);
    const [formData, setFormData] = (0,external_react_.useState)({
        title: "",
        description: "",
        imageUrl: "",
        content: "",
        catalog_id: props.idp
    });
    const [images, setImages] = (0,external_react_.useState)([]);
    const handleOnAddImage = (e)=>{
        if (!e.target.files) return;
        setImages([
            ...e.target.files
        ]);
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // setFormData({
        //      catalog_id:idp
        // })
        console.log(formData);
    };
    const clickHander = ()=>{
        setCliked(true);
    };
    const imgAdd = ()=>{
        setClikedImage(true);
    };
    const clickX = (e)=>{
        e.stopPropagation();
        setCliked(false);
        setClikedImage(false);
    };
    const reRoad = ()=>{
        location.reload();
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8091/api/addPageData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.status === 201) {
                console.log("データが正常に登録されました。");
            // フォームをクリアするか、リダイレクトなどの適切な処理を追加
            } else {
                console.error("データの登録中にエラーが発生しました。");
            }
        } catch (error) {
            console.error("ネットワークエラー", error);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (main_module_default()).containpm,
        onClick: clickHander,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: ic_baseline_plus,
                width: 50,
                className: (main_module_default()).plusimg
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (main_module_default()).titlep,
                children: "新規追加"
            }),
            cliked && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (main_module_default()).modalOverlay,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (main_module_default()).modalFp,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "imgrf",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: x,
                                width: 50,
                                className: (main_module_default()).imgr,
                                onClick: clickX
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (main_module_default()).cform,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                method: "post",
                                onSubmit: handleSubmit,
                                children: [
                                    !clikedImage && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (main_module_default()).imgAdd,
                                        onClick: imgAdd,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: ic_baseline_plus,
                                                height: 50
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: "写真を追加"
                                            })
                                        ]
                                    }),
                                    clikedImage && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (main_module_default()).inputImg,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: (main_module_default()).inputT,
                                                children: "画像URLを追加"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                name: "imageUrl",
                                                type: "text",
                                                placeholder: "https://",
                                                className: (main_module_default()).inputxt,
                                                value: formData.imageUrl,
                                                onChange: handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (main_module_default()).inputT,
                                        children: "タイトル"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        name: "title",
                                        type: "text",
                                        value: formData.title,
                                        onChange: handleChange,
                                        className: (main_module_default()).inputxt
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (main_module_default()).inputT,
                                        children: "概要"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                        name: "content",
                                        type: "textarea",
                                        rows: "20",
                                        value: formData.content,
                                        onChange: handleChange,
                                        className: (main_module_default()).inputxtArea
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "submit",
                                        value: "追加",
                                        className: (main_module_default()).button,
                                        onClick: reRoad
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
// コンポーネント
const Categolies = (props)=>{
    const ids = props.id;
    const [selectedCatalogs, setSelectedCatalogs] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8091/api/selectpages/${ids}`);
                const data = await response.json();
                // console.log(data);
                setSelectedCatalogs(data);
            } catch (error) {
                console.error("カタログ取得エラー", error);
            }
        }
        fetchData();
    }, []);
    const [showCatalog, setShowCatalog] = (0,external_react_.useState)(false);
    const toggleCatalog = ()=>{
        setShowCatalog(!showCatalog);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (main_module_default()).contain,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                onClick: toggleCatalog,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: props.img,
                        height: 50,
                        className: (main_module_default()).img
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (main_module_default()).title,
                        children: props.title
                    })
                ]
            }),
            showCatalog && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (main_module_default()).cmodal,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: x,
                            width: 50,
                            className: (main_module_default()).imgr,
                            onClick: toggleCatalog
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (main_module_default()).chead,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (main_module_default()).f,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: props.img,
                                        height: 120
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: (main_module_default()).h2,
                                        children: props.title
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (main_module_default()).description,
                                children: props.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (main_module_default()).flexcon,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(PostP, {
                                idp: props.id
                            }),
                            selectedCatalogs.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx(Pages, {
                                    h4: item.title,
                                    img: item.imageUrl,
                                    name: item.title,
                                    id: item.id,
                                    content: item.content
                                }, i))
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        onClick: toggleCatalog,
                        children: "icon X"
                    })
                ]
            })
        ]
    });
};
const PostC = ()=>{
    const [cliked, setCliked] = (0,external_react_.useState)(false);
    const [clikedImage, setClikedImage] = (0,external_react_.useState)(false);
    const [formData, setFormData] = (0,external_react_.useState)({
        title: "",
        description: "",
        imageUrl: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const imgAdd = ()=>{
        setClikedImage(true);
    };
    const clickHander = ()=>{
        setCliked(true);
    };
    const clickX = (e)=>{
        e.stopPropagation();
        setCliked(false);
        setClikedImage(false);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8091/api/addData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.status === 201) {
                console.log("データが正常に登録されました。");
                // フォームをクリアするか、リダイレクトなどの適切な処理を追加
                setCliked(false);
            } else {
                console.error("データの登録中にエラーが発生しました。");
            }
        } catch (error) {
            console.error("ネットワークエラー", error);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (main_module_default()).containp,
        onClick: clickHander,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: ic_baseline_plus,
                width: 50
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (main_module_default()).titlep,
                children: "新規追加"
            }),
            cliked && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (main_module_default()).modalOverlay,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (main_module_default()).modalF,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: x,
                                width: 40,
                                className: (main_module_default()).imgr,
                                onClick: clickX
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (main_module_default()).cform,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                method: "post",
                                onSubmit: handleSubmit,
                                children: [
                                    !clikedImage && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (main_module_default()).imgAdd,
                                        onClick: imgAdd,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: ic_baseline_plus,
                                                height: 50
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: "写真を追加"
                                            })
                                        ]
                                    }),
                                    clikedImage && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (main_module_default()).inputImg,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: (main_module_default()).inputT,
                                                children: "画像URLを追加"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                name: "imageUrl",
                                                type: "text",
                                                placeholder: "https://",
                                                className: (main_module_default()).inputxt,
                                                value: formData.imageUrl,
                                                onChange: handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (main_module_default()).inputT,
                                        children: "タイトル"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        name: "title",
                                        type: "text",
                                        className: (main_module_default()).inputxt,
                                        value: formData.title,
                                        onChange: handleChange
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (main_module_default()).inputT,
                                        children: "説明"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        name: "description",
                                        type: "text",
                                        className: (main_module_default()).inputxt,
                                        value: formData.description,
                                        onChange: handleChange
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "submit",
                                        value: "追加",
                                        className: (main_module_default()).button
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
function Main() {
    const [catalogs, setCatalogs] = (0,external_react_.useState)([]);
    const [pages, setPages] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8091/api/catalogs");
                const data = await response.json();
                // console.log(data);
                setCatalogs(data);
            } catch (error) {
                console.error("カタログ取得エラー", error);
            }
        }
        fetchData();
    }, []);
    (0,external_react_.useEffect)(()=>{
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8091/api/pages");
                const data = await response.json();
                // console.log(data);
                setPages(data);
            } catch (error) {
                console.error("ページ取得エラー", error);
            }
        }
        fetchData();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: (main_module_default()).main,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (main_module_default()).categoli,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (main_module_default()).t4,
                        children: "Catalog"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (main_module_default()).flexconc,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(PostC, {}),
                            catalogs.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx(Categolies, {
                                    title: item.title,
                                    img: item.imageUrl,
                                    id: item.id,
                                    description: item.description
                                }, i))
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (main_module_default()).page,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (main_module_default()).t4,
                        children: "Page"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (main_module_default()).h4
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (main_module_default()).flexcon,
                        children: pages.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx(Pages, {
                                h4: item.title,
                                img: item.imageUrl,
                                name: item.title,
                                id: item.id,
                                content: item.content
                            }, i))
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/footer.module.scss
var footer_module = __webpack_require__(269);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/footer.js


function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: (footer_module_default()).footer
    });
}

// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__(605);
;// CONCATENATED MODULE: ./pages/_app.js


 //ヘッダーコンポーネント
 //メインコンポーネント
 //フッターコンポーネント

function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Catapedia"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/common.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Main, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 605:
/***/ (() => {



/***/ })

};
;
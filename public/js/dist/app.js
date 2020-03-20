(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        app: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/app.js", "vendors~app" ]);
    return checkDeferredModules();
})({
    "./assets/js/app.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BillsApp_BillsApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BillsApp/BillsApp */ "./assets/js/components/BillsApp/BillsApp.js");\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'container\'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BillsApp_BillsApp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));\n  }\n\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\'app\')); // printName = () => {\n// \tconsole.log(this.state.name);\n// };\n// render() {\n// \treturn (\n// \t\t<div\n// \t\t\tclassName="container"\n// \t\t\tstyle={{\n// \t\t\t\tbackground: this.state.age < 25 ? \'red\' : \'green\',\n// \t\t\t\tmarginLeft: \'30px\'\n// \t\t\t}}\n// \t\t>\n// \t\t\t<h1>{this.state.name}</h1>\n// \t\t\t<div className="button" onMouseOver={this.printName}>\n// \t\t\t\tclick me\n// \t\t\t</div>\n// \t\t</div>\n// \t);\n// }\n\n//# sourceURL=webpack:///./assets/js/app.js?');
    },
    "./assets/js/components/BillsApp/Addbill.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBill; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass AddBill extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clearForm = () => {\n      this.setState({\n        company_name: \'\',\n        price: 0\n      });\n    };\n\n    this.inputChange = () => {\n      const name = event.target.name;\n      const value = event.target.type === \'checkbox\' ? event.target.checked : event.target.value;\n      this.setState({\n        [name]: value\n      }, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.handleSubmit = e => {\n      e.preventDefault();\n      this.props.save(this.state);\n      this.clearForm();\n    };\n\n    this.state = {\n      company_name: \'\',\n      price: 0,\n      paid: false,\n      img: \'/img/BillsApp/default.png\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "AddBill",\n      className: "".concat(this.props.open == true ? \'active\' : \'\')\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Add a Bill"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {\n      onSubmit: this.handleSubmit\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "company"\n    }, "Business Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      id: "company",\n      name: "company_name",\n      onChange: this.inputChange,\n      value: this.state.company_name\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "price"\n    }, "Cost"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      id: "price",\n      name: "price",\n      onChange: this.inputChange,\n      value: this.state.price\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n      type: "submit"\n    }, "Save"))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/BillsApp/Addbill.js?');
    },
    "./assets/js/components/BillsApp/AllBills.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBills; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass AllBills extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.sumBills = () => {\n      const bills = this.props.bills;\n\n      if (bills.length == 0) {\n        return 0;\n      }\n\n      let prices = bills.map(bill => bill.price);\n      let sum = prices.reduce((total, price) => {\n        return parseFloat(parseFloat(total) + parseFloat(price));\n      });\n      return parseFloat(sum).toFixed(2);\n    };\n\n    this.showAllBills = () => {\n      const bills = this.props.bills;\n\n      if (bills.length > 0) {\n        return bills.map((bill, index) => {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n            className: "bill ".concat(bill.paid ? \'paid\' : \'\'),\n            key: index\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "company"\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "logo"\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n            src: bill.img\n          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "title"\n          }, bill.company_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "price"\n          }, "$", bill.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "buttons"\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "paid",\n            onClick: this.props.changeBillStatus.bind(null, index)\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n            className: "fa fa-check"\n          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "delete",\n            onClick: this.props.deleteBill.bind(null, index)\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n            className: "fa fa-trash"\n          }))));\n        });\n      } else {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n          className: "bill"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "no-bills"\n        }, "You have no bills! Lucky You..."));\n      }\n    };\n\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "AllBills"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "total"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Total Balance:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "number"\n    }, "$", this.sumBills())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n      className: "bills-list"\n    }, this.showAllBills())));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/BillsApp/AllBills.js?');
    },
    "./assets/js/components/BillsApp/BillsApp.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./assets/js/components/BillsApp/Header.js");\n/* harmony import */ var _AllBills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllBills */ "./assets/js/components/BillsApp/AllBills.js");\n/* harmony import */ var _FloatingMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FloatingMenu */ "./assets/js/components/BillsApp/FloatingMenu.js");\n/* harmony import */ var _Addbill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Addbill */ "./assets/js/components/BillsApp/Addbill.js");\n\n\n\n\n\n\nclass BillsApp extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedAdd = () => {\n      this.setState({\n        addBillOpen: !this.state.addBillOpen\n      });\n      document.getElementById(\'company\').focus();\n    };\n\n    this.saveBill = bill => {\n      const newBills = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state.AllBills, {\n        $push: [bill]\n      });\n      this.setState({\n        AllBills: newBills,\n        addBillOpen: !this.state.addBillOpen\n      }, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.deleteBill = billIndex => {\n      const newState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state, {\n        AllBills: {\n          $splice: [[billIndex, 1]]\n        }\n      });\n      this.setState(newState, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.changeBillStatus = billIndex => {\n      const newState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state, {\n        AllBills: {\n          [billIndex]: {\n            $toggle: [\'paid\']\n          }\n        }\n      });\n      this.setState(newState, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.state = {\n      addBillOpen: false,\n      AllBills: [{\n        company_name: \'Netflix\',\n        price: 12.99,\n        paid: false,\n        img: \'/img/BillsApp/netflix.png\'\n      }, {\n        company_name: \'Amazon\',\n        price: 7.99,\n        paid: true,\n        img: \'/img/BillsApp/amazon.png\'\n      }, {\n        company_name: \'Uber\',\n        price: 64.14,\n        paid: false,\n        img: \'/img/BillsApp/uber.png\'\n      }]\n    };\n  } // open add bill page\n\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "BillsApp"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AllBills__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n      bills: this.state.AllBills,\n      changeBillStatus: this.changeBillStatus,\n      deleteBill: this.deleteBill\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Addbill__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {\n      open: this.state.addBillOpen,\n      save: this.saveBill\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "content-bg"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FloatingMenu__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n      click: this.clickedAdd\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/BillsApp/BillsApp.js?');
    },
    "./assets/js/components/BillsApp/FloatingMenu.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {\n      id: "FloatingMenu"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-credit-card"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "spend")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-save"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "save")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link",\n      onClick: this.props.click\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon plus"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-plus-circle"\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-exchange"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "transfer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-cogs"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "settings")));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/BillsApp/FloatingMenu.js?');
    },
    "./assets/js/components/BillsApp/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "header"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "billtracker"));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/BillsApp/Header.js?');
    }
});
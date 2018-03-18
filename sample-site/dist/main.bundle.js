webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<app-side-navbar></app-side-navbar>\r\n<app-container></app-container>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.sass":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__primary_content_primary_content_component__ = __webpack_require__("./src/app/primary-content/primary-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__secondary_content_secondary_content_component__ = __webpack_require__("./src/app/secondary-content/secondary-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__container_container_component__ = __webpack_require__("./src/app/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dropdown_dropdown_component__ = __webpack_require__("./src/app/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__side_navbar_side_navbar_component__ = __webpack_require__("./src/app/side-navbar/side-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__side_navbar_items_side_navbar_items_component__ = __webpack_require__("./src/app/side-navbar-items/side-navbar-items.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__primary_content_primary_content_component__["a" /* PrimaryContentComponent */],
                __WEBPACK_IMPORTED_MODULE_7__secondary_content_secondary_content_component__["a" /* SecondaryContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__container_container_component__["a" /* ContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dropdown_dropdown_component__["a" /* DropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_11__side_navbar_side_navbar_component__["a" /* SideNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__side_navbar_items_side_navbar_items_component__["a" /* SideNavbarItemsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"container-wrapper\">\n        <div class=\"container-primary\">\n            <app-primary-content></app-primary-content>\n        </div>\n        <div class=\"container-sidebar\">\n            <app-sidebar></app-sidebar>\n        </div>\n        <div class=\"container-secondary\">\n            <app-secondary-content></app-secondary-content>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/container/container.component.sass":
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 38px;\n  width: 100%;\n  background-color: #e6e6e6; }\n  .container-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1010px;\n    width: 88%;\n    margin: 0 auto; }\n  .container-primary {\n    width: 70%; }\n  @media screen and (max-width: 767px) {\n      .container-primary {\n        width: 100%; } }\n  .container-sidebar {\n    width: 30%; }\n  @media screen and (max-width: 767px) {\n      .container-sidebar {\n        width: 100%; } }\n  .container-secondary {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-container',
            template: __webpack_require__("./src/app/container/container.component.html"),
            styles: [__webpack_require__("./src/app/container/container.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" [ngClass]=\"(active) ? 'dropdown':'dropdown-closed'\">\n  <ul class=\"dropdown-list\">\n    <li class=\"dropdown-list-item\">\n      <a href=\"#\">Integer eget mauris</a>\n    </li>\n    <li class=\"dropdown-list-item\">\n      <a href=\"#\">Pulvinar consectetur</a>\n    </li>\n    <li class=\"dropdown-list-item\">\n      <a href=\"#\">Oget mauris praesent</a>\n    </li>\n    <li class=\"dropdown-list-item\">\n      <a href=\"#\">Interdum justo</a>\n    </li>\n    <li class=\"dropdown-list-item\">\n      <a href=\"#\">Nec neque fringilla</a>\n    </li>\n  </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/dropdown/dropdown.component.sass":
/***/ (function(module, exports) {

module.exports = ".dropdown {\n  background-color: #4d4d4d;\n  width: 150px;\n  position: absolute;\n  left: 50%;\n  margin: 0 auto;\n  top: 44px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: block;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease; }\n  .dropdown-closed {\n    display: none; }\n  .dropdown:before {\n    bottom: 100%;\n    left: 50%;\n    border: solid transparent;\n    content: '';\n    height: 0;\n    width: 0;\n    position: absolute;\n    border-width: 10px;\n    margin-left: -10px;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #4d4d4d; }\n  .dropdown-list {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    font-size: 12px;\n    line-height: 28px; }\n  .dropdown-list-item {\n      padding-left: 8px; }\n  .dropdown-list-item > a {\n        text-decoration: none;\n        color: #ffffff; }\n  .dropdown-list-item:hover {\n        background-color: #666666; }\n"

/***/ }),

/***/ "./src/app/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    DropdownComponent.prototype.ngOnInit = function () {
        this.active = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "active", void 0);
    DropdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dropdown',
            template: __webpack_require__("./src/app/dropdown/dropdown.component.html"),
            styles: [__webpack_require__("./src/app/dropdown/dropdown.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"footer-wrapper\">\n    <div class=\"footer-menu\">\n      <ul class=\"footer-menu-list\">\n        <li class=\"footer-menu-list-item\"><a href=\"#\">menu link</a></li>\n        <li class=\"footer-menu-list-item\"><a href=\"#\">menu link</a></li>\n        <li class=\"footer-menu-list-item\"><a href=\"#\">menu link</a></li>\n        <li class=\"footer-menu-list-item\"><a href=\"#\">menu link</a></li>\n        <li class=\"footer-menu-list-item\"><a href=\"#\">menu link</a></li>\n        <li class=\"footer-menu-list-item\"><a href=\"#\">menu link</a></li>\n      </ul>\n    </div>\n    <div class=\"footer-row\">\n      <p class=\"footer-row-paragraph\">\n          Nullam mattis luctus dolor, sed gravida tellus volutpat vel. \n          Maecenas mollis augue sed tortor molestie ornare. Proin dapibus \n          dictum eros ut adipiscing. Nullam ultrices dolor ut tristique \n          sollicitudin. Integer scelerisque urna est, sit amet aliquet \n          sapien accumsan quis. Nullam luctus semper vulputate. Nulla \n          egestas urna nec tellus ultrices elementum. Proin dapibus dictum \n          eros ut adipiscing. Nullam ultrices dolor ut tristique sollicitudin. \n          Integer scelerisque\n      </p>\n      <h1 class=\"footer-row-logo\">The Site</h1>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.sass":
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #666666;\n  padding: 23px 0 20px 0; }\n  .footer-wrapper {\n    width: 88%;\n    max-width: 1010px;\n    margin: 0 auto; }\n  .footer-menu-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    list-style-type: none;\n    margin: 0;\n    padding: 0; }\n  @media screen and (max-width: 767px) {\n      .footer-menu-list {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column nowrap;\n                flex-flow: column nowrap; } }\n  .footer-menu-list-item {\n      padding: 0 10px;\n      border-right: 2px solid #ffffff; }\n  @media screen and (max-width: 767px) {\n        .footer-menu-list-item {\n          border-bottom: 0.5px solid #ffffff;\n          border-right: 0;\n          padding: 10px 0;\n          text-align: center; } }\n  .footer-menu-list-item:first-child {\n        padding-left: 0; }\n  .footer-menu-list-item:last-child {\n        border: none; }\n  .footer-menu-list-item > a {\n        text-decoration: none;\n        color: #ffffff; }\n  .footer-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin-top: 27px; }\n  @media screen and (max-width: 767px) {\n      .footer-row {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column nowrap;\n                flex-flow: column nowrap;\n        text-align: center;\n        margin: 0 auto; } }\n  .footer-row-paragraph {\n      width: 100%;\n      color: #b3b3b3;\n      font-size: 12px;\n      margin-bottom: 0; }\n  .footer-row-logo {\n      width: 15%;\n      color: #ffffff;\n      font-size: 31px;\n      text-align: right;\n      margin-bottom: 0; }\n  @media screen and (max-width: 767px) {\n        .footer-row-logo {\n          text-align: center;\n          width: 100%;\n          margin-top: 15px; } }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n    <div class=\"navbar-wrapper\">\n        <div class=\"navbar-upper\">\n            <ul class=\"navbar-upper-list\">\n                <li class=\"navbar-upper-list-item\">\n                    <a href=\"#\">menu link</a>\n                </li>\n                <li class=\"navbar-upper-list-item\">\n                    <a href=\"#\">menu link</a>\n                </li>\n                <li class=\"navbar-upper-list-item\">\n                    <a href=\"#\">menu link</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"navbar-lower\">\n            <h1 class=\"navbar-lower-title\">The Site</h1>\n            <ul class=\"navbar-lower-list\">\n                <li (click)=\"toggleMenuItem(0)\" class=\"navbar-lower-list-item\">\n                    menu link\n                    <app-dropdown [active]=\"menuItemsActivity[0]\"></app-dropdown>\n                </li>\n                <li (click)=\"toggleMenuItem(1)\" class=\"navbar-lower-list-item\">\n                    menu link\n                    <app-dropdown [active]=\"menuItemsActivity[1]\"></app-dropdown>\n                </li>\n                <li (click)=\"toggleMenuItem(2)\" class=\"navbar-lower-list-item\">\n                    menu link\n                    <app-dropdown [active]=\"menuItemsActivity[2]\"></app-dropdown>\n                </li>\n                <li (click)=\"toggleMenuItem(3)\" class=\"navbar-lower-list-item\">\n                    menu link\n                    <app-dropdown [active]=\"menuItemsActivity[3]\"></app-dropdown>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.sass":
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #d31353;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%; }\n  @media screen and (max-width: 767px) {\n    .navbar {\n      display: none; } }\n  .navbar-wrapper {\n    width: 88%;\n    max-width: 1010px;\n    margin: 0 auto; }\n  .navbar-upper {\n    display: block;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-flow: row-reverse nowrap;\n            flex-flow: row-reverse nowrap; }\n  .navbar-upper-list {\n      display: inline-block;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row nowrap;\n              flex-flow: row nowrap;\n      float: right;\n      list-style-type: none;\n      font-size: 14px;\n      margin: 0;\n      padding-top: 26px; }\n  .navbar-upper-list-item {\n        margin-right: 13px; }\n  .navbar-upper-list-item:last-child {\n          margin-right: 0; }\n  .navbar-upper-list-item > a {\n          text-decoration: none;\n          color: #000000; }\n  .navbar-upper-list-item > a:hover {\n            color: #ffffff; }\n  .navbar-lower {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .navbar-lower-title {\n      margin: 0;\n      color: #ffc2dd;\n      font-size: 60px;\n      padding-bottom: 10px; }\n  .navbar-lower-list {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row nowrap;\n              flex-flow: row nowrap;\n      font-size: 20px;\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      padding-bottom: 20px; }\n  .navbar-lower-list-item {\n        position: relative;\n        margin-right: 20px;\n        color: #ffffff; }\n  .navbar-lower-list-item:last-child {\n          margin-right: 0; }\n  .navbar-lower-list-item:hover {\n          color: #333333;\n          cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.menuItemsActivity = [
            false,
            false,
            false,
            false
        ];
    };
    NavbarComponent.prototype.toggleMenuItem = function (index) {
        var _this = this;
        this.menuItemsActivity.forEach(function (element, i) {
            if (index === i) {
                _this.menuItemsActivity[i] = !_this.menuItemsActivity[i];
            }
            else {
                _this.menuItemsActivity[i] = false;
            }
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/primary-content/primary-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"primary\">\n  <div class=\"primary-content\">\n    <h1 class=\"primary-content-title\">Aenean ac diam nec neque fringilla</h1>\n    <p class=\"primary-content-paragraph\">\n      Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. \n      Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. \n      Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis \n      ligula at varius.\n    </p>\n    <p class=\"primary-content-paragraph\">\n      Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. \n      Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. \n      Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis \n      ligula at varius.\n    </p>\n    <p class=\"primary-content-paragraph\">\n      Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. \n      Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. \n      Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis \n      ligula at varius.\n    </p>\n    <p class=\"primary-content-paragraph\">\n      Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. \n      Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. \n      Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis \n      ligula at varius.\n    </p>\n    <p class=\"primary-content-paragraph\">\n      Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. \n      Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. \n      Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis \n      ligula at varius.\n    </p>\n  </div>\n\n  <div class=\"primary-row\">\n    <div class=\"primary-row-article\">\n      <p class=\"primary-row-article-paragraph\">\n          Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. \n          Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. \n          Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis \n          ligula at varius. Dorce pila meracone.\n      </p>\n  </div>\n\n    <div class=\"primary-row-highlights\">\n      <h1 class=\"primary-row-highlights-title\">Aenean ac diam nec neque</h1>\n      <ul class=\"primary-row-highlights-list\">\n        <li class=\"primary-row-highlights-list-item\">\n          <a href=\"#\">\n            Integer eget mauris et urna\n          </a>\n        </li>\n        <li class=\"primary-row-highlights-list-item\">\n          <a href=\"#\">\n            Pulvinar consectetur hendrerit\n          </a>\n        </li>\n        <li class=\"primary-row-highlights-list-item\">\n          <a href=\"#\">\n            Oget mauris praesent\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/primary-content/primary-content.component.sass":
/***/ (function(module, exports) {

module.exports = ".primary {\n  width: 100%; }\n  @media screen and (max-width: 767px) {\n    .primary {\n      margin-top: 40px; } }\n  .primary-content {\n    margin-bottom: 22px;\n    background-color: #ffffff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    padding: 0 20px 31px 20px; }\n  .primary-content-title {\n      font-size: 37px;\n      margin-bottom: 0;\n      font-family: serif; }\n  @media screen and (max-width: 767px) {\n        .primary-content-title {\n          font-size: 30px; } }\n  .primary-content-paragraph {\n      font-size: 14px;\n      text-align: left;\n      line-height: 20px; }\n  .primary-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    width: 100%; }\n  @media screen and (max-width: 767px) {\n      .primary-row {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column nowrap;\n                flex-flow: column nowrap; } }\n  .primary-row-article {\n      background-color: #ffffff;\n      width: 50%;\n      margin-right: 24px;\n      padding: 26px 20px 21px 20px; }\n  @media screen and (max-width: 767px) {\n        .primary-row-article {\n          width: 100%;\n          margin-right: 0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          margin-bottom: 20px; } }\n  .primary-row-article-paragraph {\n        margin: 0;\n        line-height: 24px;\n        font-size: 14px; }\n  .primary-row-highlights {\n      background-color: #ffffff;\n      width: 50%;\n      font-size: 14px;\n      padding: 24px 20px 23px 20px; }\n  @media screen and (max-width: 767px) {\n        .primary-row-highlights {\n          width: 100%;\n          margin-right: 0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; } }\n  .primary-row-highlights-title {\n        font-size: 24px;\n        font-family: serif;\n        margin-top: 0;\n        margin-bottom: 24px; }\n  .primary-row-highlights-list {\n        list-style-type: none;\n        padding: 0;\n        margin: 0; }\n  .primary-row-highlights-list-item {\n          border-bottom: 1px solid #cccccc;\n          padding: 10px 0; }\n  .primary-row-highlights-list-item:first-child {\n            padding-top: 0; }\n  .primary-row-highlights-list-item:last-child {\n            border: none; }\n  .primary-row-highlights-list-item > a {\n            text-decoration: none;\n            color: #0071bc; }\n"

/***/ }),

/***/ "./src/app/primary-content/primary-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimaryContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrimaryContentComponent = /** @class */ (function () {
    function PrimaryContentComponent() {
    }
    PrimaryContentComponent.prototype.ngOnInit = function () {
    };
    PrimaryContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-primary-content',
            template: __webpack_require__("./src/app/primary-content/primary-content.component.html"),
            styles: [__webpack_require__("./src/app/primary-content/primary-content.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], PrimaryContentComponent);
    return PrimaryContentComponent;
}());



/***/ }),

/***/ "./src/app/secondary-content/secondary-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"secondary\">\n  <p class=\"secondary-paragraph\">\n      Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. \n      Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. \n      Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis \n      ligula at varius.\n  </p>\n  <p class=\"secondary-paragraph\">\n      Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. \n      Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. \n      Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis \n      ligula at varius.\n  </p>\n  <p class=\"secondary-paragraph\">\n      Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. \n      Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. \n      Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis \n      ligula at varius.\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/secondary-content/secondary-content.component.sass":
/***/ (function(module, exports) {

module.exports = ".secondary {\n  background-color: #cccccc;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  padding: 24px 10px 26px 10px;\n  margin: 23px 0;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  @media screen and (max-width: 767px) {\n    .secondary {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column nowrap;\n              flex-flow: column nowrap;\n      padding: 10px; } }\n  .secondary-paragraph {\n    font-size: 14px;\n    line-height: 20px;\n    margin: 0;\n    padding: 0 10px; }\n  @media screen and (max-width: 767px) {\n      .secondary-paragraph {\n        padding: 10px; } }\n  .secondary-paragraph:last-child {\n      margin-right: 0; }\n"

/***/ }),

/***/ "./src/app/secondary-content/secondary-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondaryContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecondaryContentComponent = /** @class */ (function () {
    function SecondaryContentComponent() {
    }
    SecondaryContentComponent.prototype.ngOnInit = function () {
    };
    SecondaryContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-secondary-content',
            template: __webpack_require__("./src/app/secondary-content/secondary-content.component.html"),
            styles: [__webpack_require__("./src/app/secondary-content/secondary-content.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondaryContentComponent);
    return SecondaryContentComponent;
}());



/***/ }),

/***/ "./src/app/side-navbar-items/side-navbar-items.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list\" [ngClass]=\"(active) ? 'list': 'list-closed'\" >\n  <li class=\"list-item\">\n    <a href=\"#\">Integer eget mauris</a>\n  </li>\n  <li class=\"list-item\">\n    <a href=\"#\">Pulvinar consectetur</a>\n  </li>\n  <li class=\"list-item\">\n    <a href=\"#\">Oget mauris praesent</a>\n  </li>\n  <li class=\"list-item\">\n    <a href=\"#\">Interdum justo</a>\n  </li>\n  <li class=\"list-item\">\n    <a href=\"#\">Nec neque fringilla</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/side-navbar-items/side-navbar-items.component.sass":
/***/ (function(module, exports) {

module.exports = ".list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow-y: scroll;\n  display: block; }\n  .list-closed {\n    display: none; }\n  .list-item {\n    padding-top: 10px; }\n  .list-item > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px; }\n"

/***/ }),

/***/ "./src/app/side-navbar-items/side-navbar-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavbarItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavbarItemsComponent = /** @class */ (function () {
    function SideNavbarItemsComponent() {
    }
    SideNavbarItemsComponent.prototype.ngOnInit = function () {
        this.active = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SideNavbarItemsComponent.prototype, "active", void 0);
    SideNavbarItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-side-navbar-items',
            template: __webpack_require__("./src/app/side-navbar-items/side-navbar-items.component.html"),
            styles: [__webpack_require__("./src/app/side-navbar-items/side-navbar-items.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SideNavbarItemsComponent);
    return SideNavbarItemsComponent;
}());



/***/ }),

/***/ "./src/app/side-navbar/side-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  <div class=\"sidenav-header\">\n    <h1 class=\"sidenav-header-title\">The Site</h1>\n    <div (click)=\"toggleOpen()\" class=\"sidenav-header-icon\">\n      <i class=\"fa\" [ngClass]=\"(open) ? 'fa-times' : 'fa-bars'\"></i>\n    </div>\n  </div>\n  <div class=\"sidenav-list\" [ngClass]=\"(open) ? 'sidenav-open': 'sidenav-closed'\" [ngStyle]=\"{'height.px': getSidenavHeight()}\">\n    <nav class=\"sidenav-upper\">\n      <ul class=\"sidenav-upper-list\">\n        <li class=\"sidenav-upper-list-item\"><a href=\"#\">menu link</a></li>\n        <li class=\"sidenav-upper-list-item\"><a href=\"#\">menu link</a></li>\n        <li class=\"sidenav-upper-list-item\"><a href=\"#\">menu link</a></li>\n      </ul>\n      </nav>\n      <nav class=\"sidenav-lower\">\n        <ul class=\"sidenav-lower-list\">\n          <li (click)=\"toggleItem(0)\" class=\"sidenav-lower-list-item\">\n            <a href=\"#\">\n              menu link\n              <span class=\"sidenav-lower-list-item-expand\"><i class=\"fas fa-angle-down\"></i></span>\n            </a>\n            <app-side-navbar-items [active]=\"itemsActivity[0]\"></app-side-navbar-items>\n          </li>\n          <li (click)=\"toggleItem(1)\" class=\"sidenav-lower-list-item\">\n            <a href=\"#\">\n              menu link\n              <span class=\"sidenav-lower-list-item-expand\"><i class=\"fas fa-angle-down\"></i></span>\n            </a>\n            <app-side-navbar-items [active]=\"itemsActivity[1]\"></app-side-navbar-items>\n          </li>\n          <li (click)=\"toggleItem(2)\" class=\"sidenav-lower-list-item\">\n            <a href=\"#\">\n              menu link\n              <span class=\"sidenav-lower-list-item-expand\"><i class=\"fas fa-angle-down\"></i></span>\n            </a>\n            <app-side-navbar-items [active]=\"itemsActivity[2]\"></app-side-navbar-items>\n          </li>\n          <li (click)=\"toggleItem(3)\" class=\"sidenav-lower-list-item\">\n            <a href=\"#\">\n              menu link\n              <span class=\"sidenav-lower-list-item-expand\"><i class=\"fas fa-angle-down\"></i></span>\n            </a>\n            <app-side-navbar-items [active]=\"itemsActivity[3]\"></app-side-navbar-items>\n          </li>\n        </ul>\n      </nav>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/side-navbar/side-navbar.component.sass":
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  background-color: #d31353;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  display: none; }\n  @media screen and (max-width: 767px) {\n    .sidenav {\n      width: 100%;\n      display: block; } }\n  .sidenav-list {\n    -webkit-transition: height .3s ease;\n    transition: height .3s ease;\n    overflow-y: hidden; }\n  .sidenav-open {\n    display: block;\n    width: 100%;\n    overflow-y: auto; }\n  .sidenav-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 10px 20px; }\n  .sidenav-header-title {\n      color: #ffc2dd;\n      margin: 0;\n      font-size: 34px; }\n  .sidenav-header-icon {\n      color: #ffc2dd;\n      font-size: 24px;\n      margin: auto 0; }\n  .sidenav-upper-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none; }\n  .sidenav-upper-list-item {\n      border-bottom: 1px solid #ffffff;\n      padding: 10px 20px; }\n  .sidenav-upper-list-item > a {\n        text-decoration: none;\n        color: #ffffff; }\n  .sidenav-upper-list:hover {\n      color: #333333; }\n  .sidenav-lower-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none; }\n  .sidenav-lower-list-item {\n      border-bottom: 1px solid #ffffff;\n      padding: 10px 20px; }\n  .sidenav-lower-list-item > a {\n        text-decoration: none;\n        color: #ffffff; }\n  .sidenav-lower-list-item:last-child {\n        border: none; }\n  .sidenav-lower-list-item:hover {\n        color: #333333; }\n  .sidenav-lower-list-item-expand {\n        margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/side-navbar/side-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavbarComponent = /** @class */ (function () {
    function SideNavbarComponent() {
    }
    SideNavbarComponent.prototype.ngOnInit = function () {
        this.open = false;
        this.sidenavHeight = 0;
        this.itemsActivity = [
            false,
            false,
            false,
            false
        ];
    };
    SideNavbarComponent.prototype.toggleOpen = function () {
        this.open = !this.open;
    };
    SideNavbarComponent.prototype.toggleItem = function (index) {
        this.itemsActivity[index] = !this.itemsActivity[index];
    };
    SideNavbarComponent.prototype.getSidenavHeight = function () {
        if (this.open) {
            var sidenavHeaderHeight = document.getElementsByClassName('sidenav-header')[0].scrollHeight;
            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.sidenavHeight = windowHeight - sidenavHeaderHeight;
        }
        else {
            this.sidenavHeight = 0;
        }
        return this.sidenavHeight;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Boolean)
    ], SideNavbarComponent.prototype, "open", void 0);
    SideNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-side-navbar',
            template: __webpack_require__("./src/app/side-navbar/side-navbar.component.html"),
            styles: [__webpack_require__("./src/app/side-navbar/side-navbar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SideNavbarComponent);
    return SideNavbarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <div class=\"sidebar-article\">\n      <h1 class=\"sidebar-article-title\">Aenean ac diam nec neque fringilla</h1>\n      <div class=\"sidebar-article-title-underline\"></div>\n      <p class=\"sidebar-article-paragraph\">\n          Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. \n          Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. \n          Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis \n          ligula at varius.\n      </p>\n    </div>\n    <form class=\"sidebar-form\" (submit)=\"validation($event)\">\n      <label class=\"sidebar-form-label\" for=\"firstname\">First name:</label>\n      <input class=\"sidebar-form-input\" [ngClass]=\"(firstNameValid)\" [(ngModel)]=\"firstName\" type=\"text\" name=\"firstname\" placeholder=\"Enter your name\">\n      <label class=\"sidebar-form-label\" for=\"lastname\">Last name:</label>\n      <input class=\"sidebar-form-input\" [ngClass]=\"(lastNameValid)\" [(ngModel)]=\"lastName\" type=\"text\" name=\"lastname\" placeholder=\"Enter your last name\">\n      <label class=\"sidebar-form-label\" for=\"messagebox\">Message:</label>\n      <textarea class=\"sidebar-form-textarea\" [ngClass]=\"(messageValid)\" [(ngModel)]=\"message\" type=\"text\" name=\"messagebox\"></textarea>\n      <button class=\"sidebar-form-button\">SUBMIT</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.sass":
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px; }\n  @media screen and (max-width: 767px) {\n    .sidebar {\n      padding-left: 0;\n      margin-top: 20px; } }\n  .sidebar-article-title {\n    width: 70%;\n    text-align: left;\n    font-size: 24px;\n    margin: 0 0 12px 0;\n    font-family: serif; }\n  .sidebar-article-title-underline {\n      height: 3px;\n      background-color: #000000;\n      width: 100%; }\n  .sidebar-article-paragraph {\n    font-size: 14px;\n    line-height: 20px;\n    margin-top: 18px;\n    margin-bottom: 32px; }\n  .sidebar-form {\n    border: 1px solid #898989;\n    padding: 20px; }\n  .sidebar-form-label {\n      width: 100%;\n      font-size: 14px; }\n  .sidebar-form-input {\n      width: 100%;\n      border: 1px solid #898989;\n      font-size: 14px;\n      margin: 10px 0 20px 0;\n      padding: 8px 10px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box; }\n  .sidebar-form-input-valid {\n        border: 1px solid #009933; }\n  .sidebar-form-input-invalid {\n        border: 1px solid #cc0000; }\n  .sidebar-form-textarea {\n      resize: none;\n      width: 100%;\n      padding: 8px 10px;\n      font-size: 14px;\n      border: 1px solid #898989;\n      margin-top: 10px;\n      height: 130px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      font-family: sans-serif; }\n  .sidebar-form-textarea-valid {\n        border: 1px solid #009933; }\n  .sidebar-form-textarea-invalid {\n        border: 1px solid #cc0000; }\n  .sidebar-form-button {\n      height: 36px;\n      width: 110px;\n      border: none;\n      background-color: #d31353;\n      color: #ffffff;\n      font-size: 14px;\n      letter-spacing: 4px;\n      margin-top: 18px; }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.validation = function (e) {
        e.preventDefault();
        var letterChars = /^[A-ZĄČĘĖĮŠŲŪa-ząčęėįšųū]+$/;
        var messageChars = /^[A-ZĄČĘĖĮŠŲŪa-ząčęėįšųū0-9\s\-.:",@]+$/;
        if (typeof this.firstName !== 'undefined' && letterChars.test(this.firstName) && this.firstName !== '') {
            this.firstNameValid = 'sidebar-form-input-valid';
        }
        else {
            this.firstNameValid = 'sidebar-form-input-invalid';
        }
        if (typeof this.lastName !== 'undefined' && letterChars.test(this.lastName) && this.lastName !== '') {
            this.lastNameValid = 'sidebar-form-input-valid';
        }
        else {
            this.lastNameValid = 'sidebar-form-input-invalid';
        }
        if (typeof this.message !== 'undefined' && messageChars.test(this.message) && this.message !== '') {
            this.messageValid = 'sidebar-form-textarea-valid';
        }
        else {
            this.messageValid = 'sidebar-form-textarea-invalid';
        }
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
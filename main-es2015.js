(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






const routes = [
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'portfolio';
    }
    ;
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");



























//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_23__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        _education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_12__["IntroComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_15__["SkillsComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_17__["WorkComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_23__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                    _education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _intro_intro_component__WEBPACK_IMPORTED_MODULE_12__["IntroComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_15__["SkillsComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_17__["WorkComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_23__["MaterialModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"]
                ],
                exports: [],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["formDirective"];
function ContactComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getRegisterErrorMessage("name"));
} }
function ContactComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getRegisterErrorMessage("email"));
} }
function ContactComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getRegisterErrorMessage("message"));
} }
function ContactComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_div_34_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.spanClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I've got your mail!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Thanks for getting in touch, ", ctx_r4.name, "! I will be in touch soon.");
} }
function ContactComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_div_36_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.span(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Oops! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Would you mind sending your thoughts again? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " You can also reach out to me at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(_http, formBuilder) {
        this._http = _http;
        this.formBuilder = formBuilder;
        this.contact = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
    }
    submit() {
        if (this.contact.valid) {
            this._http.post('https://formspree.io/xnqgpqzk', this.contact.value)
                .subscribe(res => {
                if (res['ok']) {
                    this.expan = true;
                    let modal = document.getElementById("success");
                    this.name = this.contact.value.name;
                    this.formDirective.resetForm();
                    modal.style.display = "block";
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    };
                }
                else {
                    let modal = document.getElementById("retry");
                    modal.style.display = "block";
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    };
                }
            });
        }
    }
    get rf() { return this.contact.controls; }
    getRegisterErrorMessage(x) {
        switch (x) {
            case "name":
                if (this.contact.get('name').hasError('required')) {
                    return 'Please provide an input';
                }
            case "email":
                if (this.contact.get('email').hasError('required')) {
                    return 'Please provide an input';
                }
                else if (this.contact.get('email').hasError('email')) {
                    return this.contact.get('email').hasError('email') ? 'Not a valid email' : '';
                }
            case "message":
                if (this.contact.get('message').hasError('required')) {
                    return;
                }
        }
    }
    spanClick() {
        let modal = document.getElementById("success");
        modal.style.display = "none";
    }
    span() {
        let modal = document.getElementById("retry");
        modal.style.display = "none";
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], viewQuery: function ContactComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formDirective = _t.first);
    } }, decls: 37, vars: 6, consts: [["id", "contact"], [1, "contactDiv"], [1, "cardTitle"], [1, "contactCard"], [1, "container", "flex"], [1, "header"], [1, "highlight"], ["href", "mailto:panneerselvam.s@northeastern.edu", 1, "mailClass"], ["id", "contact", 1, "form-g", 3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], [1, "form-group"], ["type", "text", "formControlName", "name", "id", "name", "matInput", "", "placeholder", "Name", "required", "", 2, "color", "rgb(7, 2, 2) !important"], [4, "ngIf"], ["type", "text", "formControlName", "email", "matInput", "", "id", "email", "placeholder", "E-Mail", "required", ""], ["id", "message", "placeholder", "Message", "matInput", "", "formControlName", "message", "required", ""], ["type", "submit", 1, "button", 2, "margin-left", "350px"], ["id", "success", 1, "modal"], ["class", "modal-content", 4, "ngIf"], ["id", "retry", 1, "modal"], [1, "modal-content"], [1, "close", 3, "click"], [1, "center"], ["href", "panneerselvam.s@northeastern.edu"], [1, "fas", "fa-envelope"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CONTACT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I'd love to hear from you! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Contact - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "panneerselvam.s@northeastern.edu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ContactComponent_mat_error_22_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ContactComponent_mat_error_26_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ContactComponent_mat_error_30_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ContactComponent_div_34_Template, 9, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ContactComponent_div_36_Template, 12, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rf.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rf.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rf.message.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expan == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expan == true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: [".contactDiv[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 800px;\n  background-image: url('Pic3.jpg');\n  background-size: cover;\n}\n\n.cardTitle[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  margin-top: 25px !important;\n  font-size: 25px;\n  justify-content: center;\n  font-family: Verdana;\n  text-align: center;\n  letter-spacing: 0.05em;\n}\n\n.contactCard[_ngcontent-%COMP%] {\n  top: 60px;\n  margin-left: 20%;\n  width: 60%;\n  height: 550px;\n  background: white;\n  color: #d3cdcd;\n  display: inline-block;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.contactCard[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.22);\n}\n\nflex[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.flex.row[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.flex.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\nsection[_ngcontent-%COMP%] {\n  color: #616161;\n  line-height: 11pt;\n  padding: 70px 0 70px 0;\n  position: relative;\n  background: #032231;\n  color: #fff;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0 auto;\n  max-width: 1200px;\n  padding: 0 10px;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  text-align: center;\n  color: #032231;\n  font-family: \"Raleway\";\n  font-size: 24pt;\n}\n\nsection[_ngcontent-%COMP%]   .header-bar[_ngcontent-%COMP%] {\n  margin: 25px 0 40px 0;\n  width: 110px;\n}\n\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 20px auto 0 auto;\n  min-width: 95%;\n}\n\nsection[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], section[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], section[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #72717144;\n  border: 0;\n  border-radius: 2px;\n  box-sizing: border-box;\n  color: black !important;\n  display: block;\n  font-size: 12pt;\n  margin-bottom: 3px;\n  outline: none;\n  padding: 10px 15px;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 150px;\n}\n\nsection[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: transparent;\n  color: #032231;\n  font-size: 12pt;\n  margin: 13px 0 0 0;\n  outline: 0;\n  padding: 10px 30px;\n  border-radius: 5px;\n  border: 1px solid #032231;\n}\n\nsection[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background: #058368;\n  border: #032231;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  background-color: #032231;\n  margin: auto;\n  margin-top: 10px;\n  padding: 10px;\n  font-family: Raleway;\n  color: white !important;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  display: none;\n  \n  position: fixed;\n  \n  z-index: 1;\n  \n  padding-top: 15px;\n  padding-bottom: 0px;\n  \n  right: 0;\n  bottom: 0;\n  top: 5%;\n  width: 100%;\n  \n  height: 15%;\n  \n  overflow: hidden;\n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n\n\n\n.close[_ngcontent-%COMP%] {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bolder;\n}\n\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 17px;\n  color: rgba(63, 62, 62, 0.644);\n}\n\n.mailClass[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(63, 62, 62, 0.644);\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvTkVVL0dpdEh1Yl9SZXBvL1NyaWRoYXJQcmFzYWQtUGFubmVlcnNlbHZhbS5naXRodWIuaW8vcG9ydGZvbGlvL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUVBLGlDQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUVBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFDQSxxREFBQTtBQ0hKOztBREtBO0VBQ0ksNEVBQUE7QUNGSjs7QURLRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURJRTtFQUNFLG1CQUFBO0FDREo7O0FER0U7RUFDRSxlQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBVUEsbUJBQUE7RUFDQSxXQUFBO0FDVEo7O0FEQUk7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRU47O0FESUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDRixjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDRk47O0FESUk7RUFFRSxxQkFBQTtFQUNBLFlBQUE7QUNITjs7QURNSTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtBQ0pOOztBRE9JOzs7RUFHRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0xOOztBRFFJO0VBRUUsaUJBQUE7QUNQTjs7QURVSTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDVE47O0FEWU07RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNWUjs7QURpQkEsa0JBQUE7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDZko7O0FEb0JBLDJCQUFBOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQ2xCSjs7QURxQkEscUJBQUE7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ25CSjs7QURzQkE7O0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ25CSjs7QURzQkE7RUFDSSxrQkFBQTtBQ25CSjs7QURvQkk7RUFDSSxlQUFBO0FDbEJSOztBRHNCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDbkJKOztBRHNCQTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsV0FBQTtBQ25CRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0RGl2e1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIC8vbWFyZ2luLXRvcDogMTAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvUGljMy5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkVGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDsgXG4gICAgLy9jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB9XG5cbiAgLmNvbnRhY3RDYXJke1xuICAgIHRvcDogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgY29sb3I6IHJnYigyMTEsIDIwNSwgMjA1KTtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt9XG5cbi5jb250YWN0Q2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAyMHB4IDIwcHggcmdiYSgwLDAsMCwwLjIyKTtcbiAgfVxuXG4gIGZsZXgge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5mbGV4LnJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuZmxleC53cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuc2VjdGlvbiB7XG4gICAgY29sb3I6ICM2MTYxNjE7XG4gICAgbGluZS1oZWlnaHQ6IDExcHQ7XG4gICAgcGFkZGluZzogNzBweCAwIDcwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgIC5jb250YWluZXIge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2IoMywgMzQsIDQ5KTtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIC5oZWFkZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6IHJnYigzLCAzNCwgNDkpO1xuICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICAgICAgZm9udC1zaXplOiAyNHB0O1xuICAgIH1cbiAgICAuaGVhZGVyLWJhciB7XG4gICAgICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gICAgICBtYXJnaW46IDI1cHggMCA0MHB4IDA7XG4gICAgICB3aWR0aDogMTEwcHg7XG4gICAgfVxuICAgIFxuICAgIGZvcm0ge1xuICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xuICAgICAgbWluLXdpZHRoOiA5NSU7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT0ndGV4dCddLFxuICAgIGlucHV0W3R5cGU9J2VtYWlsJ10sXG4gICAgdGV4dGFyZWEge1xuICAgICAgYmFja2dyb3VuZDogIzcyNzE3MTQ0O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgdGV4dGFyZWEge1xuICAgICAgLy9tYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICB9XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IHJnYigzLCAzNCwgNDkpO1xuICAgIC8vbWFyZ2luLWxlZnQ6IDEwMDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgIG1hcmdpbjogMTNweCAwIDAgMDtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMywgMzQsIDQ5KTtcbiAgICBcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiKDUsIDEzMSwgMTA0KSA7XG4gICAgICAgIGJvcmRlcjogcmdiKDMsIDM0LCA0OSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBcbi8qIE1vZGFsIENvbnRlbnQgKi9cblxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAzNCwgNDkpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gXG59XG5cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuXG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDE7XG4gICAgLyogU2l0IG9uIHRvcCAqL1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgIHJpZ2h0OjA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogRnVsbCB3aWR0aCAqL1xuICAgIGhlaWdodDogMTUlO1xuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cblxuLmNsb3NlIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE1cHQ7O1xuICAgIH1cbn1cblxuLmhpZ2hsaWdodHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiByZ2JhKDYzLCA2MiwgNjIsIDAuNjQ0KTtcbn1cblxuLm1haWxDbGFzc3tcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSg2MywgNjIsIDYyLCAwLjY0NCk7XG59XG5cbm1hdC1mb3JtLWZpZWxke1xuICB3aWR0aDogMTAwJTtcbiB9XG4iLCIuY29udGFjdERpdiB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9QaWMzLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkVGl0bGUge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLmNvbnRhY3RDYXJkIHtcbiAgdG9wOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNkM2NkY2Q7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxuXG4uY29udGFjdENhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xufVxuXG5mbGV4IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mbGV4LnJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mbGV4LndyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbnNlY3Rpb24ge1xuICBjb2xvcjogIzYxNjE2MTtcbiAgbGluZS1oZWlnaHQ6IDExcHQ7XG4gIHBhZGRpbmc6IDcwcHggMCA3MHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzAzMjIzMTtcbiAgY29sb3I6ICNmZmY7XG59XG5zZWN0aW9uIC5jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5zZWN0aW9uIC5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAzMjIzMTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBmb250LXNpemU6IDI0cHQ7XG59XG5zZWN0aW9uIC5oZWFkZXItYmFyIHtcbiAgbWFyZ2luOiAyNXB4IDAgNDBweCAwO1xuICB3aWR0aDogMTEwcHg7XG59XG5zZWN0aW9uIGZvcm0ge1xuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG4gIG1pbi13aWR0aDogOTUlO1xufVxuc2VjdGlvbiBpbnB1dFt0eXBlPXRleHRdLFxuc2VjdGlvbiBpbnB1dFt0eXBlPWVtYWlsXSxcbnNlY3Rpb24gdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiAjNzI3MTcxNDQ7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuc2VjdGlvbiB0ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuc2VjdGlvbiAuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMzIyMzE7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgbWFyZ2luOiAxM3B4IDAgMCAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzMjIzMTtcbn1cbnNlY3Rpb24gLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwNTgzNjg7XG4gIGJvcmRlcjogIzAzMjIzMTtcbn1cblxuLyogTW9kYWwgQ29udGVudCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMjMxO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiA1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxNSU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jZW50ZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogcmdiYSg2MywgNjIsIDYyLCAwLjY0NCk7XG59XG5cbi5tYWlsQ2xhc3Mge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDYzLCA2MiwgNjIsIDAuNjQ0KTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { formDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['formDirective']
        }] }); })();


/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class EducationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 100, vars: 0, consts: [["id", "Education"], [1, "cardTitle"], [1, "container"], [1, "fb-card-container"], [1, "card", "front"], [1, "university"], [1, "course"], [1, "cgpa"], ["value", "0.97", "width", "200"], [1, "coursetable"], [2, "width", "100%"], [1, "border"], ["mat-button", ""], [1, "card", "back"], [1, "universitybtech"], ["value", "0.80", "width", "200"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NORTHEASTERN UNIVERSITY, BOSTON, MA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Master of Science in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Information Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " GPA\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A03.8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "/4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "progress", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "3.8 out of 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00A0\u00A0\u00A0\u00A0Application Engineering and Development using Java and Swing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00A0\u00A0\u00A0\u00A0Database Management and Database Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00A0\u00A0\u00A0\u00A0Web Development Tools and Methods using Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00A0\u00A0\u00A0\u00A0Web Design and User Experience Engineering using Angular Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u00A0\u00A0\u00A0\u00A0Network Structures and Cloud Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "TBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "ANNA UNIVERSITY, TN, INDIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Bachelor of Technology in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Ceramic Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " CGPA\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A08.0/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "progress", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "8.0 out of 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Relevant Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u00A0\u00A0\u00A0\u00A0Computing Techniques in C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u00A0\u00A0\u00A0\u00A0Computer Practices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u00A0\u00A0\u00A0\u00A0Unix Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u00A0\u00A0\u00A0\u00A0Probability and Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  font-family: Quicksand, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-left: 0;\n  width: 60%;\n  margin-top: 80px;\n}\n\n.fb-card-container[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 500px;\n  margin: 0 auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 400px;\n  border-radius: 2px;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.front[_ngcontent-%COMP%] {\n  background-color: #faf7eb;\n  background-color: white;\n  position: absolute;\n}\n\n.back[_ngcontent-%COMP%] {\n  background-color: #032231;\n  color: #eee;\n  position: absolute;\n  z-index: -1;\n  transform: translate(15px, 15px);\n  transition-property: transform;\n  transition-duration: 0.6s;\n}\n\n.front[_ngcontent-%COMP%]:hover    ~ .back[_ngcontent-%COMP%] {\n  transform: translate(670px, 0px);\n}\n\n@-webkit-keyframes slide-out {\n  from {\n    transform: translate(15px, 15px);\n  }\n  to {\n    transform: translate(670px, 0px);\n  }\n}\n\n@keyframes slide-out {\n  from {\n    transform: translate(15px, 15px);\n  }\n  to {\n    transform: translate(670px, 0px);\n  }\n}\n\n.cardTitle[_ngcontent-%COMP%] {\n  margin-top: 4%;\n  color: #032231;\n  font-size: 25px;\n  justify-content: center;\n  font-family: Verdana;\n  text-align: center;\n  letter-spacing: 0.05em;\n}\n\n.university[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 2%;\n  padding-top: 3%;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  background-color: #032231;\n  height: 15%;\n  color: white;\n}\n\n.universitybtech[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 2%;\n  padding-top: 3%;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  background-color: white;\n  height: 15%;\n  color: black;\n}\n\n.course[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  font-size: 17px;\n  margin-left: 2%;\n  text-align: left;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.cgpa[_ngcontent-%COMP%] {\n  margin-top: 1.5%;\n  margin-left: 2%;\n  text-align: left;\n}\n\nprogress[_ngcontent-%COMP%]::-webkit-progress-value {\n  background: black !important;\n}\n\n\n\nprogress[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 4px;\n  width: 59%;\n}\n\n.coursetable[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 1%;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\ntr.border[_ngcontent-%COMP%] {\n  outline: 0.5px solid rgba(173, 166, 166, 0.432);\n  margin-left: 3%;\n  padding: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvTkVVL0dpdEh1Yl9SZXBvL1NyaWRoYXJQcmFzYWQtUGFubmVlcnNlbHZhbS5naXRodWIuaW8vcG9ydGZvbGlvL3NyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0Esa0NBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBR0Esa0JBQUE7QUNGRjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDSkY7O0FET0E7RUFDRSxnQ0FBQTtBQ0pGOztBRE9BO0VBQ0U7SUFDRSxnQ0FBQTtFQ0pGO0VETUE7SUFDRSxnQ0FBQTtFQ0pGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLGdDQUFBO0VDSkY7RURNQTtJQUNFLGdDQUFBO0VDSkY7QUFDRjs7QURPQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDTEY7O0FEUUE7RUFHRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUEY7O0FEVUE7RUFHRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVEY7O0FEYUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNIQUFBO0FDVkY7O0FEY0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hGOztBRGNBO0VBQ0UsNEJBQUE7QUNYRjs7QURlQSw2Q0FBQTs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNiRjs7QURtQkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsK0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2hCRiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBmb250LWZhbWlseTogUXVpY2tzYW5kLHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDowO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4uZmItY2FyZC1jb250YWluZXIge1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLDAsMCwuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuLmZyb250IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjdlYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMzQsIDQ5KTtcbiAgY29sb3I6ICNlZWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC42cztcbn1cblxuLmZyb250OmhvdmVyIH4gLmJhY2sge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2NzBweCwgMHB4KTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjcwcHgsIDBweCk7XG4gIH1cbn1cblxuLmNhcmRUaXRsZXtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGNvbG9yOiByZ2IoMywgMzQsIDQ5KTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLnVuaXZlcnNpdHl7XG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAvL21hcmdpbi10b3A6IDElO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDIlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMzQsIDQ5KTtcbiAgaGVpZ2h0OiAxNSU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgXG59XG4udW5pdmVyc2l0eWJ0ZWNoe1xuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgLy9tYXJnaW4tdG9wOiAxJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAyJTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTUlO1xuICBjb2xvcjogYmxhY2s7XG4gIFxufVxuXG4uY291cnNle1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cbn1cblxuLmNncGF7XG4gIG1hcmdpbi10b3A6IDEuNSU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG5cbi8qIGhlaWd0IG9mIHByb2dyZXNzYmFyIGFuZCBiYWNrZ3JvdW5kIGNvbG9yKi9cblxucHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiA1OSU7XG59XG5cblxuXG5cbi5jb3Vyc2V0YWJsZXtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxudHIuYm9yZGVye1xuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2JhKDE3MywgMTY2LCAxNjYsIDAuNDMyKTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBwYWRkaW5nOiAzJTtcbn1cblxuXG5cbi8vIC5tYXQtYnV0dG9ue1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyAgIGJvcmRlci1jb2xvcjogcmdiKDMsIDM0LCA0OSk7XG4vLyAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40ODYpO1xuLy8gJjpob3Zlcntcbi8vICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40ODYpO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG4vLyB9IiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLmZiLWNhcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmQge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZnJvbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmN2ViO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzIyMzE7XG4gIGNvbG9yOiAjZWVlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xufVxuXG4uZnJvbnQ6aG92ZXIgfiAuYmFjayB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDY3MHB4LCAwcHgpO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2NzBweCwgMHB4KTtcbiAgfVxufVxuLmNhcmRUaXRsZSB7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBjb2xvcjogIzAzMjIzMTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLnVuaXZlcnNpdHkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDIlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzIyMzE7XG4gIGhlaWdodDogMTUlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51bml2ZXJzaXR5YnRlY2gge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDIlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDE1JTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY291cnNlIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi5jZ3BhIHtcbiAgbWFyZ2luLXRvcDogMS41JTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi8qIGhlaWd0IG9mIHByb2dyZXNzYmFyIGFuZCBiYWNrZ3JvdW5kIGNvbG9yKi9cbnByb2dyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogNTklO1xufVxuXG4uY291cnNldGFibGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuXG50ci5ib3JkZXIge1xuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2JhKDE3MywgMTY2LCAxNjYsIDAuNDMyKTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBwYWRkaW5nOiAzJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");



class ExperienceComponent {
    constructor() {
    }
    ngOnInit() {
        timeline();
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 85, vars: 0, consts: [["id", "Experience", 1, "timeline"], [1, "cardTitle"], ["id", "meBaby", "src", "https://www.upstatement.com/img/portfolio/nu-brand/athletics-logo-roundrect-husky-n-red.svg"], [1, "fas", "fa-university"], [1, "fas", "fa-location-arrow"], [1, "fas", "fa-graduation-cap"], ["src", "https://manavrachna.edu.in/wp-content/uploads/2017/03/Infosys-Campus-Connect-image-1-1024x585.jpg", 1, "photos"], [1, "fas", "fa-laptop-code"], [1, "fas", "fa-award"], ["src", "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Anna_University_Logo.svg/1200px-Anna_University_Logo.svg.png", "width", "50", "height", "50"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TIMELINE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "September 2019 - May 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Northeastern University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Boston, MA, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Master of Science in Information Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Jan 2019 - June 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Senior Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " @ Infosys Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Bangalore, KA, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Outstanding Performance Award ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "June 2017- December 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " @ Infosys Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Bangalore, KA, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Best Debutant Award ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "December 2016 - May 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Software Engineer Trainee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " @ Infosys Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Mysore, KA, India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "August 2016 - May 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Anna University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Chennai, TN, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Bachelor of Technology in Ceramic Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"]], styles: ["@charset \"UTF-8\";\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  font: normal 16px/1.5 \"Helvetica Neue\", sans-serif;\n  background: #032231;\n  color: black;\n  overflow-x: hidden;\n  padding-bottom: 50px;\n}\n\n.intro[_ngcontent-%COMP%] {\n  background: white;\n  padding: 100px 0;\n}\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.22);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: #032231;\n  padding: 50px 0;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  width: 10px;\n  margin: 0 auto;\n  padding-top: 50px;\n  background: black;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: inherit;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  width: 400px;\n  padding: 15px;\n  background: white;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 7px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   div[_ngcontent-%COMP%] {\n  left: 45px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   div[_ngcontent-%COMP%]::before {\n  left: -15px;\n  border-width: 8px 16px 8px 0;\n  border-color: transparent white transparent transparent;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)   div[_ngcontent-%COMP%] {\n  left: -439px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)   div[_ngcontent-%COMP%]::before {\n  right: -15px;\n  border-width: 8px 0 8px 16px;\n  border-color: transparent transparent transparent white;\n}\ntime[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  transition: background 0.5s ease-in-out;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.in-view[_ngcontent-%COMP%]::after {\n  background: white;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   div[_ngcontent-%COMP%] {\n  transform: translate3d(200px, 0, 0);\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)   div[_ngcontent-%COMP%] {\n  transform: translate3d(-200px, 0, 0);\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.in-view[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: none;\n  visibility: visible;\n  opacity: 1;\n}\n\n@media screen and (max-width: 900px) {\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)   div[_ngcontent-%COMP%] {\n    left: -289px;\n    \n  }\n}\n@media screen and (max-width: 600px) {\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: calc(100vw - 91px);\n  }\n\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)   div[_ngcontent-%COMP%] {\n    left: 45px;\n  }\n\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)   div[_ngcontent-%COMP%]::before {\n    left: -15px;\n    border-width: 8px 16px 8px 0;\n    border-color: transparent white transparent transparent;\n  }\n}\n#meBaby[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 55px;\n}\n.photos[_ngcontent-%COMP%] {\n  width: 80px;\n  height: auto;\n}\na[_ngcontent-%COMP%]:visited {\n  color: black;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #AD1457;\n}\n.cardTitle[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  color: white;\n  font-size: 25px;\n  justify-content: center;\n  font-family: Verdana;\n  text-align: center;\n  letter-spacing: 0.05em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9ORVUvR2l0SHViX1JlcG8vU3JpZGhhclByYXNhZC1QYW5uZWVyc2VsdmFtLmdpdGh1Yi5pby9wb3J0Zm9saW8vc3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FERUY7QUNFMkIsK0JBQUE7QUFDUiwyQkFBQTtBQUNDLDZCQUFBO0FBTXBCO0VBQ0Usa0RBQUE7RUFDQSxtQkFWVTtFQVdWLFlBVFc7RUFVWCxrQkFBQTtFQUNBLG9CQUFBO0FESkY7QUNPQTtvREFBQTtBQUdBO0VBQ0UsaUJBbkJVO0VBb0JWLGdCQUFBO0FETEY7QUNRQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDRFQUFBO0FETEY7QUNTQTtFQUNFLGlCQUFBO0FETkY7QUNVQTtvREFBQTtBQUdBO0VBQ0UsbUJBMUNVO0VBMkNWLGVBQUE7QURSRjtBQ1dBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFsRFc7QUQwQ2I7QUNXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURSRjtBQ1dBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkF2RVU7QUQrRFo7QUNXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FEUkY7QUNXQTtFQUNFLFVBQUE7QURSRjtBQ1dBO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsdURBQUE7QURSRjtBQ1dBO0VBQ0UsWUFBQTtBRFJGO0FDV0E7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx1REFBQTtBRFJGO0FDV0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEUkY7QUNZQTtvREFBQTtBQUdBO0VBQ0UsdUNBQUE7QURWRjtBQ2FBO0VBQ0UsaUJBdkhVO0FENkdaO0FDYUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBRFZGO0FDYUE7RUFDRSxtQ0FBQTtBRFZGO0FDYUE7RUFDRSxvQ0FBQTtBRFZGO0FDYUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FEVkY7QUNjQTtvREFBQTtBQUdBO0VBQ0U7SUFDRSxZQUFBO0VEWkY7O0VDY0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFRFhGO0FBQ0Y7QUNjQTtFQUNFO0lBQ0UsaUJBQUE7RURaRjs7RUNjQTtJQUNFLHlCQUFBO0VEWEY7O0VDYUE7SUFDRSxVQUFBO0VEVkY7O0VDWUE7SUFDRSxXQUFBO0lBQ0EsNEJBQUE7SUFDQSx1REFBQTtFRFRGO0FBQ0Y7QUNnQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRGRGO0FDaUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURkRjtBQ2dCQTtFQUFZLFlBekxDO0FENktiO0FDYUE7RUFBVSxjQUFBO0FEVFY7QUNXQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FEUkoiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIGRhcmsgcGluayBmb3IgdGhlIGJnLWNvbG9yICovXG4vKmRhcmsgY2F5biBmb3IgdGhlIGJveGVzICovXG4vKiBsaWdodCBwaW5rICBmb3IgdGhlIHdvcmRzKi9cbmJvZHkge1xuICBmb250OiBub3JtYWwgMTZweC8xLjUgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjMDMyMjMxO1xuICBjb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi8qIElOVFJPIFNFQ1RJT05cbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLmludHJvIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLyogVElNRUxJTkVcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLnRpbWVsaW5lIHVsIHtcbiAgYmFja2dyb3VuZDogIzAzMjIzMTtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuXG4udGltZWxpbmUgdWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi50aW1lbGluZSB1bCBsaTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLnRpbWVsaW5lIHVsIGxpIGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udGltZWxpbmUgdWwgbGkgZGl2OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogN3B4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKG9kZCkgZGl2IHtcbiAgbGVmdDogNDVweDtcbn1cblxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpIGRpdjo6YmVmb3JlIHtcbiAgbGVmdDogLTE1cHg7XG4gIGJvcmRlci13aWR0aDogOHB4IDE2cHggOHB4IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikgZGl2IHtcbiAgbGVmdDogLTQzOXB4O1xufVxuXG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGRpdjo6YmVmb3JlIHtcbiAgcmlnaHQ6IC0xNXB4O1xuICBib3JkZXItd2lkdGg6IDhweCAwIDhweCAxNnB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlO1xufVxuXG50aW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4vKiBFRkZFQ1RTXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi50aW1lbGluZSB1bCBsaTo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50aW1lbGluZSB1bCBsaS5pbi12aWV3OjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udGltZWxpbmUgdWwgbGkgZGl2IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpIGRpdiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwcHgsIDAsIDApO1xufVxuXG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGRpdiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMHB4LCAwLCAwKTtcbn1cblxuLnRpbWVsaW5lIHVsIGxpLmluLXZpZXcgZGl2IHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBHRU5FUkFMIE1FRElBIFFVRVJJRVNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnRpbWVsaW5lIHVsIGxpIGRpdiB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG5cbiAgLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKSBkaXYge1xuICAgIGxlZnQ6IC0yODlweDtcbiAgICAvKjI1MCs0NS02Ki9cbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRpbWVsaW5lIHVsIGxpIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIC50aW1lbGluZSB1bCBsaSBkaXYge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTFweCk7XG4gIH1cblxuICAudGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGRpdiB7XG4gICAgbGVmdDogNDVweDtcbiAgfVxuXG4gIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikgZGl2OjpiZWZvcmUge1xuICAgIGxlZnQ6IC0xNXB4O1xuICAgIGJvcmRlci13aWR0aDogOHB4IDE2cHggOHB4IDA7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgfVxufVxuI21lQmFieSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5waG90b3Mge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogI0FEMTQ1Nztcbn1cblxuLmNhcmRUaXRsZSB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59IiwiKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBcbn1cblxuJEJHLWNvbG9yOiAgcmdiKDMsIDM0LCA0OSk7LyogZGFyayBwaW5rIGZvciB0aGUgYmctY29sb3IgKi9cbiRib3gtY29sb3I6IHdoaXRlOyAvKmRhcmsgY2F5biBmb3IgdGhlIGJveGVzICovXG4kZm9udC1jb2xvcjogYmxhY2s7IC8qIGxpZ2h0IHBpbmsgIGZvciB0aGUgd29yZHMqL1xuXG4vLyAkQkctY29sb3I6IHJnYig1LCAxMzEsIDEwNCk7IC8qIGRhcmsgcGluayBmb3IgdGhlIGJnLWNvbG9yICovXG4vLyAkYm94LWNvbG9yOiByZ2IoMywgMzQsIDQ5KTsgLypkYXJrIGNheW4gZm9yIHRoZSBib3hlcyAqL1xuLy8gJGZvbnQtY29sb3I6IHdoaXRlOyAvKiBsaWdodCBwaW5rICBmb3IgdGhlIHdvcmRzKi9cblxuYm9keSB7XG4gIGZvbnQ6IG5vcm1hbCAxNnB4LzEuNSBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6ICRCRy1jb2xvcjtcbiAgY29sb3I6ICRmb250LWNvbG9yO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufSAgXG5cbi8qIElOVFJPIFNFQ1RJT05cbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuXG4uaW50cm8ge1xuICBiYWNrZ3JvdW5kOiAkYm94LWNvbG9yO1xuICBwYWRkaW5nOiAxMDBweCAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMjBweCAyMHB4IHJnYmEoMCwwLDAsMC4yMik7XG5cbn1cblxuaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuXG4vKiBUSU1FTElORVxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5cbi50aW1lbGluZSB1bCB7XG4gIGJhY2tncm91bmQ6ICRCRy1jb2xvcjtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuXG4udGltZWxpbmUgdWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZDogJGZvbnQtY29sb3I7XG59XG5cbi50aW1lbGluZSB1bCBsaTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi50aW1lbGluZSB1bCBsaSBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAkYm94LWNvbG9yO1xufVxuXG4udGltZWxpbmUgdWwgbGkgZGl2OjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDdweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpIGRpdiB7XG4gIGxlZnQ6IDQ1cHg7XG59XG5cbi50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQob2RkKSBkaXY6OmJlZm9yZSB7XG4gIGxlZnQ6IC0xNXB4O1xuICBib3JkZXItd2lkdGg6IDhweCAxNnB4IDhweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRib3gtY29sb3IgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikgZGl2IHtcbiAgbGVmdDogLTQzOXB4O1xufVxuXG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGRpdjo6YmVmb3JlIHtcbiAgcmlnaHQ6IC0xNXB4O1xuICBib3JkZXItd2lkdGg6IDhweCAwIDhweCAxNnB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRib3gtY29sb3I7XG59XG5cbnRpbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cblxuLyogRUZGRUNUU1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5cbi50aW1lbGluZSB1bCBsaTo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBlYXNlLWluLW91dDtcbn1cblxuLnRpbWVsaW5lIHVsIGxpLmluLXZpZXc6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogJGJveC1jb2xvcjtcbn1cblxuLnRpbWVsaW5lIHVsIGxpIGRpdiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcbn1cblxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpIGRpdiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwcHgsIDAsIDApO1xufVxuXG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGRpdiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMHB4LCAwLCAwKTtcbn1cblxuLnRpbWVsaW5lIHVsIGxpLmluLXZpZXcgZGl2IHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG5cbi8qIEdFTkVSQUwgTUVESUEgUVVFUklFU1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC50aW1lbGluZSB1bCBsaSBkaXYge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICAudGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGRpdiB7XG4gICAgbGVmdDogLTI4OXB4O1xuICAgIC8qMjUwKzQ1LTYqL1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50aW1lbGluZSB1bCBsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLnRpbWVsaW5lIHVsIGxpIGRpdiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA5MXB4KTtcbiAgfVxuICAudGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGRpdiB7XG4gICAgbGVmdDogNDVweDtcbiAgfVxuICAudGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGRpdjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAtMTVweDtcbiAgICBib3JkZXItd2lkdGg6IDhweCAxNnB4IDhweCAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgJGJveC1jb2xvciB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIG15IHBob3RvIGluIHRoZSBzbm93XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuI21lQmFieXtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTVweDtcbn1cblxuLnBob3Rvc3tcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbmE6dmlzaXRlZCB7IGNvbG9yOiAkZm9udC1jb2xvcjt9XG5hOmhvdmVyIHsgY29sb3I6ICNBRDE0NTc7fVxuXG4uY2FyZFRpdGxle1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 17, vars: 0, consts: [[1, "footer"], [1, "icons"], ["href", "https://www.linkedin.com/in/SridharPrasadPanneerselvam/", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fab", "fa-linkedin", "fa-2x"], ["href", "https://github.com/SridharPrasad-Panneerselvam", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fab", "fa-github", "fa-2x"], ["href", "https://goo.gl/maps/8Wdbt33DDJBMq7FJ7", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fa", "fa-map-marker", "fa-2x"], ["href", "https://twitter.com/SridharprasadP", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fab", "fa-twitter", "fa-2x"], ["href", "https://www.facebook.com/sridhar.prasad.7", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fa", "fa-facebook-square", "fa-2x"], ["href", "https://www.instagram.com/sridharprasad.p/", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fa", "fa-instagram", "fa-2x"], [1, "lastline"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Copyright \u00A9 2020 Sridhar Prasad Panneerselvam. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #032231;\n  bottom: 0%;\n  \n  width: 100%;\n  \n  height: 90px;\n}\n\n.icons[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  text-align: center;\n}\n\n.icons[_ngcontent-%COMP%]   .fa-linkedin[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: #3376b0;\n  transition: 0.4s all;\n}\n\n.icons[_ngcontent-%COMP%]   .fa-instagram[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: #ac1453;\n  transition: 0.4s all;\n}\n\n.icons[_ngcontent-%COMP%]   .fa-github[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  transition: 0.4s all;\n  color: #4e4b4b;\n}\n\n.icons[_ngcontent-%COMP%]   .fa-facebook-square[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: #3b5998;\n  transition: 0.4s all;\n}\n\n.icons[_ngcontent-%COMP%]   .fa-map-marker[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: #158b05;\n  transition: 0.4s all;\n}\n\n.icons[_ngcontent-%COMP%]   .fa-twitter[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: #38A1F3;\n  transition: 0.4s all;\n}\n\na[_ngcontent-%COMP%] {\n  margin-left: 3.8%;\n  color: #ebebeb;\n}\n\na[_ngcontent-%COMP%]:first-child {\n  margin-left: 0%;\n}\n\na[_ngcontent-%COMP%]:visited {\n  color: #e2e7ec;\n}\n\n.lastline[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.377);\n  text-align: center;\n  margin-bottom: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvTkVVL0dpdEh1Yl9SZXBvL1NyaWRoYXJQcmFzYWQtUGFubmVlcnNlbHZhbS5naXRodWIuaW8vcG9ydGZvbGlvL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFFQSxVQUFBO0VBQVksK0NBQUE7RUFDWixXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7QUNFSjs7QURDRTtFQUNHLGNBQUE7RUFDQSxpQkFBQTtFQUNELGtCQUFBO0FDRUo7O0FEREk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0dSOztBRERJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNHUjs7QURESTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDR1I7O0FEREk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0dSOztBRERJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNHUjs7QURESTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDR1I7O0FEQ0E7RUFJSSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURISTtFQUNJLGVBQUE7QUNLUjs7QURBRTtFQUNFLGNBQUE7QUNHSjs7QURBRTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDM0LCA0OSk7XG4gICAgLy9wb3NpdGlvbjogZml4ZWQ7IC8qIFNldCB0aGUgbmF2YmFyIHRvIGZpeGVkIHBvc2l0aW9uICovXG4gICAgYm90dG9tOiAwJTsgLyogUG9zaXRpb24gdGhlIG5hdmJhciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDkwcHg7XG4gIH1cblxuICAuaWNvbnMge1xuICAgICBtYXJnaW4tdG9wOiAxJTsgXG4gICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuZmEtbGlua2VkaW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIGNvbG9yOiByZ2IoNTEsIDExOCwgMTc2KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG4gICAgfVxuICAgIC5mYS1pbnN0YWdyYW0ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIGNvbG9yOiNhYzE0NTM7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICAgIH1cbiAgICAuZmEtZ2l0aHViIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbiAgICAgICAgY29sb3I6IHJnYig3OCwgNzUsIDc1KTtcbiAgICB9XG4gICAgLmZhLWZhY2Vib29rLXNxdWFyZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgY29sb3I6IzNiNTk5ODtcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG4gICAgfVxuICAgIC5mYS1tYXAtbWFya2VyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICBjb2xvcjojMTU4YjA1O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbiAgICB9XG4gICAgLmZhLXR3aXR0ZXJ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgY29sb3I6ICMzOEExRjM7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICAgIH1cbn1cblxuYXtcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgfVxuICAgIG1hcmdpbi1sZWZ0OiAzLjglO1xuICAgIGNvbG9yOiAjZWJlYmViO1xufVxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAjZTJlN2VjO1xuICB9XG5cbiAgLmxhc3RsaW5le1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNzcpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIH0iLCIuZm9vdGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjIzMTtcbiAgYm90dG9tOiAwJTtcbiAgLyogUG9zaXRpb24gdGhlIG5hdmJhciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogOTBweDtcbn1cblxuLmljb25zIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaWNvbnMgLmZhLWxpbmtlZGluIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjb2xvcjogIzMzNzZiMDtcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG59XG4uaWNvbnMgLmZhLWluc3RhZ3JhbSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6ICNhYzE0NTM7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xufVxuLmljb25zIC5mYS1naXRodWIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICBjb2xvcjogIzRlNGI0Yjtcbn1cbi5pY29ucyAuZmEtZmFjZWJvb2stc3F1YXJlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjb2xvcjogIzNiNTk5ODtcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG59XG4uaWNvbnMgLmZhLW1hcC1tYXJrZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGNvbG9yOiAjMTU4YjA1O1xuICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbn1cbi5pY29ucyAuZmEtdHdpdHRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6ICMzOEExRjM7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xufVxuXG5hIHtcbiAgbWFyZ2luLWxlZnQ6IDMuOCU7XG4gIGNvbG9yOiAjZWJlYmViO1xufVxuYTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuYTp2aXNpdGVkIHtcbiAgY29sb3I6ICNlMmU3ZWM7XG59XG5cbi5sYXN0bGluZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzc3KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirecttoprofile() {
        this.router.navigate(['/profile']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 36, vars: 0, consts: [["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.13.0/css/all.css"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.13.0/css/v4-shims.css"], [1, "mainpage"], [1, "name"], [1, "text_fade"], [1, "designation"], [2, "color", "orange"], [2, "color", "rgb(9, 192, 248)"], ["data-back", "Let's get started!", "data-front", "View my Profile ", 1, "horizontal-flip-hover", 3, "click"], [1, "fas", "fa-angle-right"], [1, "links"], ["href", "https://www.linkedin.com/in/SridharPrasadPanneerselvam/", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fab", "fa-linkedin", "fa-3x"], ["href", "https://github.com/SridharPrasad-Panneerselvam", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fab", "fa-github", "fa-3x"], ["href", "https://goo.gl/maps/8Wdbt33DDJBMq7FJ7", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fa", "fa-map-marker", "fa-3x"], ["href", "https://twitter.com/SridharprasadP", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fab", "fa-twitter", "fa-3x"], ["href", "https://www.facebook.com/sridhar.prasad.7", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fa", "fa-facebook-square", "fa-3x"], ["href", "https://www.instagram.com/sridharprasad.p/", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fa", "fa-instagram", "fa-3x"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sridhar Prasad Panneerselvam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Software Engineer | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "since 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_20_listener() { return ctx.redirecttoprofile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Let's get started! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mainpage[_ngcontent-%COMP%] {\n  background: url('Pic10.jpg') center center/cover;\n  height: 760px;\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100vw;\n}\n\n.name[_ngcontent-%COMP%] {\n  top: 200px;\n}\n\n.name[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: 200px;\n  color: rgba(245, 237, 237, 0.918);\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  letter-spacing: 0.7em;\n  font-size: 25pt;\n  font-weight: 200;\n  text-transform: uppercase;\n  bottom: 20px;\n}\n\n.designation[_ngcontent-%COMP%] {\n  margin-top: 320px;\n}\n\n.designation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  color: white;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  letter-spacing: 0.4em;\n  font-size: 1.5vw;\n  font-weight: 1200;\n  opacity: 0.2;\n  text-transform: lowercase;\n}\n\n@keyframes fade_text {\n  0% {\n    opacity: 1;\n  }\n  10% {\n    opacity: 0.8;\n  }\n  25% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  65% {\n    opacity: 0.5;\n  }\n  90% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fade_text {\n  0% {\n    opacity: 1;\n  }\n  10% {\n    opacity: 0.8;\n  }\n  25% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  65% {\n    opacity: 0.5;\n  }\n  90% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.text_fade[_ngcontent-%COMP%] {\n  -webkit-animation: fade_text 8s infinite ease-in;\n  animation: fade_text 8s infinite ease-in;\n}\n\n.mainpage[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  justify-content: center;\n  position: relative;\n  display: inline-block;\n  margin-top: 150px;\n  padding: 1rem 4rem 1rem 2rem;\n  width: 200px;\n  height: 50px;\n  text-align: center;\n  background-color: inherit;\n  left: 42.5%;\n  font-size: 15pt;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  line-height: 2rem;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.mainpage[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.486);\n  background-color: rgba(255, 255, 255, 0.123);\n  text-decoration: none;\n}\n\n.mainpage[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1.6rem;\n  top: 1.45rem;\n  text-decoration: none;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: red;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  border-radius: 2.5em;\n  padding: 1em;\n  margin: 0.5em;\n  cursor: pointer;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: white;\n}\n\n.navbar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: red;\n  color: red;\n}\n\n.links[_ngcontent-%COMP%] {\n  margin-top: 3%;\n}\n\n.links[_ngcontent-%COMP%]   .fa-linkedin[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #3376b0;\n  transition: 0.4s all;\n}\n\n.links[_ngcontent-%COMP%]   .fa-instagram[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #ac1453;\n  transition: 0.4s all;\n}\n\n.links[_ngcontent-%COMP%]   .fa-github[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.4s all;\n  color: #4e4b4b;\n}\n\n.links[_ngcontent-%COMP%]   .fa-facebook-square[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #3b5998;\n  transition: 0.4s all;\n}\n\n.links[_ngcontent-%COMP%]   .fa-map-marker[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #158b05;\n  transition: 0.4s all;\n}\n\n.links[_ngcontent-%COMP%]   .fa-twitter[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #38A1F3;\n  transition: 0.4s all;\n}\n\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 11.5%;\n  color: #1b242f;\n}\n\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #1b242f;\n}\n\n.horizontal-flip-hover[_ngcontent-%COMP%] {\n  text-indent: -100em;\n}\n\n.horizontal-flip-hover[_ngcontent-%COMP%]:before, .horizontal-flip-hover[_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-indent: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: all 0.4s ease-in-out;\n}\n\n.horizontal-flip-hover[_ngcontent-%COMP%]:before {\n  content: attr(data-front);\n  z-index: 2;\n  color: rgba(255, 255, 255, 0.486);\n  padding-top: 3%;\n}\n\n.horizontal-flip-hover[_ngcontent-%COMP%]:hover:before {\n  z-index: 1;\n  transform: rotateX(180deg);\n}\n\n.horizontal-flip-hover[_ngcontent-%COMP%]:after {\n  content: attr(data-back);\n  z-index: 1;\n  transform: rotateX(-180deg);\n  padding-top: 3%;\n  background-color: rgba(255, 255, 255, 0.123);\n}\n\n.horizontal-flip-hover[_ngcontent-%COMP%]:hover:after {\n  z-index: 2;\n  transform: rotateX(0deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvTkVVL0dpdEh1Yl9SZXBvL1NyaWRoYXJQcmFzYWQtUGFubmVlcnNlbHZhbS5naXRodWIuaW8vcG9ydGZvbGlvL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnREFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxrREFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHRTtFQUNFO0lBQU0sVUFBQTtFQ0NSO0VEQUU7SUFBTyxZQUFBO0VDR1Q7RURGRTtJQUFPLFlBQUE7RUNLVDtFREpFO0lBQU8sWUFBQTtFQ09UO0VETkU7SUFBTyxZQUFBO0VDU1Q7RURSRTtJQUFPLFlBQUE7RUNXVDtFRFZFO0lBQU8sVUFBQTtFQ2FUO0FBQ0Y7O0FETUU7RUFDRztJQUFNLFVBQUE7RUMyQ1Q7RUQxQ0U7SUFBTyxZQUFBO0VDNkNUO0VENUNFO0lBQU8sWUFBQTtFQytDVDtFRDlDRTtJQUFPLFlBQUE7RUNpRFQ7RURoREU7SUFBTyxZQUFBO0VDbURUO0VEbERFO0lBQU8sWUFBQTtFQ3FEVDtFRHBERTtJQUFPLFVBQUE7RUN1RFQ7QUFDRjs7QURwREU7RUFDRSxnREFBQTtFQUdDLHdDQUFBO0FDc0RMOztBRG5EQztFQUNJLHVCQUFBO0VBQ0Qsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtEQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ21ESjs7QURqREk7RUFFRSx3Q0FBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7QUNrRE47O0FEaERJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDa0ROOztBRDlDQztFQUNHLHFCQUFBO0VBQ0EsaUNBQUE7QUNpREo7O0FEaERJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNrRFI7O0FEL0NRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDaURaOztBRDlDSTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQ2dEUjs7QUQ1Q0E7RUFDRSxjQUFBO0FDK0NGOztBRDdDRTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDK0NOOztBRDdDRTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDK0NOOztBRDdDRTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDK0NOOztBRDdDRTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDK0NOOztBRDdDRTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDK0NOOztBRDdDRTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDK0NOOztBRDNDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQzhDRjs7QUQ1Q0E7RUFDRSxjQUFBO0FDK0NGOztBRHRCQTtFQUNFLG1CQUFBO0FDeUJGOztBRHRCQTs7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLG1DQUFBO0VBR0EsMkJBQUE7RUFNQSxnQ0FBQTtBQ3VCRjs7QURwQkE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUN1QkY7O0FEcEJBO0VBQ0UsVUFBQTtFQUlBLDBCQUFBO0FDdUJGOztBRHBCQTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtFQUlBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0FDdUJGOztBRHBCQTtFQUNFLFVBQUE7RUFJQSx3QkFBQTtBQ3VCRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlucGFnZXtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvUGljMTAuanBnXCIpIGNlbnRlciBjZW50ZXIvY292ZXI7XG4gICAgaGVpZ2h0OiA3NjBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwdnc7XG59XG5cbi5uYW1le1xuICB0b3A6IDIwMHB4O1xufVxuXG4ubmFtZSBoMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGNvbG9yOiByZ2JhKDI0NSwgMjM3LCAyMzcsIDAuOTE4KTtcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLjdlbTtcbiAgICBmb250LXNpemU6IDI1cHQ7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvdHRvbTogMjBweDtcbn1cblxuLmRlc2lnbmF0aW9ue1xuICBtYXJnaW4tdG9wOiAzMjBweDtcbn1cbi8vcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTsgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ0NSk7XG4uZGVzaWduYXRpb24gaDMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgLy90b3A6IDQwdmg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC40ZW07XG4gICAgZm9udC1zaXplOjEuNXZ3O1xuICAgIGZvbnQtd2VpZ2h0OiAxMjAwO1xuICAgIG9wYWNpdHk6IC4yO1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGZhZGVfdGV4dCB7XG4gICAgMCUgIHsgb3BhY2l0eToxO31cbiAgICAxMCUgIHsgb3BhY2l0eTouODsgfVxuICAgIDI1JSAgeyBvcGFjaXR5OiAuNTsgfVxuICAgIDUwJSAgeyBvcGFjaXR5Oi4zOyB9XG4gICAgNjUlICB7IG9wYWNpdHk6LjU7IH1cbiAgICA5MCUgIHsgb3BhY2l0eTogLjg7IH1cbiAgICAxMDAlIHsgb3BhY2l0eToxOyB9XG4gIH1cbiAgQC1vLWtleWZyYW1lcyBmYWRlX3RleHR7XG4gICAgICAwJSAgeyBvcGFjaXR5OjE7fVxuICAgIDEwJSAgeyBvcGFjaXR5Oi44OyB9XG4gICAgMjUlICB7IG9wYWNpdHk6IC41OyB9XG4gICAgNTAlICB7IG9wYWNpdHk6LjM7IH1cbiAgICA2NSUgIHsgb3BhY2l0eTouNTsgfVxuICAgIDkwJSAgeyBvcGFjaXR5OiAuODsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OjE7IH1cbiAgfVxuICBALW1vei1rZXlmcmFtZXMgZmFkZV90ZXh0e1xuICAgICAwJSAgeyBvcGFjaXR5OjE7fVxuICAgIDEwJSAgeyBvcGFjaXR5Oi44OyB9XG4gICAgMjUlICB7IG9wYWNpdHk6IC41OyB9XG4gICAgNTAlICB7IG9wYWNpdHk6LjM7IH1cbiAgICA2NSUgIHsgb3BhY2l0eTouNTsgfVxuICAgIDkwJSAgeyBvcGFjaXR5OiAuODsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OjE7IH1cbiAgfVxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZV90ZXh0e1xuICAgICAwJSAgeyBvcGFjaXR5OjE7fVxuICAgIDEwJSAgeyBvcGFjaXR5Oi44OyB9XG4gICAgMjUlICB7IG9wYWNpdHk6IC41OyB9XG4gICAgNTAlICB7IG9wYWNpdHk6LjM7IH1cbiAgICA2NSUgIHsgb3BhY2l0eTouNTsgfVxuICAgIDkwJSAgeyBvcGFjaXR5OiAuODsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OjE7IH1cbiAgfVxuICBcblxuICAudGV4dF9mYWRle1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlX3RleHQgOHMgaW5maW5pdGUgZWFzZS1pbjtcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZV90ZXh0IDhzIGluZmluaXRlIGVhc2UtaW47XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlX3RleHQgOHMgaW5maW5pdGUgZWFzZS1pbjtcbiAgICAgYW5pbWF0aW9uOiBmYWRlX3RleHQgOHMgaW5maW5pdGUgZWFzZS1pbjtcbiB9XG5cbiAubWFpbnBhZ2UgYnV0dG9ue1xuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDFyZW0gNHJlbSAxcmVtIDJyZW07XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICAvL2NvbG9yOiByZ2JhKDE3NSwgMTY4LCAxNjgsIDAuOTE4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAvL3RvcDogNTUlO1xuICAgIGxlZnQ6IDQyLjUlO1xuICAgIGZvbnQtc2l6ZTogMTVwdDtcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAvL2JvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40ODYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAvL3RleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIC8vY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40ODYpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDg2KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4ocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyMyksIDEwJSk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIGkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEuNjByZW07XG4gICAgICB0b3A6IDEuNDVyZW07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuIH1cblxuIC5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVlbTtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBtYXJnaW46IDAuNWVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIFxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxufVxuXG4ubGlua3Mge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgLy9jb2xvcjp3aGl0ZSA7XG4gIC5mYS1saW5rZWRpbjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICBjb2xvcjogcmdiKDUxLCAxMTgsIDE3Nik7XG4gICAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbiAgfVxuICAuZmEtaW5zdGFncmFtOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIGNvbG9yOiNhYzE0NTM7XG4gICAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbiAgfVxuICAuZmEtZ2l0aHViOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICAgICAgY29sb3I6IHJnYig3OCwgNzUsIDc1KTtcbiAgfVxuICAuZmEtZmFjZWJvb2stc3F1YXJlOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIGNvbG9yOiMzYjU5OTg7XG4gICAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbiAgfVxuICAuZmEtbWFwLW1hcmtlcjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICBjb2xvcjojMTU4YjA1O1xuICAgICAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG4gIH1cbiAgLmZhLXR3aXR0ZXI6aG92ZXJ7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICBjb2xvcjogIzM4QTFGMztcbiAgICAgIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICB9XG59XG5cbi5saW5rcyBhe1xuICBtYXJnaW4tbGVmdDogMTEuNSU7XG4gIGNvbG9yOiAjMWIyNDJmO1xufVxuLmxpbmtzIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjMWIyNDJmO1xufVxuXG4vLyBidXR0b24ge1xuLy8gICBhcHBlYXJhbmNlOiBub25lO1xuLy8gICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogMy4zMzMzZW07XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICBsaW5lLWhlaWdodDogMy4zMzMzZW07XG4vLyAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4vLyAgIGNvbG9yOiBibGFjaztcbi8vICAgei1pbmRleDogMTtcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgYmFja2dyb3VuZDogI2VlZTtcbi8vIH1cbiAgXG4uaG9yaXpvbnRhbC1mbGlwLWhvdmVyIHtcbiAgdGV4dC1pbmRlbnQ6IC0xMDBlbTtcbn1cblxuLmhvcml6b250YWwtZmxpcC1ob3ZlcjpiZWZvcmUsXG4uaG9yaXpvbnRhbC1mbGlwLWhvdmVyOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWluZGVudDogMDtcbiAgXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbXMtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob3Jpem9udGFsLWZsaXAtaG92ZXI6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLWZyb250KTtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4NikgO1xuICBwYWRkaW5nLXRvcDogMyU7XG59XG5cbi5ob3Jpem9udGFsLWZsaXAtaG92ZXI6aG92ZXI6YmVmb3JlIHtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cblxuLmhvcml6b250YWwtZmxpcC1ob3ZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1iYWNrKTtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpOyAgXG4gIHRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTsgIFxuICBwYWRkaW5nLXRvcDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4ocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyMyksIDEwJSk7XG59XHRcblxuLmhvcml6b250YWwtZmxpcC1ob3Zlcjpob3ZlcjphZnRlciB7XG4gIHotaW5kZXg6IDI7ICAgXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xufVxuIiwiLm1haW5wYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL1BpYzEwLmpwZ1wiKSBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICBoZWlnaHQ6IDc2MHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubmFtZSB7XG4gIHRvcDogMjAwcHg7XG59XG5cbi5uYW1lIGgxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDIwMHB4O1xuICBjb2xvcjogcmdiYSgyNDUsIDIzNywgMjM3LCAwLjkxOCk7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjdlbTtcbiAgZm9udC1zaXplOiAyNXB0O1xuICBmb250LXdlaWdodDogMjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3R0b206IDIwcHg7XG59XG5cbi5kZXNpZ25hdGlvbiB7XG4gIG1hcmdpbi10b3A6IDMyMHB4O1xufVxuXG4uZGVzaWduYXRpb24gaDMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNGVtO1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBmb250LXdlaWdodDogMTIwMDtcbiAgb3BhY2l0eTogMC4yO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVfdGV4dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwJSB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG4gIDY1JSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZV90ZXh0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAlIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgMjUlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbiAgNjUlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVfdGV4dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwJSB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG4gIDY1JSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlX3RleHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMCUge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAyNSUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuICA2NSUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4udGV4dF9mYWRlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVfdGV4dCA4cyBpbmZpbml0ZSBlYXNlLWluO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZV90ZXh0IDhzIGluZmluaXRlIGVhc2UtaW47XG4gIC1vLWFuaW1hdGlvbjogZmFkZV90ZXh0IDhzIGluZmluaXRlIGVhc2UtaW47XG4gIGFuaW1hdGlvbjogZmFkZV90ZXh0IDhzIGluZmluaXRlIGVhc2UtaW47XG59XG5cbi5tYWlucGFnZSBidXR0b24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBwYWRkaW5nOiAxcmVtIDRyZW0gMXJlbSAycmVtO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBsZWZ0OiA0Mi41JTtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4ubWFpbnBhZ2UgYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDg2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyMyk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tYWlucGFnZSBidXR0b24gaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEuNnJlbTtcbiAgdG9wOiAxLjQ1cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuLm5hdmJhciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIuNWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMC41ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZiYXIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdmJhciAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubGlua3Mge1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cbi5saW5rcyAuZmEtbGlua2VkaW46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGNvbG9yOiAjMzM3NmIwO1xuICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbn1cbi5saW5rcyAuZmEtaW5zdGFncmFtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjb2xvcjogI2FjMTQ1MztcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG59XG4ubGlua3MgLmZhLWdpdGh1Yjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG4gIGNvbG9yOiAjNGU0YjRiO1xufVxuLmxpbmtzIC5mYS1mYWNlYm9vay1zcXVhcmU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGNvbG9yOiAjM2I1OTk4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbn1cbi5saW5rcyAuZmEtbWFwLW1hcmtlcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6ICMxNThiMDU7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xufVxuLmxpbmtzIC5mYS10d2l0dGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjb2xvcjogIzM4QTFGMztcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG59XG5cbi5saW5rcyBhIHtcbiAgbWFyZ2luLWxlZnQ6IDExLjUlO1xuICBjb2xvcjogIzFiMjQyZjtcbn1cblxuLmxpbmtzIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjMWIyNDJmO1xufVxuXG4uaG9yaXpvbnRhbC1mbGlwLWhvdmVyIHtcbiAgdGV4dC1pbmRlbnQ6IC0xMDBlbTtcbn1cblxuLmhvcml6b250YWwtZmxpcC1ob3ZlcjpiZWZvcmUsXG4uaG9yaXpvbnRhbC1mbGlwLWhvdmVyOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWluZGVudDogMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tcy1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uaG9yaXpvbnRhbC1mbGlwLWhvdmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1mcm9udCk7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDg2KTtcbiAgcGFkZGluZy10b3A6IDMlO1xufVxuXG4uaG9yaXpvbnRhbC1mbGlwLWhvdmVyOmhvdmVyOmJlZm9yZSB7XG4gIHotaW5kZXg6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG5cbi5ob3Jpem9udGFsLWZsaXAtaG92ZXI6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtYmFjayk7XG4gIHotaW5kZXg6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMjMpO1xufVxuXG4uaG9yaXpvbnRhbC1mbGlwLWhvdmVyOmhvdmVyOmFmdGVyIHtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class IntroComponent {
    constructor() {
        this.url = "./assets/SridharPrasadPanneerselvam_Resume.pdf";
        this.filename = "SridharPrasadPanneerselvam_Resume.pdf";
    }
    ngOnInit() {
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 39, vars: 2, consts: [["id", "About"], [1, "aboutCard"], ["fxLayout", "row", "fxFlex", "100%"], ["fxLayout", "column", "fxFlex", "40%"], ["mat-card-image", "", "src", "../../assets/ProfilePic1.JPG"], ["fxLayout", "column", "fxFlex", "60%", 1, "contentdiv"], [1, "cardTitle"], [1, "matcardcontent"], [1, "buttonDiv"], [1, "buttonActions"], [2, "text-decoration", "none", 3, "href", "download"], ["mat-button", "", 1, "buttonDownload"], [1, "fas", "fa-file-download"], ["href", "profile#contact", 1, "contactA"], ["mat-button", "", 1, "buttonContact"], [1, "fas", "fa-address-book"], ["flexLayout", "center center", 1, "links"], ["href", "https://www.linkedin.com/in/SridharPrasadPanneerselvam/", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fab", "fa-linkedin", "fa-3x"], ["href", "https://github.com/SridharPrasad-Panneerselvam", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fab", "fa-github", "fa-3x"], ["href", "https://goo.gl/maps/8Wdbt33DDJBMq7FJ7", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fa", "fa-map-marker", "fa-3x"], ["href", "https://twitter.com/SridharprasadP", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fab", "fa-twitter", "fa-3x"], ["href", "https://www.facebook.com/sridhar.prasad.7", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fa", "fa-facebook-square", "fa-3x"], ["href", "https://www.instagram.com/sridharprasad.p/", "target", "_blank", "rel", "noopener noreferrer", 1, "tooltip"], [1, "fa", "fa-instagram", "fa-3x"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Hi! I am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sridhar Prasad Panneerselvam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", currently pursuing my Master's in Information Systems at Northeastern University, Boston and an experienced Software Engineer with a history of working in the Information Technology and Services industry for 2.6 years; have developed software using multiple frameworks; knowledge of software development, cloud computing, networking, database management and design, incident and problem management; Interested in furthering my experience by developing customer focused applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Download CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("download", ctx.filename);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".aboutCard[_ngcontent-%COMP%] {\n  top: 115px;\n  margin-left: 2.5%;\n  width: 95%;\n  height: 100%;\n  background-color: white;\n  background: #fff;\n  display: inline-block;\n  position: relative;\n  padding-bottom: 0px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.aboutCard[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.22);\n}\n\n.contentdiv[_ngcontent-%COMP%] {\n  margin-left: 3%;\n  margin-top: 2%;\n}\n\n.contentdiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  justify-self: center;\n  text-justify: center;\n  font-size: large;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\n.matcardcontent[_ngcontent-%COMP%] {\n  color: black;\n  justify-content: center;\n  text-align: justify;\n  line-height: 2rem;\n  letter-spacing: 0.02rem;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.cardTitle[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 25px;\n  justify-content: center;\n  font-family: Verdana;\n  text-align: center;\n  margin-bottom: 5%;\n  letter-spacing: 0.05em;\n}\n\n.buttonDownload[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  background-color: #032231;\n  color: #f2f2f2 !important;\n  font-family: Verdana;\n  cursor: pointer !important;\n}\n\n.buttonDownload[_ngcontent-%COMP%]:hover {\n  background-color: #058368;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.buttonDiv[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  margin-left: 20%;\n}\n\n.links[_ngcontent-%COMP%] {\n  color: #1b242f;\n}\n\n.links[_ngcontent-%COMP%]   .fa-linkedin[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #3376b0;\n  transition: 0.4s all;\n}\n\n.links[_ngcontent-%COMP%]   .fa-instagram[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #ac1453;\n  transition: 0.4s all;\n}\n\n.links[_ngcontent-%COMP%]   .fa-github[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.4s all;\n  color: #4e4b4b;\n}\n\n.links[_ngcontent-%COMP%]   .fa-facebook-square[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #3b5998;\n  transition: 0.4s all;\n}\n\n.links[_ngcontent-%COMP%]   .fa-map-marker[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #158b05;\n  transition: 0.4s all;\n}\n\n.links[_ngcontent-%COMP%]   .fa-twitter[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #38A1F3;\n  transition: 0.4s all;\n}\n\na[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  color: #1b242f;\n}\n\na[_ngcontent-%COMP%]:visited {\n  color: #1b242f;\n}\n\n.contactA[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.buttonContact[_ngcontent-%COMP%] {\n  background-color: #032231;\n  color: #f2f2f2 !important;\n  font-family: Verdana;\n  cursor: pointer !important;\n}\n\n.buttonContact[_ngcontent-%COMP%]:hover {\n  background-color: #058368;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvTkVVL0dpdEh1Yl9SZXBvL1NyaWRoYXJQcmFzYWQtUGFubmVlcnNlbHZhbS5naXRodWIuaW8vcG9ydGZvbGlvL3NyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0VBQUE7RUFDQSxxREFBQTtBQ0FKOztBREVBO0VBQ0ksNEVBQUE7QUNDSjs7QURFRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ047O0FERUU7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0UsZ0JBQUE7RUFDQSxzRUFBQTtBQ0NSOztBREVFO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDQ047O0FEQ0U7RUFDSSx1QkFBQTtBQ0VOOztBREFFO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDR047O0FEQUU7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FDR047O0FERkU7RUFDRSx5QkFBQTtBQ0lKOztBREFFO0VBQ0ksNkJBQUE7QUNHTjs7QURBRTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0dOOztBREFFO0VBQ0UsY0FBQTtBQ0dKOztBREZJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNJUjs7QURGSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDSVI7O0FERkk7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0lSOztBREZJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNJUjs7QURGSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDSVI7O0FERkk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0lSOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREU7RUFDRSxjQUFBO0FDSUo7O0FEREU7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNJTjs7QURERTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FDSUo7O0FESEk7RUFDSSx5QkFBQTtBQ0tSIiwiZmlsZSI6InNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXRDYXJke1xuICAgIHRvcDogMTE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO31cblxuLmFib3V0Q2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAyMHB4IDIwcHggcmdiYSgwLDAsMCwwLjIyKTtcbiAgfVxuXG4gIC5jb250ZW50ZGl2e1xuICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgICAgbWFyZ2luLXRvcDogMiU7XG4gIH1cblxuICAuY29udGVudGRpdiBwe1xuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcblxuICB9XG4gIC5tYXRjYXJkY29udGVudHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJyZW07XG4gIH1cbiAgbWF0LWNhcmQtY29udGVudHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jYXJkVGl0bGV7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB9XG5cbiAgLmJ1dHRvbkRvd25sb2Fke1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAzNCwgNDkpO1xuICAgICAgY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDEzMSwgMTA0KTtcbn1cbiAgfVxuXG4gIC5tYXQtY2FyZC1pbWFnZXtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbkRpdntcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuXG4gIC5saW5rcyB7XG4gICAgY29sb3I6IzFiMjQyZiA7XG4gICAgLmZhLWxpbmtlZGluOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICBjb2xvcjogcmdiKDUxLCAxMTgsIDE3Nik7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICAgIH1cbiAgICAuZmEtaW5zdGFncmFtOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICBjb2xvcjojYWMxNDUzO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbiAgICB9XG4gICAgLmZhLWdpdGh1Yjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG4gICAgICAgIGNvbG9yOiByZ2IoNzgsIDc1LCA3NSk7XG4gICAgfVxuICAgIC5mYS1mYWNlYm9vay1zcXVhcmU6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIGNvbG9yOiMzYjU5OTg7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICAgIH1cbiAgICAuZmEtbWFwLW1hcmtlcjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgY29sb3I6IzE1OGIwNTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG4gICAgfVxuICAgIC5mYS10d2l0dGVyOmhvdmVye1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIGNvbG9yOiAjMzhBMUYzO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbiAgICB9XG59XG5cbmF7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBjb2xvcjogIzFiMjQyZjtcbn1cbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogIzFiMjQyZjtcbiAgfVxuXG4gIC5jb250YWN0QXtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmJ1dHRvbkNvbnRhY3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDM0LCA0OSk7XG4gICAgY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTMxLCAxMDQpO1xuICAgIH1cbiAgfVxuXG4iLCIuYWJvdXRDYXJkIHtcbiAgdG9wOiAxMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxuXG4uYWJvdXRDYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn1cblxuLmNvbnRlbnRkaXYge1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uY29udGVudGRpdiBwIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHRleHQtanVzdGlmeTogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG59XG5cbi5tYXRjYXJkY29udGVudCB7XG4gIGNvbG9yOiBibGFjaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMnJlbTtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZFRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLmJ1dHRvbkRvd25sb2FkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjIzMTtcbiAgY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuLmJ1dHRvbkRvd25sb2FkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1ODM2ODtcbn1cblxuLm1hdC1jYXJkLWltYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25EaXYge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLmxpbmtzIHtcbiAgY29sb3I6ICMxYjI0MmY7XG59XG4ubGlua3MgLmZhLWxpbmtlZGluOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjb2xvcjogIzMzNzZiMDtcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG59XG4ubGlua3MgLmZhLWluc3RhZ3JhbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6ICNhYzE0NTM7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xufVxuLmxpbmtzIC5mYS1naXRodWI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICBjb2xvcjogIzRlNGI0Yjtcbn1cbi5saW5rcyAuZmEtZmFjZWJvb2stc3F1YXJlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjb2xvcjogIzNiNTk5ODtcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG59XG4ubGlua3MgLmZhLW1hcC1tYXJrZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGNvbG9yOiAjMTU4YjA1O1xuICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbn1cbi5saW5rcyAuZmEtdHdpdHRlcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6ICMzOEExRjM7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xufVxuXG5hIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgY29sb3I6ICMxYjI0MmY7XG59XG5cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjMWIyNDJmO1xufVxuXG4uY29udGFjdEEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbkNvbnRhY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMjMxO1xuICBjb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9uQ29udGFjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTgzNjg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
















// import the modules from the angular material using the full path as it got changed in the version 9
const modules = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [modules,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"]], exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: modules,
                exports: modules,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavComponent {
    constructor(router) {
        this.router = router;
        this.isCollapsed = true;
        this.scrollToView = (element, offset) => {
            const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
            const yOffset = offset;
            window.scrollTo({
                top: yCoordinate + yOffset,
                behavior: 'smooth'
            });
        };
        this.cururl = this.router.url;
    }
    ngOnInit() {
    }
    Home() {
        this.router.navigate[("/home")];
    }
    goTo(str) {
        const el = document.getElementById('navbar-toggler');
        if (el.getAttribute('aria-expanded') == 'true') {
            el.click();
        }
        if (window.innerWidth < 992) {
            this.scrollToView(document.getElementById(str), -350);
        }
        else {
            document.getElementById(str).scrollIntoView({ behavior: "smooth", block: 'start' });
        }
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 23, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "sticky-top", "shadow"], ["id", "navbar-toggler", "type", "button", "data-toggle", "collapse", "data-target", "#stickyNav", "aria-controls", "stickyNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "stickyNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "home", "nav-item", "nav-link", 3, "click"], [1, "nav", "nav-item", "nav-link", 3, "click"], ["href", "./assets/SridharPrasadPanneerselvam_Resume.pdf", "target", "_blank", 1, "nav", "nav-item", "nav-link"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_5_listener() { return ctx.goTo("About"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sridhar's Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_7_listener() { return ctx.goTo("About"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_9_listener() { return ctx.goTo("Skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_11_listener() { return ctx.goTo("Experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_13_listener() { return ctx.goTo("Education"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_15_listener() { return ctx.goTo("Work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_17_listener() { return ctx.goTo("Projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_19_listener() { return ctx.goTo("Contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #032231;\n  position: fixed;\n  \n  top: 0%;\n  \n  width: 100%;\n  \n  left: 0%;\n  z-index: 999;\n  height: 64px;\n  margin: 0px;\n  margin-top: 0em;\n}\n\n.home[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 8.4%;\n}\n\n.nav[_ngcontent-%COMP%] {\n  padding-right: 50px;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-transform: uppercase;\n  font-size: 13.5px;\n  font-family: Verdana;\n  letter-spacing: 0.2em;\n  text-align: center;\n  padding: 22px 22px;\n  text-decoration: none;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #058368;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvTkVVL0dpdEh1Yl9SZXBvL1NyaWRoYXJQcmFzYWQtUGFubmVlcnNlbHZhbS5naXRodWIuaW8vcG9ydGZvbGlvL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQWlCLHFDQUFBO0VBQ2pCLE9BQUE7RUFBUywrQ0FBQTtFQUNULFdBQUE7RUFBYSxlQUFBO0VBQ2IsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNJSjs7QURERTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0lOOztBREFFO0VBQ0ksbUJBQUE7QUNHTjs7QURERSw0QkFBQTs7QUFDQTtFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDRUo7O0FEREk7RUFDSSx5QkFBQTtBQ0dSOztBRENFO0VBQ0ksV0FBQTtBQ0VOOztBRENFO0VBQ0ksYUFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDM0LCA0OSk7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTZXQgdGhlIG5hdmJhciB0byBmaXhlZCBwb3NpdGlvbiAqL1xuICAgIHRvcDogMCU7IC8qIFBvc2l0aW9uIHRoZSBuYXZiYXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgbGVmdDogMCU7XG4gICAgei1pbmRleDo5OTk7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgfVxuXG4gIC5ob21le1xuICAgICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4LjQlO1xuICAgICBcbiAgfVxuICBcbiAgLm5hdntcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbiAgLm5hdmJhciBhIHtcbiAgICBcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjJweCAyMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTMxLCAxMDQpO1xuICAgIH1cbiAgfVxuXG4gIGJvZHl7XG4gICAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIC5uYXZiYXItdG9nZ2xlcntcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiIsIi5uYXZiYXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMjMxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFNldCB0aGUgbmF2YmFyIHRvIGZpeGVkIHBvc2l0aW9uICovXG4gIHRvcDogMCU7XG4gIC8qIFBvc2l0aW9uIHRoZSBuYXZiYXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBsZWZ0OiAwJTtcbiAgei1pbmRleDogOTk5O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAwZW07XG59XG5cbi5ob21lIHtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tcmlnaHQ6IDguNCU7XG59XG5cbi5uYXYge1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIG5hdmJhciAqL1xuLm5hdmJhciBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2YyZjJmMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMy41cHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjJweCAyMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2YmFyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU4MzY4O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");











class ProfileComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 10, vars: 0, consts: [[1, "overflow-wrap"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");



class ProjectsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 261, vars: 0, consts: [["id", "Projects", 1, "cardDiv"], [1, "cardTitle"], [1, "box"], [1, "card"], [1, "imgBx"], ["src", "../../assets/instacart.png", "alt", "images"], [1, "details"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/SridharPrasad-Panneerselvam/InstaCart", 1, "tooltip", 2, "text-decoration", "none"], [1, "codeButton"], [1, "fab", "fa-github", "fa-1.5x"], [1, "buttonDiv"], [1, "skillsButton"], ["src", "../../assets/Capture.PNG", "alt", "images"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/SridharPrasad-Panneerselvam/Road-Side-Assistance", 1, "tooltip", 2, "text-decoration", "none"], ["src", "../../assets/bookshoppe.png", "alt", "images"], ["src", "../../assets/spreadsheet1.png", "alt", "images"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/SridharPrasad-Panneerselvam/SpreadSheet-Application", 1, "tooltip", 2, "text-decoration", "none"], [1, "spreadsheetButton"], ["src", "../../assets/0.jpeg", "alt", "images"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/SridharPrasad-Panneerselvam/To-Do-Application", 1, "tooltip", 2, "text-decoration", "none"], [1, "todoButton"], ["src", "../../assets/medsys.png", "alt", "images"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/SridharPrasad-Panneerselvam/MedSys", 1, "tooltip", 2, "text-decoration", "none"], [1, "medsysButton"], ["src", "../../assets/Dental.png", "alt", "images"], [1, "dentalButton"], ["src", "../../assets/porfolio.png", "alt", "images"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/SridharPrasad-Panneerselvam/Portfolio-SridharPrasadPanneerselvam", 1, "tooltip", 2, "text-decoration", "none"], [1, "pfButton"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "INSTACART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "JSP | SPRING MVC | MYSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "An online grocery shopping cart application wherein the users will be able to order groceries from the nearby available\ngrocery store and get it delivered at their doorstep, while the admin will be able to manage the products in the store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sping MVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "JDBC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hibernate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Annotations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "HQL Criteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "ROADSIDE ASSISTANCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "MEAN STACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "A MEAN stack application to assist/help users with roadside assistance in case of an emergency/breakdown/flat wheel or\nany issue with the vehicle wherein, users can find and book the nearest vendor and get it serviced at the requested location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "ExpressJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Node JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Google API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "CarMD API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "PayPal API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "VIN API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Distanca Matrix API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "BOOK SHOPPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "ANGULAR|SPRINGBOOT|MYSQL|AWS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "A Book shopping cart application leveraging Angular framework as front end and SpringBoot & MySQL for backend; Buyers will be able to purchase books from the store while the Sellers manage the books sold in the shoppe; Implemented CI/CD by using Git, CircleCI, Packer & AWS CodeDeploy to deploy this application in AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "SpringBoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "CircleCI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Terraform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Packer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "EC2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "IAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "RDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "S3 Bucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "SPREADSHEET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "HTML | SCSS | JAVASCRIPT | RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "A spreadsheet application where the user will be able to add/delete a row/column, import/export as csv, perform basic\narithmetic operations for the data in the cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "JavaScript(ES6)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "TO DO APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "MEAN STACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "A To Do items MEAN stack application which allows the users to create a to do list. It keeps track on the due date and\ntime of the to do item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "ExpressJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "NodeJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "HQL Criteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Rest API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "MEDSYS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "JAVA | SWING | DB4O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "A Healthcare Management System application by leveraging ecosystem architecture using core java and swing components\nbased on a Singleton Ecosystem model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "DB4O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Swing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Substance UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "DENTAL MANAGEMENT SYSTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "MVC | SQL SERVER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Designed and developed an end to end Dentist Appointment Booking Management System where users will be able make\nappointments, check their treatments / procedures and be able to retrieve the consolidated bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "MVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "MS SQL Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Toad Data Modeller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "A platform to share my work to the vibrant scholastic community and to learn, contribute and grow through my varied skills and experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 120vh;\n  font-family: sans-serif;\n}\n\n.box[_ngcontent-%COMP%] {\n  width: 1200px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));\n  grid-gap: 8px;\n  margin: 1 auto;\n  grid-column-gap: 30px;\n  margin-left: -2%;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 350px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n\n.card[_ngcontent-%COMP%]:before, .card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background: #fff;\n  transition: 0.5s;\n  z-index: -1;\n}\n\n.card[_ngcontent-%COMP%]:hover:before {\n  transform: rotate(20deg);\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);\n}\n\n.card[_ngcontent-%COMP%]:hover:after {\n  transform: rotate(10deg);\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);\n}\n\n.card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  bottom: 10px;\n  right: 10px;\n  background: #032231;\n  transition: 0.5s;\n  z-index: 1;\n}\n\n.card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%] {\n  bottom: 350px;\n}\n\n.card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  bottom: 10px;\n  height: 300px;\n}\n\n.codeButton[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n  background-color: inherit;\n  margin-left: 108px;\n  color: #777 !important;\n  border-color: #777 !important;\n  padding-top: 2.5px;\n  font-size: 12px;\n}\n\n.codeButton[_ngcontent-%COMP%]:hover {\n  border-color: black !important;\n  cursor: pointer;\n  color: black !important;\n}\n\n.fa-github[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.4s all;\n  color: #058368;\n}\n\n.skillsButton[_ngcontent-%COMP%] {\n  background-color: #032231;\n  color: white;\n  margin: 0.7px;\n  border-radius: 5px;\n  font-size: 11px;\n  border-color: #032231;\n}\n\n.skillsButton[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #777;\n}\n\n.spreadsheetButton[_ngcontent-%COMP%] {\n  background-color: #032231;\n  color: white;\n  margin: 6px;\n  margin-top: 40px;\n  border-radius: 5px;\n  font-size: 11px;\n  border-color: #032231;\n}\n\n.spreadsheetButton[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #777;\n}\n\n.todoButton[_ngcontent-%COMP%] {\n  background-color: #032231;\n  color: white;\n  margin: 5px;\n  border-radius: 5px;\n  font-size: 11px;\n  border-color: #032231;\n}\n\n.todoButton[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #777;\n}\n\n.medsysButton[_ngcontent-%COMP%] {\n  background-color: #032231;\n  color: white;\n  margin: 8px;\n  margin-top: 30px;\n  border-radius: 5px;\n  font-size: 11px;\n  border-color: #032231;\n}\n\n.medsysButton[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #777;\n}\n\n.dentalButton[_ngcontent-%COMP%] {\n  background-color: #032231;\n  color: white;\n  margin: 4px;\n  margin-top: 20px;\n  border-radius: 5px;\n  font-size: 11px;\n  border-color: #032231;\n}\n\n.dentalButton[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #777;\n}\n\n.pfButton[_ngcontent-%COMP%] {\n  background-color: #032231;\n  color: white;\n  margin: 5px;\n  margin-top: 10px;\n  border-radius: 5px;\n  font-size: 11px;\n  border-color: #032231;\n}\n\n.pfButton[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #777;\n}\n\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: #032231;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  color: #058368;\n  display: block;\n  margin-bottom: 5px;\n  text-align: center;\n}\n\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #777;\n  text-align: justify;\n  margin-bottom: 10px;\n}\n\n.cardDiv[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cardTitle[_ngcontent-%COMP%] {\n  color: #032231;\n  font-size: 25px;\n  font-family: Verdana;\n  text-align: center;\n  letter-spacing: 0.05em;\n}\n\n.fa-github[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  transition: 0.4s all;\n  color: #4e4b4b;\n}\n\n.buttonDiv[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  text-justify: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvTkVVL0dpdEh1Yl9SZXBvL1NyaWRoYXJQcmFzYWQtUGFubmVlcnNlbHZhbS5naXRodWIuaW8vcG9ydGZvbGlvL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsdUJBQUE7QUNBSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EseUNBQUE7QUNDSjs7QURDRTs7RUFHRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENFO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtBQ0VGOztBREFFO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtBQ0dGOztBRERFO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNJRjs7QURERTtFQUVFLGFBQUE7QUNHSjs7QURBRTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNHTjs7QURBRTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0dOOztBRENFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRERJO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNHTjs7QURHRTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FESUM7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNGSDs7QURHRztFQUdDLFlBQUE7RUFDQSxzQkFBQTtBQ0hKOztBRE9DO0VBRUMseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNORjs7QURPRTtFQUVFLFlBQUE7RUFDQSxzQkFBQTtBQ05KOztBRFVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDUkY7O0FEU0U7RUFFRSxZQUFBO0VBQ0Esc0JBQUE7QUNSSjs7QURZQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDVkY7O0FEV0U7RUFFRSxZQUFBO0VBQ0Esc0JBQUE7QUNWSjs7QURjQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDWkY7O0FEYUU7RUFFRSxZQUFBO0VBQ0Esc0JBQUE7QUNaSjs7QURnQkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ2RGOztBRGVFO0VBRUUsWUFBQTtFQUNBLHNCQUFBO0FDZEo7O0FEa0JFO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZkg7O0FEa0JFO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZkY7O0FEa0JHO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNmTDs7QURtQkE7RUFFSSxXQUFBO0FDakJKOztBRHFCQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDcEJKOztBRDBCQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDdkJGOztBRDJCQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDeEJGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEyMHZoO1xuICAgIC8vYmFja2dyb3VuZDogcmdiKDMsIDM0LCA0OSk7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbiAgLmJveHtcbiAgICB3aWR0aDogMTIwMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMmZyKSk7XG4gICAgZ3JpZC1nYXA6IDhweDtcbiAgICBtYXJnaW46IDEgYXV0bztcbiAgICBncmlkLWNvbHVtbi1nYXA6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcbiAgfVxuICAuY2FyZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvL21hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OjAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMik7XG4gIH1cbiAgLmNhcmQ6YmVmb3JlLFxuICAuY2FyZDphZnRlclxuICB7XG4gICAgY29udGVudDpcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB6LWluZGV4Oi0xO1xuICB9XG4gIC5jYXJkOmhvdmVyOmJlZm9yZXtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwwLDAsLjIpO1xuICB9XG4gIC5jYXJkOmhvdmVyOmFmdGVye1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLDAsMCwuMik7XG4gIH1cbiAgLmNhcmQgLmltZ0J4e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiKDMsIDM0LCA0OSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5jYXJkOmhvdmVyIC5pbWdCeFxuICB7XG4gICAgYm90dG9tOiAzNTBweDtcbiAgfVxuXG4gIC5jYXJkIC5pbWdCeCBpbWd7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIC5jYXJkIC5kZXRhaWxze1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTBweDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvZGVCdXR0b257XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDtcbiAgICBtYXJnaW4tbGVmdDogMTA4cHg7XG4gICAgY29sb3I6ICM3NzcgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICM3NzcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMi41cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgICY6aG92ZXJ7XG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAgIFxuICAgIH1cbiAgXG4gIH1cblxuICAuZmEtZ2l0aHViOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG4gICAgY29sb3I6IHJnYig1LCAxMzEsIDEwNCk7XG59XG5cblxuIC5za2lsbHNCdXR0b257XG4gICAvL2NvbG9yOiB3aGl0ZTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAzNCwgNDkpIDtcbiAgIGNvbG9yOiB3aGl0ZSA7XG4gICBtYXJnaW46IDAuN3B4O1xuICAgYm9yZGVyLXJhZGl1czogNXB4IDtcbiAgIGZvbnQtc2l6ZTogMTFweDtcbiAgIGJvcmRlci1jb2xvcjogcmdiKDMsIDM0LCA0OSk7XG4gICAmOmhvdmVye1xuICAgIC8vYm9yZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgfVxuIH1cblxuIC5zcHJlYWRzaGVldEJ1dHRvbntcbiAgLy9jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAzNCwgNDkpIDtcbiAgY29sb3I6IHdoaXRlIDtcbiAgbWFyZ2luOiA2cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMywgMzQsIDQ5KTtcbiAgJjpob3ZlcntcbiAgICAvL2JvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgfVxufVxuXG4udG9kb0J1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDM0LCA0OSkgO1xuICBjb2xvcjogd2hpdGUgO1xuICBtYXJnaW46IDVweDtcblxuICBib3JkZXItcmFkaXVzOiA1cHggO1xuICBmb250LXNpemU6IDExcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMsIDM0LCA0OSk7XG4gICY6aG92ZXJ7XG4gICAgLy9ib3JkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG4gIH1cbn1cblxuLm1lZHN5c0J1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDM0LCA0OSkgO1xuICBjb2xvcjogd2hpdGUgO1xuICBtYXJnaW46IDhweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLy9tYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigzLCAzNCwgNDkpO1xuICAmOmhvdmVye1xuICAgIC8vYm9yZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICB9XG59XG5cbi5kZW50YWxCdXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAzNCwgNDkpIDtcbiAgY29sb3I6IHdoaXRlIDtcbiAgbWFyZ2luOiA0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMywgMzQsIDQ5KTtcbiAgJjpob3ZlcntcbiAgICAvL2JvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgfVxufVxuXG4ucGZCdXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAzNCwgNDkpIDtcbiAgY29sb3I6IHdoaXRlIDtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMywgMzQsIDQ5KTtcbiAgJjpob3ZlcntcbiAgICAvL2JvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgfVxufVxuXG4gIC5jYXJkIC5kZXRhaWxzIGgye1xuICAgbWFyZ2luOiAwO1xuICAgcGFkZGluZzogMDtcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICBmb250LXNpemU6IDIwcHg7XG4gICBjb2xvcjogcmdiKDMsIDM0LCA0OSk7XG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9IFxuXG4gIC5jYXJkIC5kZXRhaWxzIGgyIHNwYW57XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJnYig1LCAxMzEsIDEwNCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH0gXG5cbiAgIC5kZXRhaWxzIHAge1xuICAgICBjb2xvcjogIzc3NztcbiAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG5cbi5jYXJkRGl2e1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDM0LCA0OSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy9oZWlnaHQ6IDUwcHg7XG59XG5cbi5jYXJkVGl0bGV7XG4gICAgLy9wYWRkaW5nOiAyJTtcbiAgICBjb2xvcjogcmdiKDMsIDM0LCA0OSk7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIC8vanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cblxuXG5cbi5mYS1naXRodWJ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG4gIGNvbG9yOiByZ2IoNzgsIDc1LCA3NSk7XG59XG5cblxuLmJ1dHRvbkRpdntcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XG59IiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEyMHZoO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmJveCB7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDJmcikpO1xuICBncmlkLWdhcDogOHB4O1xuICBtYXJnaW46IDEgYXV0bztcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogLTIlO1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uY2FyZDpiZWZvcmUsXG4uY2FyZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uY2FyZDpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uY2FyZDpob3ZlcjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5jYXJkIC5pbWdCeCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDMyMjMxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2FyZDpob3ZlciAuaW1nQngge1xuICBib3R0b206IDM1MHB4O1xufVxuXG4uY2FyZCAuaW1nQnggaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2FyZCAuZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmNvZGVCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luLWxlZnQ6IDEwOHB4O1xuICBjb2xvcjogIzc3NyAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICM3NzcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDIuNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29kZUJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmZhLWdpdGh1Yjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG4gIGNvbG9yOiAjMDU4MzY4O1xufVxuXG4uc2tpbGxzQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjIzMTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDAuN3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDMyMjMxO1xufVxuLnNraWxsc0J1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nztcbn1cblxuLnNwcmVhZHNoZWV0QnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjIzMTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDZweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGJvcmRlci1jb2xvcjogIzAzMjIzMTtcbn1cbi5zcHJlYWRzaGVldEJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nztcbn1cblxuLnRvZG9CdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMjMxO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDMyMjMxO1xufVxuLnRvZG9CdXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG59XG5cbi5tZWRzeXNCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMjMxO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogOHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDMyMjMxO1xufVxuLm1lZHN5c0J1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nztcbn1cblxuLmRlbnRhbEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzIyMzE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBib3JkZXItY29sb3I6ICMwMzIyMzE7XG59XG4uZGVudGFsQnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xufVxuXG4ucGZCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMjMxO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDMyMjMxO1xufVxuLnBmQnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xufVxuXG4uY2FyZCAuZGV0YWlscyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAzMjIzMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jYXJkIC5kZXRhaWxzIGgyIHNwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDU4MzY4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxzIHAge1xuICBjb2xvcjogIzc3NztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmREaXYge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmRUaXRsZSB7XG4gIGNvbG9yOiAjMDMyMjMxO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbi5mYS1naXRodWIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICBjb2xvcjogIzRlNGI0Yjtcbn1cblxuLmJ1dHRvbkRpdiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtanVzdGlmeTogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class SkillsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 103, vars: 0, consts: [["id", "Skills", 1, "skillsbg"], [1, "skillcard"], [1, "skillTitle"], [1, "skillsTable"], ["mat-button", ""], ["mat-button", "", 1, "skillsButton"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " LANGUAGES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "JavaScript(ES6)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ShellScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " WEB TECHNOLOGIES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SpringBoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Spring MVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Hibernate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Rest API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " DATABASES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "SQL Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Postgress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sybase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " CLOUD TECHNOLOGIES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "AWS - EC2, AMI, VPC, IAM, S3, RDS, CloudDeploy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " TOOLS & OTHERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "CircleCI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "MS Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Autosys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Packer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Terraform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "JIRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "JMeter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "ITIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Putty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "SSMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Confluence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Maven");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Postman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " OPERATING SYSTEMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "MacOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".skillsbg[_ngcontent-%COMP%] {\n  margin-top: 12%;\n  background-color: white;\n  width: 100%;\n  height: 700px;\n}\n\n.skillcard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-left: 2.3%;\n  width: 93%;\n  height: 555px;\n  background-color: #032231;\n  background: #032231;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.skillcard[_ngcontent-%COMP%]:hover {\n  box-shadow: 28px 28px 28px rgba(0, 0, 0, 0.22), 20px 20px 20px rgba(0, 0, 0, 0.22);\n  transition: all 0.3s cubic-bezier(1, 1, 1, 1);\n}\n\n.skillTitle[_ngcontent-%COMP%] {\n  padding-top: 2%;\n  text-align: center;\n  letter-spacing: 0.05em;\n  font-family: Verdana;\n  font-size: 25px;\n  color: white;\n}\n\n.skillsTable[_ngcontent-%COMP%] {\n  margin-left: 15%;\n  margin-top: 3%;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 20px;\n  border-color: white;\n  border: 2px solid rgba(255, 255, 255, 0.486);\n}\n\n.mat-button[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.486);\n  cursor: pointer;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: none;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvTkVVL0dpdEh1Yl9SZXBvL1NyaWRoYXJQcmFzYWQtUGFubmVlcnNlbHZhbS5naXRodWIuaW8vcG9ydGZvbGlvL3NyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSx3RUFBQTtBQ0FKOztBREVBO0VBQ0ksa0ZBQUE7RUFDQSw2Q0FBQTtBQ0FKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNGSjs7QURNQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUNISjs7QURJQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLRTtFQUNFLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxsc2Jne1xuICAgIG1hcmdpbi10b3A6IDEyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6NzAwcHg7XG59XG5cbi5za2lsbGNhcmR7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgbWFyZ2luLWxlZnQ6IDIuMyU7XG4gICAgd2lkdGg6IDkzJTtcbiAgICBoZWlnaHQ6IDU1NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAzNCwgNDkpO1xuICAgIGJhY2tncm91bmQ6IHJnYigzLCAzNCwgNDkpO1xuICAgIC8vYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICBcbiY6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogMjhweCAyOHB4IDI4cHggcmdiYSgwLjIyLDAuMjIsMC4yMiwwLjIyKSwgMjBweCAyMHB4IDIwcHggcmdiYSgwLjIyLDAuMjIsMC4yMiwwLjIyKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMSwxLDEsMSk7XG5cbn1cbn1cblxuLnNraWxsVGl0bGV7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5za2lsbHNUYWJsZXtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuXG59XG5cbi5tYXQtYnV0dG9ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4Nik7XG4mOmhvdmVye1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDg2KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG59XG50aCwgdGQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgdGgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiIsIi5za2lsbHNiZyB7XG4gIG1hcmdpbi10b3A6IDEyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwMHB4O1xufVxuXG4uc2tpbGxjYXJkIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1sZWZ0OiAyLjMlO1xuICB3aWR0aDogOTMlO1xuICBoZWlnaHQ6IDU1NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMjMxO1xuICBiYWNrZ3JvdW5kOiAjMDMyMjMxO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4uc2tpbGxjYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMjhweCAyOHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjIyKSwgMjBweCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDEsIDEsIDEsIDEpO1xufVxuXG4uc2tpbGxUaXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5za2lsbHNUYWJsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4ubWF0LWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4Nik7XG59XG4ubWF0LWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDg2KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50aCwgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");



class WorkComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 34, vars: 0, consts: [["id", "Work"], [1, "cardTitle"], [1, "container"], [1, "box"], [1, "box__img"], ["src", "https://media.glassdoor.com/l/c0/91/2d/83/infosys-library-in-campus.jpg", "alt", ""], [1, "box__details"], [1, "role"], [1, "table1"], [2, "text-align", "end"], [1, "list"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Senior Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "December 2016 - June 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Infosys Ltd, KA, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Responsible for providing cloud infrastructure security and management services for a leading American Investment Banking firm. Involved in the SDLC for the firm with an experience in handling BCP\u2019s, Tech Infra activities for the client server by managing 10+ applications simultaneously.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Automated various day to day tasks in profit and loss calculation batch processing using Autosys, shell scripting, SQL Server and reduced the similar alert generation by over 40%.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Led a team of three to make effective enhancements to the batch processing by creating various Web pages and Shell Scripts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Developed an end to end web page application using HTML, CSS, Javascript, Java, SQL Server to send live updates on batch processing to the leads and to retrieve and action against feed information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Increased the productivity of 50% as a team by developing various shell scripts such as finding the SLA and ETA based on a given feed, to find the pending feeds within a time period, send automated mails to upstream on feed follow-ups, retrieve the feed name based on a job name.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Developed a mobile banking application based on Python and MySQL technology with modules for customers to login, add payee, transfer funds to the payee, pay bills etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 950px;\n  height: 500px;\n  background: #032231;\n  margin: 0 auto;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.7);\n  overflow: hidden;\n  margin-bottom: 10%;\n}\n\n.box__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.5s linear;\n}\n\n.box__details[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 10px 25px;\n}\n\n.box__details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ccc;\n}\n\n.box[_ngcontent-%COMP%]:hover   .box__img[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n\n.cta[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: #fff;\n  border: 1px solid #fff;\n  padding: 10px 20px;\n  margin-top: 50px;\n  text-align: center;\n}\n\n.cta[_ngcontent-%COMP%]:hover {\n  background: orange;\n  border-radius: 10px;\n}\n\n.cardTitle[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  color: #032231;\n  font-size: 25px;\n  justify-content: center;\n  font-family: Verdana;\n  text-align: center;\n  letter-spacing: 0.05em;\n  margin-bottom: 5%;\n}\n\n.table1[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  font-size: large;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style-type: square;\n  text-align: justify;\n  width: 90%;\n  line-height: 1.5rem;\n  letter-spacing: 0.02rem;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  font-size: 16px;\n  border: thin 1px white;\n}\n\n.role[_ngcontent-%COMP%] {\n  padding: 3%;\n  margin-left: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvTkVVL0dpdEh1Yl9SZXBvL1NyaWRoYXJQcmFzYWQtUGFubmVlcnNlbHZhbS5naXRodWIuaW8vcG9ydGZvbGlvL3NyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUpBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDbEpKOztBRHFKRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNsSko7O0FEcUpFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlDQUFBO0FDbEpKOztBRHNKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ25KSjs7QURzSkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNuSko7O0FEc0pFO0VBQ0UsNEJBQUE7QUNuSko7O0FEc0pFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbkpKOztBRHNKRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNuSko7O0FEc0pFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ25KSjs7QURzSkU7RUFDSSxXQUFBO0VBRUEsc0VBQUE7RUFDQSxnQkFBQTtBQ3BKTjs7QUR1SkU7RUFFRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFRSxzRUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ3RKTjs7QUR5SkU7RUFFSSxXQUFBO0VBQ0EsZUFBQTtBQ3ZKTiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDQwMGksNzAwJyk7XG5cbi8vICRwcmltYXJ5LWNvbG9yOiAjZmZjZTVlO1xuLy8gJHNlY29uZGFyeS1jb2xvcjogI2Y4ZThlODtcbi8vICRmb250LXN0YWNrOiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4vLyAkc21hbGwtYnJlYWs6ICc0MjBweCc7XG5cbi8vIEBtaXhpbiB2ZXJ0aWNhbC1jZW50ZXJlZCB7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgbGVmdDogNTAlO1xuLy8gICB0b3A6IDUwJTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4vLyB9XG5cbi8vIEBtaXhpbiBicmVhayAoJGJyZWFrKSB7XG4vLyAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhaykge1xuLy8gICAgIG1hcmdpbjogLjNlbSAwO1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgfVxuLy8gfVxuXG4vLyBAbWl4aW4gYmdJbWcoJHVybCkge1xuLy8gICBiYWNrZ3JvdW5kOiB1cmwoJHVybCkgY2VudGVyIG5vLXJlcGVhdDtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vIH1cblxuLy8gQGtleWZyYW1lcyBoZWFkZXItaDEge1xuLy8gICBmcm9tIHtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgIH1cbi8vICAgdG8ge1xuLy8gICAgIG1hcmdpbjogMWVtIDA7XG4vLyAgIH1cbi8vIH1cblxuLy8gQGtleWZyYW1lcyBjYXJkLXNsaWRlIHtcbi8vICAgZnJvbSB7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogMCU7XG4vLyAgICAgbGVmdDogLTEwMCU7XG4vLyAgIH1cbi8vICAgdG8ge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBsZWZ0OiAwJTtcbi8vICAgfVxuLy8gfVxuXG4vLyBib2R5IHtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAjMjIyO1xuLy8gICBmb250LWZhbWlseTogJGZvbnQtc3RhY2s7XG4vLyB9XG5cbi8vICNrbm93LW1lIHtcbi8vICAgcGFkZGluZzogNXB4IDQ1cHg7XG4vLyAgIGgxIHtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4vLyAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4vLyAgIH1cbi8vIH1cblxuLy8gLmNhcmQtY29udGFpbmVyIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAgXG4vLyAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbC1icmVhaykge1xuLy8gICAgIC5jYXJkIHtcbi8vICAgICAgIDtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgLmNhcmQgeyAgICBcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTNweCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMyk7XG4vLyAgICAgbWFyZ2luOiAwIGF1dG8gMS42JTtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBoZWlnaHQ6IDM1MHB4O1xuLy8gICAgIHdpZHRoOiAyMDBweDtcbi8vICAgICBhbmltYXRpb246IGNhcmQtc2xpZGUgMXMgZWFzZS1pbiBmb3J3YXJkcztcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgLmRldGFpbHMge1xuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgdG9wOiAwJTtcbi8vICAgICAgIGxlZnQ6IC0xMDAlO1xuLy8gICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgcGFkZGluZzogMDtcbi8vICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XG4vLyAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLCAxMDAsIDEwMCwgLjc1KTtcbi8vICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjsgICBcbi8vICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgLjMpO1xuLy8gICAgICAgb3BhY2l0eTogMDtcbi8vICAgICAgID4gbGk6Zmlyc3QtY2hpbGQge1xuLy8gICAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4vLyAgICAgICAgIGNvbG9yOiAjMjIyO1xuLy8gICAgICAgfVxuLy8gICAgICAgbGkge1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgcGFkZGluZzogLjVlbTtcbi8vICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgICAgICAgIFxuLy8gICAgICAgICAmOmJlZm9yZSB7XG4vLyAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgICBsaTpsYXN0LWNoaWxkIHtcbi8vICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xuLy8gICAgICAgICAmOmJlZm9yZSB7XG4vLyAgICAgICAgICAgY29udGVudDogXCIgJycgXCI7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgJjphZnRlciB7XG4vLyAgICAgICAgICAgY29udGVudDogXCIgJycgXCI7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICAgIC5kYXRlOmJlZm9yZSB7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTMzXCI7XG4vLyAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgICY6aG92ZXIge1xuLy8gICAgICAgLmRldGFpbHMge1xuLy8gICAgICAgICBsZWZ0OiAwJTtcbi8vICAgICAgICAgb3BhY2l0eTogMTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgJjpudGgtY2hpbGQoMSkge1xuLy8gICAgICAgQGluY2x1ZGUgYmdJbWcoXCJodHRwOi8vaTYyLnRpbnlwaWMuY29tLzM0b3E0bzAuanBnXCIpO1xuLy8gICAgIH1cbi8vICAgICAmOm50aC1jaGlsZCgyKSB7XG4vLyAgICAgICBAaW5jbHVkZSBiZ0ltZyhcImh0dHA6Ly9pNjAudGlueXBpYy5jb20veGVpdjc5LmpwZ1wiKTtcbi8vICAgICB9XG4vLyAgICAgJjpudGgtY2hpbGQoMykge1xuLy8gICAgICAgQGluY2x1ZGUgYmdJbWcoXCJodHRwOi8vb2k0MC50aW55cGljLmNvbS80bmE2Yi5qcGdcIik7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7ICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLmJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA5NTBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigzLCAzNCwgNDkpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCByZ2JhKDAsMCwwLC43KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgfVxuICBcbiAgLmJveF9faW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgbGluZWFyO1xuICAgIFxuICB9XG4gIFxuICAuYm94X19kZXRhaWxze1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgfVxuICBcbiAgLmJveF9fZGV0YWlscyBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjY2NjO1xuICB9XG4gIFxuICAuYm94OmhvdmVyIC5ib3hfX2ltZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgIFxuICB9XG4gIFxuICAuY3RhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jdGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgLmNhcmRUaXRsZXtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBjb2xvcjogcmdiKDMsIDM0LCA0OSk7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB9XG5cbiAgLnRhYmxlMXtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy9wYWRkaW5nOiAyJTtcbiAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG5cbiAgLmxpc3R7XG4gICAgXG4gICAgbGlzdC1zdHlsZS10eXBlOnNxdWFyZTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMnJlbTtcbiAgICAgIC8vcGFkZGluZzogMSU7XG4gICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgYm9yZGVyOiB0aGluIDFweCAgd2hpdGU7XG4gIH1cblxuICAucm9sZVxuICB7XG4gICAgICBwYWRkaW5nOiAzJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgfSIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5NTBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogIzAzMjIzMTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmJveF9faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGxpbmVhcjtcbn1cblxuLmJveF9fZGV0YWlscyB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG59XG5cbi5ib3hfX2RldGFpbHMgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4uYm94OmhvdmVyIC5ib3hfX2ltZyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5jdGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jdGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkVGl0bGUge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgY29sb3I6ICMwMzIyMzE7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4udGFibGUxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDkwJTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJyZW07XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IHRoaW4gMXB4IHdoaXRlO1xufVxuXG4ucm9sZSB7XG4gIHBhZGRpbmc6IDMlO1xuICBtYXJnaW4tbGVmdDogMSU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/NEU/GitHub_Repo/SridharPrasad-Panneerselvam.github.io/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
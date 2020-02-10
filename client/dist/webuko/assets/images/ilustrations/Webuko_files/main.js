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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about-us mt-5\">\n    <div class=\"about-us__content dark-content p-5\">\n        <div class=\"about-us__content__title col-12\">\n            <h4>We make the world better!</h4>\n            <p class=\"mt-4\">We build top-notch web & mobile solutions using the latest technology \n               and our superior expertise to enhance your business growth.\n            </p>\n        </div>\n        <div class=\"about-us__content__main d-flex row\">\n            <div class=\"about-us__content__main__image mt-3  col-md-6\">\n             <div class=\"dark-content h-100 p-4\" >\n                    <img src=\"assets/images/ilustrations/team.svg\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"about-us__content__main__description mt-3 col-md-6\">\n                <div class=\"about-us__content__main__description__effect  dark-content h-100 p-4\">\n                    <h4>About Us</h4>\n                    <p>We are a startap team of talented professionals. \n                        We are technology maniacs and always work with proven stack \n                        of technologies. During last 5 years we worked exclusively in \n                        MEAN stack and gained a tremendous amount of experience in these \n                        technologies. We don’t stop learning: we use new technologies as a learning tool, \n                        not just because it's \"just a cool new thing.\"\n                    </p>\n                    <div class=\"about-us__content__main__description__button  d-flex\">\n                        <div class=\"about-us__content__main__description__button__title mt-4 w-100\">\n                            <div class=\"dark-content\">\n                                <h3>Want to work with us ?</h3>\n                            </div>\n                            <div class=\"w-100 d-flex justify-content-center mt-5\">\n                                <button class=\"btn-main\">Let's Talk</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>    \n</div>   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app w-100 h-100\" [ngClass]=\"{'font-geo': isGeorgian}\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"header mt-3 w-100 d-flex justify-content-between align-items-center\">\n                <div class=\"col-md-3\">\n                    <img src=\"assets/images/logo1.png\" alt=\"\">\n                </div>\n                <div class=\"col-md-9 d-flex justify-content-end mt-3\">\n                    <app-top-navigation></app-top-navigation>\n                    <!-- <div class=\"btn-main\"> -->\n                        <span *ngIf=\"isGeorgian\" (click)=\"switchLanguage('en')\">ENG</span>\n                        <span *ngIf=\"!isGeorgian\" (click)=\"switchLanguage('ka')\">GEO</span>\n                    <!-- </div> -->\n                </div>\n            </div>\n            <div class=\"content w-100\" [ngClass]=\"{'geo-text-size': isGeorgian}\" >\n                <!-- <app-home></app-home> -->\n                <router-outlet></router-outlet>\n                <app-before-footer></app-before-footer>\n            </div>\n        </div>\n    </div>\n    <!-- <div class=\"w-100\" style=\"position: absolute; bottom: 0;\"> -->\n        <app-footer></app-footer>\n    <!-- </div> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/before-footer/before-footer.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/before-footer/before-footer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer d-flex justify-content-between row mt-5 p-3\">\n    <div class=\"footer__language d-flex col-lg-4\">\n        <div class=\"language-box\">\n            <span>EN</span>\n        </div>\n        <p>English</p>\n    </div>\n    <div class=\"footer__menu col-lg-5\">\n        <ul class=\"\">\n            <li>\n                <a href=\"\" [routerLink]=\"['home']\" routerLinkActive=\"active\" >\n                    {{ 'navigation.Home' | translate }}\n                </a>\n            </li>\n            <li>\n                <a href=\"\" [routerLink]=\"['services']\" routerLinkActive=\"active\" >\n                    {{ 'navigation.Services' | translate }}\n                </a>\n            </li>\n            <li>\n                <a href=\"\" [routerLink]=\"['about-us']\" routerLinkActive=\"active\" >\n                    {{ 'navigation.About us' | translate }}\n                </a>\n            </li>\n            <li>\n                <a href=\"\" [routerLink]=\"['order']\" routerLinkActive=\"active\" >\n                    {{ 'navigation.Order' | translate }}\n                </a>\n            </li>\n            <li>\n                <a href=\"\" [routerLink]=\"['contact']\" routerLinkActive=\"active\" >\n                    {{ 'navigation.Contact' | translate }}\n                </a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"footer__location-contact col-lg-3\">\n        <div class=\"footer__location-contact__location d-flex\">\n            <i class=\"fas fa-map-marker-alt\"></i>\n            <p>vazha fshavela #61</p>\n        </div>\n        <div class=\"footer__location-contact__location d-flex\">\n            <i class=\"fas fa-envelope\"></i>\n            <p>supportwebuko@gmai.com</p>\n        </div>\n        <div class=\"footer__location-contact__location d-flex\">\n            <i class=\"fas fa-phone-square-alt\"></i>\n            <p>(+995) 599 12 32 70</p>\n        </div>\n        <div class=\"footer__location-contact__contact d-flex justify-content-between mt-4 mb-3\">\n            <div class=\"social-box\">\n                <i class=\"fab fa-facebook-f\"></i>\n            </div>\n            <div class=\"social-box\">\n                <i class=\"fab fa-instagram\"></i>\n            </div>\n            <div class=\"social-box\">\n                <i class=\"fab fa-linkedin-in\"></i>\n            </div>\n            <div class=\"social-box\">\n                <i class=\"fas fa-envelope\"></i>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"footer__line col-12 d-flex justify-content-between p-2 align-items-center\">\n        <div class=\"footer__line__logo col-lg-4 d-flex justify-content-center\">\n            <img src=\"assets/images/logo1.png\" alt=\"\">\n        </div>\n        <div class=\"col-lg-4 d-flex justify-content-center\">\n            <span>© 2020  Copyrigts Giorgi Zeikidze</span>\n        </div>\n        <div class=\"col-lg-4 d-flex justify-content-center\">\n            <span>Don’t forget to rate 💙</span>\n        </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Modal title</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>One fine body&hellip;</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\n    </div>\n  </ng-template>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"not-found\">\n    <div class=\"dark-content row\">\n        <div class=\"col-12\">\n            <h4>Sorry page not found </h4>\n        </div>\n        <div class=\"col-12 d-flex justify-content-center mt-4\">\n            <img src=\"../../../assets/images/ilustrations/404.svg\" alt=\"\">\n        </div>\n\n        <div class=\"col-12 d-flex justify-content-center mt-5 mb-4\">\n            <button class=\"btn-main\" (click)=\"onNavigate()\">Go Home</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-navigation/top-navigation.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-navigation/top-navigation.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navigation w-100\">\n    <ul class=\"d-flex justify-cotnent-between\">\n        <li class=\"col-lg\" >\n            <a [routerLink]=\"['/home']\" routerLinkActive=\"active\" >\n                {{ 'navigation.Home' | translate }}\n            </a>\n        </li>\n        <li class=\"col-lg\">\n            <a [routerLink]=\"['services']\" routerLinkActive=\"active\" >\n                {{ 'navigation.Services' | translate }}\n            </a>\n        </li >\n        <li class=\"col-lg\">\n            <a [routerLink]=\"['about-us']\" routerLinkActive=\"active\" >\n                {{ 'navigation.About us' | translate }}\n            </a>\n        </li>\n        <li class=\"col-lg\">\n            <a [routerLink]=\"['order']\" routerLinkActive=\"active\" >\n                {{ 'navigation.Order' | translate }}\n            </a> \n        </li>\n        <li class=\"col-lg\">\n            <a [routerLink]=\"['contact']\" routerLinkActive=\"active\" >\n                {{ 'navigation.Contact' | translate }}\n            </a>\n        </li>\n    </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact dark-content pb-5 row mt-5 p-4\">\n    <div class=\"contact__title col-12 mt-3\">\n        <h4> How can we help?</h4>\n        <p class=\"mt-3\">\n            Fill the form below to discuss how Webuko can help with \n            your ambitious software needs!\n        </p>\n    </div>\n    <div class=\"contact__information col-md-6 mt-5\">\n        <div class=\"dark-content h-100 pl-5\">\n            <div class=\"contact__information__title mt-4\">\n                <h4>Let's Talk</h4>\n            </div>\n            <div class=\"contact__information__information mt-5\">\n                <h4>Contact Email </h4>\n                <p>sales@webuko.com</p>\n            </div>\n            <div class=\"contact__information__information mt-4\">\n                <h4>Contact Phones </h4>\n                <p>(+995) 599 12 32 70</p>\n                <p>(+995) 571 50 70 91</p>\n            </div>\n            <div class=\"contact__information__information mt-4\">\n                <h4>Location </h4>\n                <p>Tbilisi, Georgia</p>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"contact__form col-md-6 mt-5\">\n        <div class=\"dark-content h-100 pl-5\">\n            <div class=\"contact__form__title mt-4\">\n                <h4 *ngIf=\"!isSubmited\">We'd love to hear from you!</h4>\n                <h4 class=\"submitted\" *ngIf=\"isSubmited\">Thank you!</h4>\n                <p *ngIf=\"isSubmited\">Your message has been received!</p>\n            </div>\n            <div class=\"\" *ngIf=\"!isSubmited; else submitedContent\">\n                <form action=\"\">\n                    <div class=\"col-12 mt-5\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Your name\">\n                    </div>\n                    <div class=\"col-12 mt-4\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Your email\">\n                    </div>\n                    <div class=\"col-12 mt-4\">\n                        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Message\" class=\"form-control\"></textarea>\n                    </div>\n                    <div class=\"col-12 d-flex justify-content-center mt-4\">\n                        <button class=\"btn-main\" (click)=\"onSubmit()\">Submit</button>\n                    </div>\n                </form>\n            </div>\n            <ng-template #submitedContent>\n                <div class=\"w-100 mt-5\">\n                    <img src=\"assets/images/ilustrations/confirm.svg\" \n                         alt=\"\" \n                         style=\"width: 100%; height: 100%;\">\n                </div>\n            </ng-template>\n            \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home\">\n    <div class=\"mt-5\">\n        <app-landing-main></app-landing-main>\n        <app-landing-about-us></app-landing-about-us>\n        <app-slider></app-slider>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-about-us/landing-about-us.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-about-us/landing-about-us.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about-us mt-5 d-flex p-5 row\">\n    <div class=\"about-us__box__title col-12 d-flex justify-content-center\">\n            <h4> What we do, so you succeed ?</h4>\n    </div>\n    <div class=\"about-us__box d-flex justify-content-between align-items-center row\">\n\n            <div class=\"about-us__box__text col-md-6\">\n                <div class=\"col\">\n                    <h4>User Experience Design</h4>\n                </div>\n                <div class=\"col mt-3\">\n                    <p>Our UI/UX designers produce the most attractive and polished \n                        designs for your product you could ever dream of. It's not \n                        just enough to develop websites that only look good, but it's \n                        essential to make them human-friendly, make them work on all\n                         browsers, make them accessibility-friendly and viewable on \n                         tablets and mobile devices of all sorts. That 's what we do!\n                    </p>\n                </div>\n            </div>\n        \n            <div class=\"about-us__box__image col-md-6 d-flex justify-content-center\">\n               <div class=\"shadow-box d-flex align-items-center justify-content-center\">\n                   <img src=\"assets/images/image.svg\" alt=\"\">\n               </div>\n            </div>\n\n\n            <div class=\"about-us__box__image col-md-6 d-flex justify-content-center\">\n               <div class=\"shadow-box d-flex align-items-center justify-content-center\">\n                   <img class=\"\" src=\"assets/images/web.svg\" alt=\"\">\n               </div>\n            </div>\n    \n            <div class=\"about-us__box__text col-md-6\">\n                <div class=\"col\">\n                    <h4>Custom Web Development</h4>\n                </div>\n                <div class=\"col mt-3\">\n                    <p>We create the good-looking and functional websites using the latest and greatest industry \n                        technologies and approaches.Whatever your business is, Webuko can create a \n                        stunning and intuitive website that will impress your customers and attract new ones. Moreover, \n                        your site will be created using best practices for search engines.\n                    </p>\n                </div>\n            </div>\n\n    \n            <div class=\"about-us__box__text col-md-6\">\n                <div class=\"col\">\n                    <h4>Hybrid Applications</h4>\n                </div>\n                <div class=\"col mt-3\">\n                    <p>Our UI/UX designers produce the most attractive and polished \n                        designs for your product you could ever dream of. It's not \n                        just enough to develop websites that only look good, but it's \n                        essential to make them human-friendly, make them work on all\n                         browsers, make them accessibility-friendly and viewable on \n                         tablets and mobile devices of all sorts. That 's what we do!\n                    </p>\n                </div>\n            </div>\n            <div class=\"about-us__box__image col-md-6 d-flex justify-content-center\">\n               <div class=\"shadow-box d-flex align-items-center justify-content-center\">\n                   <img src=\"assets/images/innovation.svg\" alt=\"\">\n               </div>\n            </div>\n            \n            <div class=\"about-us__box__image col-md-6 d-flex justify-content-center\">\n                <div class=\"shadow-box d-flex align-items-center justify-content-center\">\n                    <img class=\"mr-3\" src=\"assets/images/loupe.svg\" alt=\"\">\n                </div>\n            </div> \n            <div class=\"about-us__box__text col-md-6\">\n                <div class=\"col\">\n                    <h4>SEO Optimization</h4>\n                </div>\n                <div class=\"col mt-3\">\n                    <p>Our UI/UX designers produce the most attractive and polished \n                        designs for your product you could ever dream of. It's not \n                        just enough to develop websites that only look good, but it's \n                        essential to make them human-friendly, make them work on all\n                         browsers, make them accessibility-friendly and viewable on \n                         tablets and mobile devices of all sorts. That 's what we do!\n                    </p>\n                </div>\n            </div>\n           \n            <div class=\"about-us__box__text col-md-6\">\n                <div class=\"col\">\n                    <h4>Manage your Social-Network</h4>\n                </div>\n                <div class=\"col mt-3\">\n                    <p>Our UI/UX designers produce the most attractive and polished \n                        designs for your product you could ever dream of. It's not \n                        just enough to develop websites that only look good, but it's \n                        essential to make them human-friendly, make them work on all\n                         browsers, make them accessibility-friendly and viewable on \n                         tablets and mobile devices of all sorts. That 's what we do!\n                    </p>\n                </div>\n            </div>\n            <div class=\"about-us__box__image col-md-6 d-flex justify-content-center\">\n                <div class=\"shadow-box d-flex align-items-center justify-content-center\">\n                    <img src=\"assets/images/network.svg\" alt=\"\">\n                </div>\n            </div> \n           \n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-main/landing-main.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-main/landing-main.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content row d-flex justify-content-between align-items-center\">\n    <div class=\"content__text col-md-6\">\n            <div class=\"col-12\">\n                <h4>\n                    {{ 'Landing-main.Do you want to' | translate }} <br>\n                    {{ 'Landing-main.impress your clients ?' | translate }}\n\n                </h4>\n            </div>\n            <div class=\"content__text__button col-12 d-flex mt-4\">\n                <button class=\"btn-main\" (click)=\"onNavigate()\"> {{ 'buttons.See our services' | translate }} </button>\n            </div>\n    </div>\n    <div class=\"content__img col-md-5\">  \n       <img src=\"/assets/images/Background.svg\" alt=\"\">\n    </div>\n    <div class=\"row content__social col-12 mt-5 d-flex align-items-center justify-content-between\">\n        <div class=\"col-lg-2 mt-3 mb-3 d-flex justify-content-center\">\n            <img src=\"/assets/images/google.svg\" alt=\"google\">\n        </div>\n        <div class=\"col-lg-2 mt-3 mb-3 d-flex justify-content-center\">\n            <img src=\"/assets/images/fb.svg\" alt=\"fb\">\n        </div>\n        <div class=\"col-lg-2 mt-3 mb-3 d-flex justify-content-center\">\n            <img src=\"/assets/images/slack.svg\" alt=\"slack\">\n        </div>\n        <div class=\"col-lg-2 mt-3 mb-3 d-flex justify-content-center\">\n            <img src=\"/assets/images/viber.svg\" alt=\"viber\">\n        </div>\n        <div class=\"col-lg-2 mt-3 mb-3 d-flex justify-content-center\">\n            <img src=\"/assets/images/behance.svg\" alt=\"behance\">\n        </div>\n        <div class=\"col-lg-2 mt-3 mb-3 d-flex justify-content-center\">\n            <img src=\"/assets/images/dribbble.svg\" alt=\"\">\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/slider.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/slider.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"slider row d-flex justify-content-center mt-5 pb-5\">\n    <div class=\"slider__title col-12 mb-5\">\n        <h4>  Interested ? Choose your package</h4>\n        <div class=\"mt-4\">\n            <p>\n                They are people and organizations with ambitious missions. \n                They want to unleash the power of software for their cause or \n                business. We help them envisage, design, and deliver.\n            </p>\n        </div>\n    </div>\n    <div class=\"slider__box col-md-4\">\n    <div class=\"slider__box__content\">\n        <div class=\"slider__box__content__title\">\n            <h4>Starter</h4>\n        </div>\n        <div class=\"slider__box__content__avatar mt-2 mb-2\">\n            <img src=\"assets/images/ilustrations/starter.svg\" alt=\"\">\n        </div>\n        <div class=\"slider__box__content__description d-flex justify-content-center\">\n            <button class=\"btn-main\"> {{ 'buttons.Choose Plan' | translate }} </button>\n        </div>\n    </div>\n    </div>\n    <div class=\"slider__box col-md-4\">\n    <div class=\"slider__box__content\">\n        <div class=\"slider__box__content__title\">\n            <h4>Professional</h4>\n        </div>\n        <div class=\"slider__box__content__avatar mt-2 mb-2\">\n            <img src=\"assets/images/ilustrations/rocket.svg\" alt=\"\">\n        </div>\n        <div class=\"slider__box__content__description d-flex justify-content-center\">\n            <button class=\"btn-main\"> {{ 'buttons.Choose Plan' | translate }} </button>\n        </div>\n    </div>\n    </div>\n    <div class=\"slider__box col-md-4\">\n    <div class=\"slider__box__content\">\n        <div class=\"slider__box__content__title\">\n            <h4>Premium</h4>\n        </div>\n        <div class=\"slider__box__content__avatar mt-2 mb-2\">\n            <img src=\"assets/images/ilustrations/planet.svg\" alt=\"\">\n        </div>\n        <div class=\"slider__box__content__description d-flex justify-content-center\">\n            <button class=\"btn-main\" (click)=\"openModal()\"> {{ 'buttons.Choose Plan' | translate }} </button>\n        </div>\n        \n    </div>\n    </div>\n\n    <!-- <div class=\"slider__box__button col-12 mt-5 d-flex justify-content-center\">\n        <button class=\"btn-main\" (click)=\"onNavigate()\">Show more</button>\n    </div>\n    -->\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"order\">\n    <div class=\"dark-content\">\n        <app-slider></app-slider>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/our-services/our-services.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/our-services/our-services.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"services mt-5\">\n    <div class=\"services__content dark-content p-5\">\n        <div class=\"services__content__title\">\n            <div class=\"mt-3\">\n                <h4>Big challenges require Big ideas</h4>\n            </div>\n            <div class=\"mt-3\">\n                <!-- <p>\n                    We provide enterprise-level of service, covering all areas of software \n                    development: iOS, Android, Web as well as offering professional UX/UI \n                    design expertise.\n                </p>     -->\n            </div>\n        </div>\n\n        <div class=\"services__content__box row d-flex row p-3\">\n            \n            <div class=\"services__content__box__text col-md-6 row\">\n                <h4>User experience design</h4>\n                <p> It's not just enough to develop websites that only look good, but it's essential \n                    to make them human-friendly, make them work on all browsers, make them accessibility-friendly \n                    and viewable on tablets and mobile devices of all sorts. That 's what we do!\n                </p>\n                <div class=\"services__content__box__text__details  col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Flexible</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>We make responsive, cross-browser, and technically advanced websites.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Users won't leave</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>Engaging content is not enough, but the convenient organization and caring about \n                                the reader will do the magic.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Make it easy</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>Let your users enjoy an intuitive website navigation experience, \n                                with easy access to any page.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Human-centered design</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>We're all about UX! We know the fastest and most intuitive way of \n                                giving a user the answer he is looking for.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"services__content__box__image col-md-6 d-flex justify-content-end\">\n                <img src=\"assets/images/ilustrations/design.svg\" alt=\"img\">\n            </div>\n\n            \n            <!--  & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & -->\n\n            <div class=\"services__content__box__image col-md-6 d-flex\">\n                <img src=\"assets/images/ilustrations/developer.svg\" alt=\"img\">\n            </div>\n\n            <div class=\"services__content__box__text col-md-6 row\">\n                <h4>Custom web development</h4>\n                <div class=\"\">\n                    <p> Whatever your business is, Webuko can create a stunning and intuitive \n                        website that will impress your customers and attract new ones. Moreover, \n                        your site will be created using best practices for search engines.\n                    </p>\n                </div>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Following standards</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>We ensure that each line of code is working by W3C standards..</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Constant compatibility</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>In any browser, everyone will have the same experience. \n                                We're always up to date with cross-browser testing.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Yes, the code is also trendy</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>We always tend to learn new technologies day by day to ensure that your product is \n                                the most advanced out there..\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>SEO & statistics</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>Enhancing and improving website search engine discoverability along with deep \n                                Google Analytics integration.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!--  & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & -->\n\n            <div class=\"services__content__box__text col-md-6 row\">\n                <h4>SEO Optimization</h4>\n                <p> It's not just enough to develop websites that only look good, but it's essential \n                    to make them human-friendly, make them work on all browsers, make them accessibility-friendly \n                    and viewable on tablets and mobile devices of all sorts. That 's what we do!\n                </p>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Flexible</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>We make responsive, cross-browser, and technically advanced websites.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Users won't leave</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>Engaging content is not enough, but the convenient organization and caring about \n                                the reader will do the magic.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Make it easy</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>Let your users enjoy an intuitive website navigation experience, \n                                with easy access to any page.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                    <div class=\"services__content__box__text__details__title\">\n                        <h4>Human-centered design</h4>\n                    </div>\n                    <div class=\"services__content__box__text__details__description\">\n                        <div class=\"\">\n                            <p>We're all about UX! We know the fastest and most intuitive way of \n                                giving a user the answer he is looking for.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"services__content__box__image col-md-6 d-flex justify-content-end\">\n                <img src=\"assets/images/ilustrations/analytic.svg\" alt=\"img\">\n            </div>\n            \n        <!--  & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & -->\n\n        <div class=\"services__content__box__image col-md-6 d-flex\">\n            <img src=\"assets/images/ilustrations/hologram.svg\" alt=\"img\">\n        </div>\n\n        <div class=\"services__content__box__text col-md-6 row\">\n            <h4>Hybrid Applications and  Node.js</h4>\n            <p> You have a working product, but it has overgrown its technologies? Node.js \n                fits the needs of a fast-changing Internet that is increasingly mobile. \n                We have the best specialists that are here to help.\n            </p>\n            <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                <div class=\"services__content__box__text__details__title\">\n                    <h4>Performance</h4>\n                </div>\n                <div class=\"services__content__box__text__details__description\">\n                    <div class=\"\">\n                        <p>Node.js is fast. Node.js is asynchronous, which helps it be the most \n                            reliable technology for your application.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                <div class=\"services__content__box__text__details__title\">\n                    <h4>Efficiency</h4>\n                </div>\n                <div class=\"services__content__box__text__details__description\">\n                    <div class=\"\">\n                        <p>Node.js is designed for high-load projects, it can handle \n                            thousands of concurrent requests.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                <div class=\"services__content__box__text__details__title\">\n                    <h4>Staying up to date</h4>\n                </div>\n                <div class=\"services__content__box__text__details__description\">\n                    <div class=\"\">\n                        <p>We go hand in hand with technology, and by using Node.js we can do more for you!</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"services__content__box__text__details col-lg-6 p-0\">\n                <div class=\"services__content__box__text__details__title\">\n                    <h4>Support</h4>\n                </div>\n                <div class=\"services__content__box__text__details__description\">\n                    <div class=\"\">\n                        <p>We tend to build future-proof projects. With modularity, support, and \n                            maintenance of Node.js, it's a piece of cake!\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    <!--  & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & -->\n        <div class=\"services__content__box__text col-md-6\" style=\"align-self: center; border: none;\">\n            <h4>Manage your Social-Network</h4>\n            <p> It's not just enough to develop websites that only look good, but it's essential \n                to make them human-friendly, make them work on all browsers, make them accessibility-friendly \n                and viewable on tablets and mobile devices of all sorts. That 's what we do!\n            </p>\n        </div>\n\n        <div class=\"services__content__box__image col-md-6 d-flex justify-content-end\">\n            <img src=\"assets/images/ilustrations/social.svg\" alt=\"img\">\n        </div>\n    <!--  & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & & -->\n    \n        </div>\n        <div class=\"services__content__order col-12 mt-4 mb-5\">\n            <div class=\"services__content__order__title\">\n                <h4>Interested ?</h4>\n            </div>\n            <div class=\"services__content__order__button mt-4\">\n                <button class=\"btn-main\" (click)=\"onNavigate()\">Talk with us</button>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-us__content__title {\n  text-align: center;\n}\n.about-us__content__title h4 {\n  font-size: 2.25rem;\n  color: #677897;\n}\n.about-us__content__title p {\n  font-size: 1rem;\n  color: #677897;\n}\n.about-us__content__main__image img {\n  width: 100%;\n  height: 100%;\n}\n.about-us__content__main__description h4 {\n  color: #FFFFFF;\n  text-align: center;\n  border-bottom: 1px solid #263F57;\n  padding-bottom: 1rem;\n}\n.about-us__content__main__description p {\n  margin-top: 2rem;\n  color: #677897;\n}\n.about-us__content__main__description__button__title h3 {\n  color: #ff6584;\n  font-size: 1.5rem;\n  text-align: center;\n  letter-spacing: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRO0VBQ0ksa0JBQUE7QUNIWjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxjRUZIO0FEQWI7QURLWTtFQUNJLGVBQUE7RUFDQSxjRVBIO0FESWI7QURRZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ05wQjtBRGVnQjtFQUNJLGNFM0JaO0VGNEJZLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ2JwQjtBRGVnQjtFQUNJLGdCQUFBO0VBQ0EsY0UvQlA7QURrQmI7QURrQndCO0VBRUksY0VuQ3RCO0VGb0NzQixpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNqQjVCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvdmFyaWFibGVzLnNjc3MnOyBcblxuLmFib3V0LXVzIHtcbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJl9fbWFpbiB7XG4gICAgICAgICAgICAmX19pbWFnZSB7IFxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19kZXNjcmlwdGlvbiB7XG5cbiAgICAgICAgICAgICAgICAmX19lZmZlY3Qge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29vbC1ncmV5OyBcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XG4gICAgICAgICAgICAgICAgfSAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJl9fYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAkbGlnaHQtZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4zcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiIsIi5hYm91dC11c19fY29udGVudF9fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXQtdXNfX2NvbnRlbnRfX3RpdGxlIGg0IHtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xuICBjb2xvcjogIzY3Nzg5Nztcbn1cbi5hYm91dC11c19fY29udGVudF9fdGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM2Nzc4OTc7XG59XG4uYWJvdXQtdXNfX2NvbnRlbnRfX21haW5fX2ltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYWJvdXQtdXNfX2NvbnRlbnRfX21haW5fX2Rlc2NyaXB0aW9uIGg0IHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNjNGNTc7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLmFib3V0LXVzX19jb250ZW50X19tYWluX19kZXNjcmlwdGlvbiBwIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgY29sb3I6ICM2Nzc4OTc7XG59XG4uYWJvdXQtdXNfX2NvbnRlbnRfX21haW5fX2Rlc2NyaXB0aW9uX19idXR0b25fX3RpdGxlIGgzIHtcbiAgY29sb3I6ICNmZjY1ODQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG59IiwiXG4vLyAgKiAqICogIENvbG9ycyAqICogKiAgXG4kZ3JleTogIzc4ODdBNzsgXG4kd2hpdGU6ICNGRkZGRkY7IFxuJG1haW4tYmxhY2s6ICMxMDIxMzE7IFxuJGRhcmstZ3JleTogIzI3NDA1ODsgXG4kbGlnaHQtZ3JleTogIzY3Nzg5NzsgXG4kY29vbC1ncmV5OiAjMjYzRjU3OyBcbiRsaW5lYXItZGFyazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmExMWNiIC0xMCUsICMyNTc1ZmMgMTAwJSk7XG4kcmVkOiByZ2IoMjU1LCAxMDEsIDEzMik7IFxuJGdyZWVuOiByZ2IoNTYsIDIxMSwgMTU5KTsiXX0= */");

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")).default]
    })
], AboutUsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./our-services/our-services.component */ "./src/app/our-services/our-services.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");









const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'services', component: _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_4__["OurServicesComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"] },
    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_7__["OrderComponent"] },
    { path: '404', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app {\n  background-color: #102131;\n  font-family: \"Montserrat\", sans-serif;\n  width: 100%;\n  height: 100%;\n}\n.app .header img {\n  width: 10rem;\n  height: 5rem;\n  cursor: pointer;\n}\n.font-geo {\n  font-family: \"BPG Mrgvlovani Caps\", sans-serif !important;\n}\n.geo-text-size {\n  font-size: 0.9rem !important;\n}\nspan {\n  color: #08c0a7;\n  font-weight: bold;\n  cursor: pointer;\n  font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkNDUztFREFULHFDQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7QUVISjtBRk9RO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FFTFo7QUZVQTtFQUNJLHlEQUFBO0FFUEo7QUZVQTtFQUNJLDRCQUFBO0FFUEo7QUZVQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBRVBKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vYXNzZXRzL3ZhcmlhYmxlcy5zY3NzJztcblxuLmFwcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblxuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb250LWdlbyB7XG4gICAgZm9udC1mYW1pbHk6IFwiQlBHIE1yZ3Zsb3ZhbmkgQ2Fwc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59OyBcblxuLmdlby10ZXh0LXNpemUgeyBcbiAgICBmb250LXNpemU6IC45cmVtICFpbXBvcnRhbnQ7IFxufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogcmdiKDgsIDE5MiwgMTY3KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbiIsIlxuLy8gICogKiAqICBDb2xvcnMgKiAqICogIFxuJGdyZXk6ICM3ODg3QTc7IFxuJHdoaXRlOiAjRkZGRkZGOyBcbiRtYWluLWJsYWNrOiAjMTAyMTMxOyBcbiRkYXJrLWdyZXk6ICMyNzQwNTg7IFxuJGxpZ2h0LWdyZXk6ICM2Nzc4OTc7IFxuJGNvb2wtZ3JleTogIzI2M0Y1NzsgXG4kbGluZWFyLWRhcms6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZhMTFjYiAtMTAlLCAjMjU3NWZjIDEwMCUpO1xuJHJlZDogcmdiKDI1NSwgMTAxLCAxMzIpOyBcbiRncmVlbjogcmdiKDU2LCAyMTEsIDE1OSk7IiwiLmFwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDIxMzE7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hcHAgLmhlYWRlciBpbWcge1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9udC1nZW8ge1xuICBmb250LWZhbWlseTogXCJCUEcgTXJndmxvdmFuaSBDYXBzXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLmdlby10ZXh0LXNpemUge1xuICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICMwOGMwYTc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let AppComponent = class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'webuko';
        this.isGeorgian = false;
        translate.setDefaultLang('en');
    }
    ngOnInit() {
    }
    switchLanguage(language) {
        this.translate.use(language);
        this.toggleLanguage();
    }
    toggleLanguage() {
        this.isGeorgian === false ? this.isGeorgian = true : this.isGeorgian = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _components_before_footer_before_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/before-footer/before-footer.component */ "./src/app/components/before-footer/before-footer.component.ts");
/* harmony import */ var _our_services_our_services_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./our-services/our-services.module */ "./src/app/our-services/our-services.module.ts");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.module */ "./src/app/contact/contact.module.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http);
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_before_footer_before_footer_component__WEBPACK_IMPORTED_MODULE_8__["BeforeFooterComponent"],
            _order_order_component__WEBPACK_IMPORTED_MODULE_11__["OrderComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"],
            _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
            _our_services_our_services_module__WEBPACK_IMPORTED_MODULE_9__["OurServicesModule"],
            _contact_contact_module__WEBPACK_IMPORTED_MODULE_10__["ContactModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]]
                }
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/before-footer/before-footer.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/before-footer/before-footer.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  border-top: 1px solid #263F57;\n}\n.footer__language .language-box {\n  background: url('Path.png') no-repeat;\n  color: #FFFFFF;\n  margin-right: 1rem;\n}\n.footer__language p {\n  color: #2A4560;\n}\n.footer__menu ul li {\n  list-style: none;\n}\n.footer__menu ul li a {\n  color: #677897;\n  font-size: 1rem;\n  cursor: pointer;\n  line-height: 2rem;\n  text-decoration: none;\n}\n.footer__menu ul li a:hover {\n  color: #FFFFFF;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.footer__location-contact__location p {\n  color: #2A4560;\n  font-size: 0.875rem;\n}\n.footer__location-contact__location i {\n  color: #677897;\n  font-size: 1.2rem;\n  margin-right: 1.5rem;\n}\n.footer__location-contact__contact .social-box {\n  border-radius: 50%;\n  padding: 0.4rem;\n  background-color: #7887A7;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n.footer__location-contact__contact .social-box i {\n  color: #102131;\n  font-size: 1rem;\n}\n.active {\n  color: #FFFFFF !important;\n  border-bottom: 1px solid #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2NvbXBvbmVudHMvYmVmb3JlLWZvb3Rlci9iZWZvcmUtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JlZm9yZS1mb290ZXIvYmVmb3JlLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkJBQUE7QUNBSjtBREVRO0VBQ0kscUNBQUE7RUFDQSxjRUhKO0VGSUksa0JBQUE7QUNBWjtBREVRO0VBQ1EsY0FBQTtBQ0FoQjtBREtZO0VBQ0ksZ0JBQUE7QUNIaEI7QURJZ0I7RUFDSSxjRVpQO0VGYU8sZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDRnBCO0FESW9CO0VBQ0ksY0V0QmhCO0VGdUJnQix3QkFBQTtFQUFBLGdCQUFBO0FDRnhCO0FEV1k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNUaEI7QURXWTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDVGhCO0FEY1k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkVoRFQ7RUZpRFMsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDWmhCO0FEYWdCO0VBQ0ksY0VwRFA7RUZxRE8sZUFBQTtBQ1hwQjtBRG1CQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JlZm9yZS1mb290ZXIvYmVmb3JlLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy92YXJpYWJsZXMuc2Nzcyc7XG4uZm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvb2wtZ3JleTtcbiAgICAmX19sYW5ndWFnZSB7XG4gICAgICAgIC5sYW5ndWFnZS1ib3gge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1BhdGgucG5nJykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJBNDU2MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19tZW51IHtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbGlnaHQtZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2xvY2F0aW9uLWNvbnRhY3Qge1xuICAgICAgICAmX19sb2NhdGlvbiB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJBNDU2MDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY3Nzg5NztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2NvbnRhY3Qge1xuICAgICAgICAgICAgLnNvY2lhbC1ib3gge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNHJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLmFjdGl2ZSB7XG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkd2hpdGU7XG59IiwiLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjYzRjU3O1xufVxuLmZvb3Rlcl9fbGFuZ3VhZ2UgLmxhbmd1YWdlLWJveCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvUGF0aC5wbmdcIikgbm8tcmVwZWF0O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLmZvb3Rlcl9fbGFuZ3VhZ2UgcCB7XG4gIGNvbG9yOiAjMkE0NTYwO1xufVxuLmZvb3Rlcl9fbWVudSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uZm9vdGVyX19tZW51IHVsIGxpIGEge1xuICBjb2xvcjogIzY3Nzg5NztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9vdGVyX19tZW51IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5mb290ZXJfX2xvY2F0aW9uLWNvbnRhY3RfX2xvY2F0aW9uIHAge1xuICBjb2xvcjogIzJBNDU2MDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5mb290ZXJfX2xvY2F0aW9uLWNvbnRhY3RfX2xvY2F0aW9uIGkge1xuICBjb2xvcjogIzY3Nzg5NztcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuLmZvb3Rlcl9fbG9jYXRpb24tY29udGFjdF9fY29udGFjdCAuc29jaWFsLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMC40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg4N0E3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvb3Rlcl9fbG9jYXRpb24tY29udGFjdF9fY29udGFjdCAuc29jaWFsLWJveCBpIHtcbiAgY29sb3I6ICMxMDIxMzE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGRkZGO1xufSIsIlxuLy8gICogKiAqICBDb2xvcnMgKiAqICogIFxuJGdyZXk6ICM3ODg3QTc7IFxuJHdoaXRlOiAjRkZGRkZGOyBcbiRtYWluLWJsYWNrOiAjMTAyMTMxOyBcbiRkYXJrLWdyZXk6ICMyNzQwNTg7IFxuJGxpZ2h0LWdyZXk6ICM2Nzc4OTc7IFxuJGNvb2wtZ3JleTogIzI2M0Y1NzsgXG4kbGluZWFyLWRhcms6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZhMTFjYiAtMTAlLCAjMjU3NWZjIDEwMCUpO1xuJHJlZDogcmdiKDI1NSwgMTAxLCAxMzIpOyBcbiRncmVlbjogcmdiKDU2LCAyMTEsIDE1OSk7Il19 */");

/***/ }),

/***/ "./src/app/components/before-footer/before-footer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/before-footer/before-footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: BeforeFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeFooterComponent", function() { return BeforeFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BeforeFooterComponent = class BeforeFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
BeforeFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-before-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./before-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/before-footer/before-footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./before-footer.component.scss */ "./src/app/components/before-footer/before-footer.component.scss")).default]
    })
], BeforeFooterComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer__line {\n  background-color: #1F2B44;\n}\n.footer__line__logo img {\n  width: 6rem;\n  height: 3rem;\n}\n.footer__line span {\n  color: #677897;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvb3h5bW9uc3Rlci9EZXNrdG9wL3dlYnVrby1hcHAvd2VidWtvL3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFBQTtBQ0RKO0FER1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RaO0FESUk7RUFDSSxjRUxLO0VGTUwsbUJBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy92YXJpYWJsZXMuc2Nzcyc7XG5cbi5mb290ZXJfX2xpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjJCNDQ7XG4gICAgJl9fbG9nbyB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNnJlbTtcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICRsaWdodC1ncmV5O1xuICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgfVxufVxuIiwiLmZvb3Rlcl9fbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjJCNDQ7XG59XG4uZm9vdGVyX19saW5lX19sb2dvIGltZyB7XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDNyZW07XG59XG4uZm9vdGVyX19saW5lIHNwYW4ge1xuICBjb2xvcjogIzY3Nzg5NztcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn0iLCJcbi8vICAqICogKiAgQ29sb3JzICogKiAqICBcbiRncmV5OiAjNzg4N0E3OyBcbiR3aGl0ZTogI0ZGRkZGRjsgXG4kbWFpbi1ibGFjazogIzEwMjEzMTsgXG4kZGFyay1ncmV5OiAjMjc0MDU4OyBcbiRsaWdodC1ncmV5OiAjNjc3ODk3OyBcbiRjb29sLWdyZXk6ICMyNjNGNTc7IFxuJGxpbmVhci1kYXJrOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2YTExY2IgLTEwJSwgIzI1NzVmYyAxMDAlKTtcbiRyZWQ6IHJnYigyNTUsIDEwMSwgMTMyKTsgXG4kZ3JlZW46IHJnYig1NiwgMjExLCAxNTkpOyJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalComponent = class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")).default]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  text-align: center;\n  color: #FFFFFF;\n}\n\nimg {\n  height: 25rem;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9veHltb25zdGVyL0Rlc2t0b3Avd2VidWtvLWFwcC93ZWJ1a28vc3JjL2Fzc2V0cy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0NESTtBQ0FSOztBRklBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUVESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvdmFyaWFibGVzLnNjc3MnO1xuXG5oNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkd2hpdGU7XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn0gICAgIiwiXG4vLyAgKiAqICogIENvbG9ycyAqICogKiAgXG4kZ3JleTogIzc4ODdBNzsgXG4kd2hpdGU6ICNGRkZGRkY7IFxuJG1haW4tYmxhY2s6ICMxMDIxMzE7IFxuJGRhcmstZ3JleTogIzI3NDA1ODsgXG4kbGlnaHQtZ3JleTogIzY3Nzg5NzsgXG4kY29vbC1ncmV5OiAjMjYzRjU3OyBcbiRsaW5lYXItZGFyazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmExMWNiIC0xMCUsICMyNTc1ZmMgMTAwJSk7XG4kcmVkOiByZ2IoMjU1LCAxMDEsIDEzMik7IFxuJGdyZWVuOiByZ2IoNTYsIDIxMSwgMTU5KTsiLCJoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NotfoundComponent = class NotfoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onNavigate() {
        this.router.navigateByUrl('/home');
    }
};
NotfoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notfound.component.scss */ "./src/app/components/notfound/notfound.component.scss")).default]
    })
], NotfoundComponent);



/***/ }),

/***/ "./src/app/components/top-navigation/top-navigation.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/top-navigation/top-navigation.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation ul li {\n  list-style-type: none;\n}\n.navigation ul li a {\n  color: #7887A7;\n  cursor: pointer;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.navigation ul li a:hover {\n  color: #FFFFFF;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n@media (max-width: 794px) {\n  .navigation ul li {\n    display: none;\n  }\n}\n.active {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2NvbXBvbmVudHMvdG9wLW5hdmlnYXRpb24vdG9wLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9wLW5hdmlnYXRpb24vdG9wLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9veHltb25zdGVyL0Rlc2t0b3Avd2VidWtvLWFwcC93ZWJ1a28vc3JjL2Fzc2V0cy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLUTtFQUNJLHFCQUFBO0FDSlo7QURLWTtFQUNJLGNFTlQ7RUZPUyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0hoQjtBREtnQjtFQUNJLGNFWFo7RUZZWSx3QkFBQTtFQUFBLGdCQUFBO0FDSHBCO0FEU1E7RUFDSTtJQUNJLGFBQUE7RUNQZDtBQUNGO0FEWUE7RUFDSSx1QkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3AtbmF2aWdhdGlvbi90b3AtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy92YXJpYWJsZXMuc2Nzcyc7IFxuXG4ubmF2aWdhdGlvbiB7XG4gICAgXG4gICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OTRweCkge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSAiLCIubmF2aWdhdGlvbiB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5uYXZpZ2F0aW9uIHVsIGxpIGEge1xuICBjb2xvcjogIzc4ODdBNztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2aWdhdGlvbiB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzk0cHgpIHtcbiAgLm5hdmlnYXRpb24gdWwgbGkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSIsIlxuLy8gICogKiAqICBDb2xvcnMgKiAqICogIFxuJGdyZXk6ICM3ODg3QTc7IFxuJHdoaXRlOiAjRkZGRkZGOyBcbiRtYWluLWJsYWNrOiAjMTAyMTMxOyBcbiRkYXJrLWdyZXk6ICMyNzQwNTg7IFxuJGxpZ2h0LWdyZXk6ICM2Nzc4OTc7IFxuJGNvb2wtZ3JleTogIzI2M0Y1NzsgXG4kbGluZWFyLWRhcms6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZhMTFjYiAtMTAlLCAjMjU3NWZjIDEwMCUpO1xuJHJlZDogcmdiKDI1NSwgMTAxLCAxMzIpOyBcbiRncmVlbjogcmdiKDU2LCAyMTEsIDE1OSk7Il19 */");

/***/ }),

/***/ "./src/app/components/top-navigation/top-navigation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/top-navigation/top-navigation.component.ts ***!
  \***********************************************************************/
/*! exports provided: TopNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavigationComponent", function() { return TopNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopNavigationComponent = class TopNavigationComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-navigation/top-navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-navigation.component.scss */ "./src/app/components/top-navigation/top-navigation.component.scss")).default]
    })
], TopNavigationComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact__title {\n  text-align: center;\n}\n.contact__title h4 {\n  color: #7887A7;\n  font-size: 2.25rem;\n}\n.contact__title p {\n  color: #677897;\n}\n.contact__information__title h4 {\n  font-size: 2rem;\n  color: #ff6584;\n}\n.contact__information__information {\n  text-align: center;\n}\n.contact__information__information h4 {\n  color: #FFFFFF;\n  font-size: 1.5rem;\n}\n.contact__information__information p {\n  font-size: 1rem;\n  color: #677897;\n}\n.contact__form__title h4 {\n  font-size: 2rem;\n  color: #7887A7;\n}\n.contact__form__title .submitted {\n  font-size: 2rem;\n  color: #38d39f;\n}\n.contact__form__title p {\n  color: #FFFFFF;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvb3h5bW9uc3Rlci9EZXNrdG9wL3dlYnVrby1hcHAvd2VidWtvL3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxrQkFBQTtBQ0ZSO0FER1E7RUFDSSxjRUpMO0VGS0ssa0JBQUE7QUNEWjtBREdRO0VBQ0ksY0VKQztBREdiO0FET1k7RUFDSSxlQUFBO0VBQ0EsY0VUVjtBRElOO0FEU1E7RUFDSSxrQkFBQTtBQ1BaO0FEUVk7RUFDSSxjRXRCUjtFRnVCUSxpQkFBQTtBQ05oQjtBRFFZO0VBQ0ksZUFBQTtFQUNBLGNFeEJIO0FEa0JiO0FEYVk7RUFDSSxlQUFBO0VBQ0EsY0VyQ1Q7QUQwQlA7QURhWTtFQUNJLGVBQUE7RUFDQSxjRWpDUjtBRHNCUjtBRGFZO0VBQ0ksY0UzQ1I7RUY0Q1EsZUFBQTtBQ1hoQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy92YXJpYWJsZXMuc2Nzcyc7IFxuXG4uY29udGFjdCB7XG4gICAgJl9fdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbGlnaHQtZ3JleTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2luZm9ybWF0aW9uIHtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2luZm9ybWF0aW9uIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7IFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19mb3JtIHsgICAgXG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1Ym1pdHRlZCB7IFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRhY3RfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3RfX3RpdGxlIGg0IHtcbiAgY29sb3I6ICM3ODg3QTc7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbn1cbi5jb250YWN0X190aXRsZSBwIHtcbiAgY29sb3I6ICM2Nzc4OTc7XG59XG4uY29udGFjdF9faW5mb3JtYXRpb25fX3RpdGxlIGg0IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI2ZmNjU4NDtcbn1cbi5jb250YWN0X19pbmZvcm1hdGlvbl9faW5mb3JtYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFjdF9faW5mb3JtYXRpb25fX2luZm9ybWF0aW9uIGg0IHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmNvbnRhY3RfX2luZm9ybWF0aW9uX19pbmZvcm1hdGlvbiBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzY3Nzg5Nztcbn1cbi5jb250YWN0X19mb3JtX190aXRsZSBoNCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICM3ODg3QTc7XG59XG4uY29udGFjdF9fZm9ybV9fdGl0bGUgLnN1Ym1pdHRlZCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICMzOGQzOWY7XG59XG4uY29udGFjdF9fZm9ybV9fdGl0bGUgcCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDFyZW07XG59IiwiXG4vLyAgKiAqICogIENvbG9ycyAqICogKiAgXG4kZ3JleTogIzc4ODdBNzsgXG4kd2hpdGU6ICNGRkZGRkY7IFxuJG1haW4tYmxhY2s6ICMxMDIxMzE7IFxuJGRhcmstZ3JleTogIzI3NDA1ODsgXG4kbGlnaHQtZ3JleTogIzY3Nzg5NzsgXG4kY29vbC1ncmV5OiAjMjYzRjU3OyBcbiRsaW5lYXItZGFyazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmExMWNiIC0xMCUsICMyNTc1ZmMgMTAwJSk7XG4kcmVkOiByZ2IoMjU1LCAxMDEsIDEzMik7IFxuJGdyZWVuOiByZ2IoNTYsIDIxMSwgMTU5KTsiXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() {
        this.isSubmited = false;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.isSubmited = true;
        return false;
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");




let ContactModule = class ContactModule {
};
ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ContactModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  background-color: #102131;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkNDUztBQ0ZiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3ZhcmlhYmxlcy5zY3NzJzsgXG5cbi5ob21lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1ibGFjaztcbn0iLCJcbi8vICAqICogKiAgQ29sb3JzICogKiAqICBcbiRncmV5OiAjNzg4N0E3OyBcbiR3aGl0ZTogI0ZGRkZGRjsgXG4kbWFpbi1ibGFjazogIzEwMjEzMTsgXG4kZGFyay1ncmV5OiAjMjc0MDU4OyBcbiRsaWdodC1ncmV5OiAjNjc3ODk3OyBcbiRjb29sLWdyZXk6ICMyNjNGNTc7IFxuJGxpbmVhci1kYXJrOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2YTExY2IgLTEwJSwgIzI1NzVmYyAxMDAlKTtcbiRyZWQ6IHJnYigyNTUsIDEwMSwgMTMyKTsgXG4kZ3JlZW46IHJnYig1NiwgMjExLCAxNTkpOyIsIi5ob21lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMjEzMTtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HttpLoaderFactory, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _landing_main_landing_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-main/landing-main.component */ "./src/app/home/landing-main/landing-main.component.ts");
/* harmony import */ var _landing_about_us_landing_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-about-us/landing-about-us.component */ "./src/app/home/landing-about-us/landing-about-us.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/home/slider/slider.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
const COMPONENTS = [
    _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    _landing_main_landing_main_component__WEBPACK_IMPORTED_MODULE_4__["LandingMainComponent"],
    _landing_about_us_landing_about_us_component__WEBPACK_IMPORTED_MODULE_5__["LandingAboutUsComponent"],
    _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"]
];
let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            _landing_main_landing_main_component__WEBPACK_IMPORTED_MODULE_4__["LandingMainComponent"],
            _landing_about_us_landing_about_us_component__WEBPACK_IMPORTED_MODULE_5__["LandingAboutUsComponent"],
            _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            })
        ],
        exports: COMPONENTS
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/landing-about-us/landing-about-us.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/landing-about-us/landing-about-us.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-us {\n  border-bottom: 1px solid #274058;\n}\n.about-us__box {\n  margin-top: 5rem;\n}\n.about-us__box__title {\n  text-align: center;\n}\n.about-us__box__title h4 {\n  font-size: 2.25rem;\n  color: #677897;\n}\n@media (max-width: 794px) {\n  .about-us__box__text {\n    border-bottom: 1px solid #263F57;\n  }\n}\n.about-us__box__text h4 {\n  color: #FFFFFF;\n  font-size: 2rem;\n}\n@media (max-width: 794px) {\n  .about-us__box__text h4 {\n    margin-top: 3rem;\n  }\n}\n.about-us__box__text p {\n  color: #677897;\n  font-size: 1rem;\n  line-height: 1.875rem;\n}\n.about-us__box__image .shadow-box {\n  background: #102131;\n  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.489159);\n  border-radius: 15px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  width: 16rem;\n  height: 16rem;\n  margin-top: 4rem;\n  margin-bottom: 5rem;\n}\n.about-us__box__image .shadow-box img {\n  width: 55%;\n  height: 55%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n@media (max-width: 768px) {\n  .about-us__box__image .shadow-box img {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .about-us__box__image .shadow-box {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2hvbWUvbGFuZGluZy1hYm91dC11cy9sYW5kaW5nLWFib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xhbmRpbmctYWJvdXQtdXMvbGFuZGluZy1hYm91dC11cy5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZ0NBQUE7QUNGSjtBREdDO0VBQ08sZ0JBQUE7QUNEUjtBREdLO0VBQ0ksa0JBQUE7QUNEVDtBREVTO0VBQ0ksa0JBQUE7RUFDQSxjRU5BO0FETWI7QURLUTtFQURIO0lBRU8sZ0NBQUE7RUNGVjtBQUNGO0FER1M7RUFDSSxjRWxCTDtFRm1CSyxlQUFBO0FDRGI7QURFYTtFQUhKO0lBSU8sZ0JBQUE7RUNDZDtBQUNGO0FERVM7RUFDSSxjRXZCQTtFRndCQSxlQUFBO0VBQ0EscUJBQUE7QUNBYjtBREtTO0VBQ0ksbUJBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDRCxtQkFBQTtBQ0haO0FESVk7RUFFSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNIaEI7QURJZ0I7RUFMSjtJQU1RLGFBQUE7RUNEbEI7QUFDRjtBREtZO0VBcEJIO0lBcUJPLHdCQUFBO0VDRmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGFuZGluZy1hYm91dC11cy9sYW5kaW5nLWFib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3ZhcmlhYmxlcy5zY3NzJzsgXG5cblxuLmFib3V0LXVzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRhcmstZ3JleTtcbiAmX19ib3gge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtOyBcblxuICAgICAmX190aXRsZSB7XG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICBoNCB7XG4gICAgICAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgICAgICAgICAgIGNvbG9yOiAkbGlnaHQtZ3JleTtcbiAgICAgICAgIH1cbiAgICAgfVxuIFxuICAgICAmX190ZXh0IHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5NHB4KSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvb2wtZ3JleTtcbiAgICAgICAgfVxuICAgICAgICAgaDQge1xuICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OTRweCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgICB9XG4gXG4gICAgICAgICB9XG4gICAgICAgICBwIHtcbiAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XG4gICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg3NXJlbTtcbiAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgICZfX2ltYWdlIHtcbiAgICAgICAgIC5zaGFkb3ctYm94IHtcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTAyMTMxO1xuICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjQ4OTE1OSk7XG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgd2lkdGg6IDE2cmVtO1xuICAgICAgICAgICAgIGhlaWdodDogMTZyZW07XG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKC01MGRlZyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgIH1cbiB9XG59IiwiLmFib3V0LXVzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNzQwNTg7XG59XG4uYWJvdXQtdXNfX2JveCB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG59XG4uYWJvdXQtdXNfX2JveF9fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXQtdXNfX2JveF9fdGl0bGUgaDQge1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGNvbG9yOiAjNjc3ODk3O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc5NHB4KSB7XG4gIC5hYm91dC11c19fYm94X190ZXh0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI2M0Y1NztcbiAgfVxufVxuLmFib3V0LXVzX19ib3hfX3RleHQgaDQge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc5NHB4KSB7XG4gIC5hYm91dC11c19fYm94X190ZXh0IGg0IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG59XG4uYWJvdXQtdXNfX2JveF9fdGV4dCBwIHtcbiAgY29sb3I6ICM2Nzc4OTc7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuODc1cmVtO1xufVxuLmFib3V0LXVzX19ib3hfX2ltYWdlIC5zaGFkb3ctYm94IHtcbiAgYmFja2dyb3VuZDogIzEwMjEzMTtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNDg5MTU5KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogMTZyZW07XG4gIGhlaWdodDogMTZyZW07XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG4uYWJvdXQtdXNfX2JveF9faW1hZ2UgLnNoYWRvdy1ib3ggaW1nIHtcbiAgd2lkdGg6IDU1JTtcbiAgaGVpZ2h0OiA1NSU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFib3V0LXVzX19ib3hfX2ltYWdlIC5zaGFkb3ctYm94IGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hYm91dC11c19fYm94X19pbWFnZSAuc2hhZG93LWJveCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59IiwiXG4vLyAgKiAqICogIENvbG9ycyAqICogKiAgXG4kZ3JleTogIzc4ODdBNzsgXG4kd2hpdGU6ICNGRkZGRkY7IFxuJG1haW4tYmxhY2s6ICMxMDIxMzE7IFxuJGRhcmstZ3JleTogIzI3NDA1ODsgXG4kbGlnaHQtZ3JleTogIzY3Nzg5NzsgXG4kY29vbC1ncmV5OiAjMjYzRjU3OyBcbiRsaW5lYXItZGFyazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmExMWNiIC0xMCUsICMyNTc1ZmMgMTAwJSk7XG4kcmVkOiByZ2IoMjU1LCAxMDEsIDEzMik7IFxuJGdyZWVuOiByZ2IoNTYsIDIxMSwgMTU5KTsiXX0= */");

/***/ }),

/***/ "./src/app/home/landing-about-us/landing-about-us.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/landing-about-us/landing-about-us.component.ts ***!
  \*********************************************************************/
/*! exports provided: LandingAboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingAboutUsComponent", function() { return LandingAboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingAboutUsComponent = class LandingAboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingAboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-about-us/landing-about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-about-us.component.scss */ "./src/app/home/landing-about-us/landing-about-us.component.scss")).default]
    })
], LandingAboutUsComponent);



/***/ }),

/***/ "./src/app/home/landing-main/landing-main.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/landing-main/landing-main.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content__text h4 {\n  color: #FFFFFF;\n  font-size: 3rem;\n  line-height: 4.25rem;\n  margin-top: 6rem;\n  text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);\n}\n@media (max-width: 794px) {\n  .content__text__button {\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n}\n.content__img img {\n  z-index: 23;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: mover 2s infinite alternate;\n  animation: mover 2s infinite alternate;\n}\n@media (max-width: 767px) {\n  .content__img img {\n    display: none;\n  }\n}\n.content__social {\n  border-bottom: 1px solid #274058;\n  padding: 1rem;\n}\n.content__social img {\n  cursor: pointer;\n}\n.content__social img:active {\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n.geo-fontsize {\n  font-size: 2rem;\n}\n@-webkit-keyframes mover {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n@keyframes mover {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2hvbWUvbGFuZGluZy1tYWluL2xhbmRpbmctbWFpbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9ob21lL2xhbmRpbmctbWFpbi9sYW5kaW5nLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDSSxjQ0ZKO0VESUksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtBRUpaO0FGU1k7RUFESjtJQUVRLHdCQUFBO1lBQUEsdUJBQUE7RUVOZDtBQUNGO0FGWVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0FFVlo7QUZhWTtFQVJKO0lBU1EsYUFBQTtFRVZkO0FBQ0Y7QUZjSTtFQUNJLGdDQUFBO0VBQ0EsYUFBQTtBRVpSO0FGYVk7RUFDSSxlQUFBO0FFWGhCO0FGYWdCO0VBQ0ksa0NBQUE7VUFBQSwwQkFBQTtBRVhwQjtBRm1CQTtFQUNJLGVBQUE7QUVoQko7QUZtQkE7RUFDSTtJQUFLLGdDQUFBO1lBQUEsd0JBQUE7RUVmUDtFRmdCRTtJQUFPLG9DQUFBO1lBQUEsNEJBQUE7RUViVDtBQUNGO0FGY0E7RUFDSTtJQUFLLGdDQUFBO1lBQUEsd0JBQUE7RUVYUDtFRllFO0lBQU8sb0NBQUE7WUFBQSw0QkFBQTtFRVRUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmctbWFpbi9sYW5kaW5nLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvdmFyaWFibGVzLnNjc3MnOyBcblxuLmNvbnRlbnQge1xuICAgICZfX3RleHQge1xuICAgICAgICBoNCB7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNC4yNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgJl9fYnV0dG9uIHtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OTRweCkge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJl9faW1nIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDIzO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMnMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZXIgMnMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fc29jaWFsIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNzQwNTg7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuLmdlby1mb250c2l6ZSB7XG4gICAgZm9udC1zaXplOiAycmVtOyBcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG59IiwiXG4vLyAgKiAqICogIENvbG9ycyAqICogKiAgXG4kZ3JleTogIzc4ODdBNzsgXG4kd2hpdGU6ICNGRkZGRkY7IFxuJG1haW4tYmxhY2s6ICMxMDIxMzE7IFxuJGRhcmstZ3JleTogIzI3NDA1ODsgXG4kbGlnaHQtZ3JleTogIzY3Nzg5NzsgXG4kY29vbC1ncmV5OiAjMjYzRjU3OyBcbiRsaW5lYXItZGFyazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmExMWNiIC0xMCUsICMyNTc1ZmMgMTAwJSk7XG4kcmVkOiByZ2IoMjU1LCAxMDEsIDEzMik7IFxuJGdyZWVuOiByZ2IoNTYsIDIxMSwgMTU5KTsiLCIuY29udGVudF9fdGV4dCBoNCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiA0LjI1cmVtO1xuICBtYXJnaW4tdG9wOiA2cmVtO1xuICB0ZXh0LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3OTRweCkge1xuICAuY29udGVudF9fdGV4dF9fYnV0dG9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLmNvbnRlbnRfX2ltZyBpbWcge1xuICB6LWluZGV4OiAyMztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDJzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlciAycyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbnRfX2ltZyBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5jb250ZW50X19zb2NpYWwge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI3NDA1ODtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5jb250ZW50X19zb2NpYWwgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRlbnRfX3NvY2lhbCBpbWc6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG5cbi5nZW8tZm9udHNpemUge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/landing-main/landing-main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/landing-main/landing-main.component.ts ***!
  \*************************************************************/
/*! exports provided: LandingMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingMainComponent", function() { return LandingMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LandingMainComponent = class LandingMainComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onNavigate() {
        this.router.navigateByUrl('/services');
    }
};
LandingMainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LandingMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-main/landing-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-main.component.scss */ "./src/app/home/landing-main/landing-main.component.scss")).default]
    })
], LandingMainComponent);



/***/ }),

/***/ "./src/app/home/slider/slider.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/slider/slider.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slider {\n  position: relative;\n}\n.slider__title {\n  text-align: center;\n}\n.slider__title h4 {\n  color: #677897;\n  font-size: 2.25rem;\n}\n.slider__title p {\n  color: #2A4560;\n}\n.slider__box div {\n  background: #102131;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.489159);\n}\n.slider__box__content__avatar {\n  height: 15rem;\n}\n.slider__box__content__avatar img {\n  width: 100%;\n  height: 100%;\n  border-radius: 0.5rem;\n}\n.slider__box__content__title {\n  text-align: center;\n}\n.slider__box__content__title h4 {\n  font-size: 1.6rem;\n  color: #FFFFFF;\n  text-shadow: 0px 15px 30px rgba(0, 0, 0, 0.489159);\n  letter-spacing: 0.3rem;\n}\n.slider__box__content__description p {\n  color: #263F57;\n}\n.right-arrow {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  font-size: 2rem;\n  cursor: pointer;\n  color: #677897;\n}\n.left-arrow {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  font-size: 2rem;\n  cursor: pointer;\n  color: #677897;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL2hvbWUvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvb3h5bW9uc3Rlci9EZXNrdG9wL3dlYnVrby1hcHAvd2VidWtvL3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtBQ0RKO0FESUk7RUFDSSxrQkFBQTtBQ0ZSO0FER1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNEWjtBREdRO0VBQ0ksY0FBQTtBQ0RaO0FES1E7RUFFSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FDSlo7QURTWTtFQUNJLGFBQUE7QUNQaEI7QURRZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDTnBCO0FEU1k7RUFDSSxrQkFBQTtBQ1BoQjtBRFFnQjtFQUNJLGlCQUFBO0VBQ0EsY0VwQ1o7RUZxQ1ksa0RBQUE7RUFFQSxzQkFBQTtBQ1BwQjtBRGFnQjtFQUNJLGNFMUNSO0FEK0JaO0FEbUJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0V6RFM7QUR5Q2I7QURtQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0VuRVM7QURtRGIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvdmFyaWFibGVzLnNjc3MnOyBcblxuLnNsaWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGFyay1ncmV5O1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjc3ODk3O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICMyQTQ1NjA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fYm94IHtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb29sLWdyZXk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTAyMTMxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNDg5MTU5KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICAmX19hdmF0YXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDE1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNDg5MTU5KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuM3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvb2wtZ3JleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLnJpZ2h0LWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgdG9wOiA1MCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XG59XG5cbi5sZWZ0LWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMXJlbTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICRsaWdodC1ncmV5O1xuXG5cbn1cblxuIiwiLnNsaWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGlkZXJfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNsaWRlcl9fdGl0bGUgaDQge1xuICBjb2xvcjogIzY3Nzg5NztcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xufVxuLnNsaWRlcl9fdGl0bGUgcCB7XG4gIGNvbG9yOiAjMkE0NTYwO1xufVxuLnNsaWRlcl9fYm94IGRpdiB7XG4gIGJhY2tncm91bmQ6ICMxMDIxMzE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNDg5MTU5KTtcbn1cbi5zbGlkZXJfX2JveF9fY29udGVudF9fYXZhdGFyIHtcbiAgaGVpZ2h0OiAxNXJlbTtcbn1cbi5zbGlkZXJfX2JveF9fY29udGVudF9fYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5zbGlkZXJfX2JveF9fY29udGVudF9fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2xpZGVyX19ib3hfX2NvbnRlbnRfX3RpdGxlIGg0IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXNoYWRvdzogMHB4IDE1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNDg5MTU5KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbn1cbi5zbGlkZXJfX2JveF9fY29udGVudF9fZGVzY3JpcHRpb24gcCB7XG4gIGNvbG9yOiAjMjYzRjU3O1xufVxuXG4ucmlnaHQtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xuICB0b3A6IDUwJTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjc3ODk3O1xufVxuXG4ubGVmdC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzY3Nzg5Nztcbn0iLCJcbi8vICAqICogKiAgQ29sb3JzICogKiAqICBcbiRncmV5OiAjNzg4N0E3OyBcbiR3aGl0ZTogI0ZGRkZGRjsgXG4kbWFpbi1ibGFjazogIzEwMjEzMTsgXG4kZGFyay1ncmV5OiAjMjc0MDU4OyBcbiRsaWdodC1ncmV5OiAjNjc3ODk3OyBcbiRjb29sLWdyZXk6ICMyNjNGNTc7IFxuJGxpbmVhci1kYXJrOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2YTExY2IgLTEwJSwgIzI1NzVmYyAxMDAlKTtcbiRyZWQ6IHJnYigyNTUsIDEwMSwgMTMyKTsgXG4kZ3JlZW46IHJnYig1NiwgMjExLCAxNTkpOyJdfQ== */");

/***/ }),

/***/ "./src/app/home/slider/slider.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/slider/slider.component.ts ***!
  \*************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let SliderComponent = class SliderComponent {
    constructor(router, modalService) {
        this.router = router;
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    onNavigate() {
        this.router.navigateByUrl('order');
    }
    openModal() {
        // this,this.modalService.open(); 
    }
};
SliderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/slider.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider.component.scss */ "./src/app/home/slider/slider.component.scss")).default]
    })
], SliderComponent);



/***/ }),

/***/ "./src/app/order/order.component.scss":
/*!********************************************!*\
  !*** ./src/app/order/order.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderComponent = class OrderComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.scss */ "./src/app/order/order.component.scss")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/our-services/our-services.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/our-services/our-services.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".services__content__title {\n  text-align: center;\n}\n.services__content__title h4 {\n  font-size: 2.25rem;\n  color: #677897;\n}\n.services__content__title p {\n  font-size: 1rem;\n  color: #263F57;\n}\n.services__content__box__text {\n  border-bottom: 1px solid #263F57;\n  margin-top: 6rem;\n}\n.services__content__box__text h4 {\n  color: #FFFFFF;\n}\n.services__content__box__text p {\n  color: #677897;\n  margin-bottom: 2rem;\n}\n.services__content__box__text__details h4 {\n  font-size: 1rem;\n}\n.services__content__box__text__details__description div {\n  width: 95%;\n}\n.services__content__box__text__details__description div p {\n  font-size: 0.875rem;\n}\n.services__content__box__image {\n  -webkit-box-align: center;\n          align-items: center;\n}\n.services__content__box__image:not(:last-child) {\n  border-bottom: 1px solid #263F57;\n}\n@media (max-width: 767px) {\n  .services__content__box__image {\n    border: none !important;\n  }\n}\n.services__content__box__image img {\n  margin-top: 4rem;\n  width: 80%;\n  height: 100%;\n}\n@media (max-width: 767px) {\n  .services__content__box__image img {\n    display: none;\n  }\n}\n.services__content__order {\n  text-align: center;\n}\n.services__content__order__title h4 {\n  font-size: 2.25rem;\n  color: #FFFFFF;\n  border-bottom: 1px solid #FFFFFF;\n  padding-bottom: 1.5rem;\n  text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);\n  letter-spacing: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC93ZWJ1a28tYXBwL3dlYnVrby9zcmMvYXBwL291ci1zZXJ2aWNlcy9vdXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL291ci1zZXJ2aWNlcy9vdXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9veHltb25zdGVyL0Rlc2t0b3Avd2VidWtvLWFwcC93ZWJ1a28vc3JjL2Fzc2V0cy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLUTtFQUNJLGtCQUFBO0FDSlo7QURLWTtFQUNJLGtCQUFBO0VBQ0EsY0VISDtBREFiO0FES1k7RUFDSSxlQUFBO0VBQ0EsY0VOSjtBREdaO0FEVVk7RUFFSSxnQ0FBQTtFQUVBLGdCQUFBO0FDVmhCO0FEV2dCO0VBQ0ksY0V2Qlo7QURjUjtBRFdnQjtFQUNJLGNFdkJQO0VGd0JPLG1CQUFBO0FDVHBCO0FEYW9CO0VBQ0ksZUFBQTtBQ1h4QjtBRGN3QjtFQUNJLFVBQUE7QUNaNUI7QURhNEI7RUFDSSxtQkFBQTtBQ1hoQztBRGtCWTtFQUNJLHlCQUFBO1VBQUEsbUJBQUE7QUNoQmhCO0FEaUJnQjtFQUNJLGdDQUFBO0FDZnBCO0FEa0JnQjtFQU5KO0lBT1EsdUJBQUE7RUNmbEI7QUFDRjtBRGlCZ0I7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDZnBCO0FEZ0JvQjtFQUpKO0lBS1EsYUFBQTtFQ2J0QjtBQUNGO0FEa0JRO0VBQ0ksa0JBQUE7QUNoQlo7QURrQmdCO0VBQ0ksa0JBQUE7RUFDQSxjRXZFWjtFRndFWSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBQ2hCcEIiLCJmaWxlIjoic3JjL2FwcC9vdXItc2VydmljZXMvb3VyLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3ZhcmlhYmxlcy5zY3NzJzsgXG5cbi5zZXJ2aWNlcyB7XG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb29sLWdyZXk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19ib3gge1xuICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgICAmX190ZXh0IHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29vbC1ncmV5O1xuXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJl9fZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2ltYWdlIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29vbC1ncmV5O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX29yZGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICZfX3RpdGxle1xuICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4zcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufSIsIi5zZXJ2aWNlc19fY29udGVudF9fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VydmljZXNfX2NvbnRlbnRfX3RpdGxlIGg0IHtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xuICBjb2xvcjogIzY3Nzg5Nztcbn1cbi5zZXJ2aWNlc19fY29udGVudF9fdGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMyNjNGNTc7XG59XG4uc2VydmljZXNfX2NvbnRlbnRfX2JveF9fdGV4dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjYzRjU3O1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuLnNlcnZpY2VzX19jb250ZW50X19ib3hfX3RleHQgaDQge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5zZXJ2aWNlc19fY29udGVudF9fYm94X190ZXh0IHAge1xuICBjb2xvcjogIzY3Nzg5NztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5zZXJ2aWNlc19fY29udGVudF9fYm94X190ZXh0X19kZXRhaWxzIGg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnNlcnZpY2VzX19jb250ZW50X19ib3hfX3RleHRfX2RldGFpbHNfX2Rlc2NyaXB0aW9uIGRpdiB7XG4gIHdpZHRoOiA5NSU7XG59XG4uc2VydmljZXNfX2NvbnRlbnRfX2JveF9fdGV4dF9fZGV0YWlsc19fZGVzY3JpcHRpb24gZGl2IHAge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLnNlcnZpY2VzX19jb250ZW50X19ib3hfX2ltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZXJ2aWNlc19fY29udGVudF9fYm94X19pbWFnZTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNjNGNTc7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNlcnZpY2VzX19jb250ZW50X19ib3hfX2ltYWdlIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnNlcnZpY2VzX19jb250ZW50X19ib3hfX2ltYWdlIGltZyB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2VydmljZXNfX2NvbnRlbnRfX2JveF9faW1hZ2UgaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc2VydmljZXNfX2NvbnRlbnRfX29yZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlcnZpY2VzX19jb250ZW50X19vcmRlcl9fdGl0bGUgaDQge1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRkZGRjtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgdGV4dC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG59IiwiXG4vLyAgKiAqICogIENvbG9ycyAqICogKiAgXG4kZ3JleTogIzc4ODdBNzsgXG4kd2hpdGU6ICNGRkZGRkY7IFxuJG1haW4tYmxhY2s6ICMxMDIxMzE7IFxuJGRhcmstZ3JleTogIzI3NDA1ODsgXG4kbGlnaHQtZ3JleTogIzY3Nzg5NzsgXG4kY29vbC1ncmV5OiAjMjYzRjU3OyBcbiRsaW5lYXItZGFyazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmExMWNiIC0xMCUsICMyNTc1ZmMgMTAwJSk7XG4kcmVkOiByZ2IoMjU1LCAxMDEsIDEzMik7IFxuJGdyZWVuOiByZ2IoNTYsIDIxMSwgMTU5KTsiXX0= */");

/***/ }),

/***/ "./src/app/our-services/our-services.component.ts":
/*!********************************************************!*\
  !*** ./src/app/our-services/our-services.component.ts ***!
  \********************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let OurServicesComponent = class OurServicesComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onNavigate() {
        this.router.navigateByUrl('/contact');
    }
};
OurServicesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OurServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/our-services/our-services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./our-services.component.scss */ "./src/app/our-services/our-services.component.scss")).default]
    })
], OurServicesComponent);



/***/ }),

/***/ "./src/app/our-services/our-services.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/our-services/our-services.module.ts ***!
  \*****************************************************/
/*! exports provided: OurServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesModule", function() { return OurServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _our_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-services.component */ "./src/app/our-services/our-services.component.ts");




let OurServicesModule = class OurServicesModule {
};
OurServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _our_services_component__WEBPACK_IMPORTED_MODULE_3__["OurServicesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], OurServicesModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: HttpLoaderFactory, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/top-navigation/top-navigation.component */ "./src/app/components/top-navigation/top-navigation.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contact/contact.module */ "./src/app/contact/contact.module.ts");













function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
const COMPONENTS = [
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
    _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_4__["TopNavigationComponent"],
    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"]
];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_4__["TopNavigationComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"],
            _contact_contact_module__WEBPACK_IMPORTED_MODULE_12__["ContactModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                }
            })
        ],
        exports: [COMPONENTS]
    })
], SharedModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/oxymonster/Desktop/webuko-app/webuko/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /home/oxymonster/Desktop/webuko-app/webuko/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
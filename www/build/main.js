webpackJsonp([11],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcursodetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConcursodetPage = (function () {
    function ConcursodetPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.diaConcurso = "VIERNES";
        this.detalleConcurso = this.navParams.get("concurso");
        console.log(this.detalleConcurso);
        this.http.post("http://sistemas.anahuac.mx/apreuapi/api/PIBA/getConcursos", {
            id_concurso: this.detalleConcurso.id,
            dia: 'viernes'
        })
            .subscribe(function (data) {
            _this.concursoFecha = data;
            console.log(_this.concursoFecha);
        });
    }
    ConcursodetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConcursodetPage');
    };
    ConcursodetPage.prototype.irAConcurso = function (event, dia) {
        var _this = this;
        this.http.post("http://sistemas.anahuac.mx/apreuapi/api/PIBA/getConcursos", {
            id_concurso: this.detalleConcurso.id,
            dia: dia
        })
            .subscribe(function (data) {
            _this.concursoFecha = data;
            console.log(_this.concursoFecha);
        });
    };
    ConcursodetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-concursodet',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/concursodet/concursodet.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CONCURSOS</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{detalleConcurso.concurso}}\n      </ion-card-title>\n\n      <div padding>\n        <ion-segment [(ngModel)]="diaConcurso">\n          <ion-segment-button (click)="irAConcurso($event,\'viernes\')" value="VIERNES">\n            VIERNES\n          </ion-segment-button>\n\n          <ion-segment-button (click)="irAConcurso($event,\'sabado\')" value="SABADO">\n            SÁBADO\n          </ion-segment-button>\n\n          <ion-segment-button (click)="irAConcurso($event,\'domingo\')" value="DOMINGO">\n            DOMINGO\n          </ion-segment-button>\n\n        </ion-segment>\n      </div>\n\n      <div>\n        <ion-list>\n          <ion-item *ngFor="let dia of concursoFecha">\n            <p>HORARIO: {{dia.horario}}</p>\n\n            <p>LUGAR: {{dia.ubicacion}}</p>\n\n          </ion-item>\n\n        </ion-list>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/concursodet/concursodet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ConcursodetPage);
    return ConcursodetPage;
}());

//# sourceMappingURL=concursodet.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergenciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmergenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmergenciasPage = (function () {
    function EmergenciasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmergenciasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmergenciasPage');
    };
    EmergenciasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emergencias',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/emergencias/emergencias.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Datos de Emergencia</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <ion-card>\n\n\n\n    <img src="assets/icon/emerg.jpg" />\n    <ion-card-content>\n      <ion-card-title>\n        Datos de contacto en caso de emergencia:\n      </ion-card-title>\n\n\n      <ion-item-group>\n        <ion-item-divider color="light">\n          <ion-thumbnail item-start>\n            <img src="assets/icon/ambulancia.png">\n          </ion-thumbnail>Atención Preuniversitaria\n         \n        </ion-item-divider>\n        <p><br><i class="ion-ios7-upload-outline" ng-click="emailContactDetails()"> <ion-img width="30" height="30" src="assets/icon/mail.png"></ion-img> daniela.restrepo@anahuac.mx</i> \n        \n        <br>\n        <br><ion-img width="30" height="30" src="assets/icon/anahuac.png"></ion-img>(55) 5627-0210 ext. 8408, caseta anahuac\n        <br><ion-img width="30" height="30" src="assets/icon/informe.png"></ion-img>(55) 56270-210 ext. 8900, informes\n        <br><ion-img width="30" height="30" src="assets/icon/salud.png"></ion-img>3605-1439 cruz roja\n\n        <br>        <ion-img width="40" height="40" src="assets/icon/police.png"></ion-img>8284-0463 seguridad pública</p>\n        \n       <br>\n      </ion-item-group>\n\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/emergencias/emergencias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EmergenciasPage);
    return EmergenciasPage;
}());

//# sourceMappingURL=emergencias.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadodetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultadodetPage = (function () {
    function ResultadodetPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.diaConcurso = "VIERNES";
        this.detalleConcurso = this.navParams.get("concurso");
        console.log(this.detalleConcurso);
        this.http.post("http://sistemas.anahuac.mx/apreuapi/api/PIBA/getResultados", {
            id_concurso: this.detalleConcurso.id,
            dia: 'viernes'
        })
            .subscribe(function (data) {
            _this.concursoFecha = data;
            console.log(_this.concursoFecha);
        });
    }
    ResultadodetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConcursodetPage');
    };
    ResultadodetPage.prototype.irAConcurso = function (event, dia) {
        var _this = this;
        this.http.post("http://sistemas.anahuac.mx/apreuapi/api/PIBA/getResultados", {
            id_concurso: this.detalleConcurso.id,
            dia: dia
        })
            .subscribe(function (data) {
            _this.concursoFecha = data;
            console.log(_this.concursoFecha);
        });
    };
    ResultadodetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultadodet',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/resultadodet/resultadodet.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>RESULTADOS</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{detalleConcurso.concurso}}\n      </ion-card-title>\n\n      <div padding>\n        <ion-segment [(ngModel)]="diaConcurso">\n          <ion-segment-button (click)="irAConcurso($event,\'viernes\')" value="VIERNES">\n            VIERNES\n          </ion-segment-button>\n\n          <ion-segment-button (click)="irAConcurso($event,\'sabado\')" value="SABADO">\n            SÁBADO\n          </ion-segment-button>\n\n          <ion-segment-button (click)="irAConcurso($event,\'domingo\')" value="DOMINGO">\n            DOMINGO\n          </ion-segment-button>\n\n        </ion-segment>\n      </div>\n\n      <div>\n        <ion-list>\n          <ion-item *ngFor="let dia of concursoFecha">\n            <p>Colegio: {{dia.colegio}}</p>\n\n            <p>Nombre: {{dia.nombre}}</p>\n\n            <p>Resultado: {{dia.resultado1}}</p>\n\n          </ion-item>\n\n        </ion-list>\n      </div>'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/resultadodet/resultadodet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ResultadodetPage);
    return ResultadodetPage;
}());

//# sourceMappingURL=resultadodet.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		296,
		0
	],
	"../pages/anahuac/anahuac.module": [
		297,
		10
	],
	"../pages/concursodet/concursodet.module": [
		298,
		9
	],
	"../pages/emergencias/emergencias.module": [
		299,
		8
	],
	"../pages/login/login.module": [
		300,
		7
	],
	"../pages/mapa/mapa.module": [
		301,
		6
	],
	"../pages/mistica/mistica.module": [
		302,
		5
	],
	"../pages/resultadodet/resultadodet.module": [
		303,
		4
	],
	"../pages/roboticacon/roboticacon.module": [
		304,
		3
	],
	"../pages/roboticares/roboticares.module": [
		305,
		2
	],
	"../pages/testov/testov.module": [
		306,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_concursos_concursos__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_testov_testov__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_resultadodet_resultadodet__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mapa_mapa__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_roboticares_roboticares__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_roboticacon_roboticacon__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_resultados_resultados__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_anahuac_anahuac__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_mistica_mistica__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_concursodet_concursodet__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_emergencias_emergencias__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_modal_login_component__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_concursos_concursos__["a" /* ConcursosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_roboticares_roboticares__["a" /* RoboticaresPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_resultados_resultados__["a" /* ResultadosPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_login_modal_login_component__["a" /* ModalLoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_anahuac_anahuac__["a" /* AnahuacPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mistica_mistica__["a" /* MisticaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_testov_testov__["a" /* TestovPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_concursodet_concursodet__["a" /* ConcursodetPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_emergencias_emergencias__["a" /* EmergenciasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_resultadodet_resultadodet__["a" /* ResultadodetPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_roboticacon_roboticacon__["a" /* RoboticaconPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anahuac/anahuac.module#AnahuacPageModule', name: 'AnahuacPage', segment: 'anahuac', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/concursodet/concursodet.module#ConcursodetPageModule', name: 'ConcursodetPage', segment: 'concursodet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emergencias/emergencias.module#EmergenciasPageModule', name: 'EmergenciasPage', segment: 'emergencias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mistica/mistica.module#MisticaPageModule', name: 'MisticaPage', segment: 'mistica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultadodet/resultadodet.module#ResultadodetPageModule', name: 'ResultadodetPage', segment: 'resultadodet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roboticacon/roboticacon.module#RoboticaconPageModule', name: 'RoboticaconPage', segment: 'roboticacon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roboticares/roboticares.module#RoboticaresPageModule', name: 'RoboticaresPage', segment: 'roboticares', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testov/testov.module#TestovPageModule', name: 'TestovPage', segment: 'testov', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_concursos_concursos__["a" /* ConcursosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_roboticares_roboticares__["a" /* RoboticaresPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_resultados_resultados__["a" /* ResultadosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_resultadodet_resultadodet__["a" /* ResultadodetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_login_modal_login_component__["a" /* ModalLoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_anahuac_anahuac__["a" /* AnahuacPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mistica_mistica__["a" /* MisticaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_testov_testov__["a" /* TestovPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_concursodet_concursodet__["a" /* ConcursodetPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_emergencias_emergencias__["a" /* EmergenciasPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_roboticacon_roboticacon__["a" /* RoboticaconPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["b" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_concursos_concursos__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_testov_testov__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mapa_mapa__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_roboticares_roboticares__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_roboticacon_roboticacon__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_resultados_resultados__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_anahuac_anahuac__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mistica_mistica__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_emergencias_emergencias__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, sessionService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.sessionService = sessionService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.showSubmenuC = false;
        this.showSubmenuR = false;
        this.isLoggedIn = false;
        this.initializeApp();
        this.isLoggedIn = this.sessionService.isLoggedIn();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], margin: '10px', icono: 'home' },
            { title: 'Horarios', component: __WEBPACK_IMPORTED_MODULE_6__pages_concursos_concursos__["a" /* ConcursosPage */], margin: '10px', icono: 'flask' },
            { title: 'Robótica', component: __WEBPACK_IMPORTED_MODULE_9__pages_roboticares_roboticares__["a" /* RoboticaresPage */], margin: '20px', icono: 'cog' },
            { title: 'Resultados', component: __WEBPACK_IMPORTED_MODULE_11__pages_resultados_resultados__["a" /* ResultadosPage */], margin: '10px', icono: 'trophy' },
            { title: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_8__pages_mapa_mapa__["a" /* MapaPage */], margin: '10px', icono: 'map' },
            { title: 'Mística', component: __WEBPACK_IMPORTED_MODULE_13__pages_mistica_mistica__["a" /* MisticaPage */], margin: '10px', icono: 'flower' },
            { title: 'Anáhuac', component: __WEBPACK_IMPORTED_MODULE_12__pages_anahuac_anahuac__["a" /* AnahuacPage */], margin: '10px', icono: 'infinite' },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], margin: '10px', icono: 'lock' },
            { title: 'Test OV', component: __WEBPACK_IMPORTED_MODULE_7__pages_testov_testov__["a" /* TestovPage */], margin: '10px', icono: 'flask' },
            { title: 'Emergencias', component: __WEBPACK_IMPORTED_MODULE_14__pages_emergencias_emergencias__["a" /* EmergenciasPage */], margin: '10px', icono: 'flask' },
            { title: 'Robótica_', component: __WEBPACK_IMPORTED_MODULE_10__pages_roboticacon_roboticacon__["a" /* RoboticaconPage */], margin: '10px', icono: 'cog' }
        ];
    }
    /*this.firebase.getToken()
      .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));
  
    this.firebase.onTokenRefresh()
      .subscribe((token: string) => console.log(`Got a new token ${token}`));*/
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(this.pages[page].component);
    };
    MyApp.prototype.menuConcursosHandler = function () {
        this.showSubmenuC = !this.showSubmenuC;
    };
    MyApp.prototype.menuResultadosHandler = function () {
        this.showSubmenuR = !this.showSubmenuR;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/macbookpro/piba/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list id="sidenav">\n      <!--<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" [style.padding-left]="p.margin">\n        <ion-icon [name]="p.icono"></ion-icon>\n        {{p.title}}\n      </button>-->\n\n      <ion-item menuClose (click)="openPage(0)">\n        <ion-avatar item-start>\n          <img src="assets/icon/icon1.png">\n        </ion-avatar>\n        Inicio\n      </ion-item>\n      <ion-item *ngIf="isLoggedIn" (click)="menuConcursosHandler()">\n        <ion-avatar item-start>\n          <img src="assets/icon/icon2.png">\n        </ion-avatar>Concursos</ion-item>\n      <ion-item-group *ngIf="isLoggedIn" submenu [class.visible]="showSubmenuC">\n        <ion-item menuClose submenu-item (click)="openPage(1)">Todos</ion-item>\n        <ion-item menuClose submenu-item (click)="openPage(10)">Robótica</ion-item>\n      </ion-item-group>\n      <ion-item *ngIf="isLoggedIn" (click)="menuResultadosHandler()">\n        <ion-avatar item-start>\n          <img src="assets/icon/icon3.png">\n        </ion-avatar>Resultados</ion-item>\n      <ion-item-group *ngIf="isLoggedIn" submenu [class.visible]="showSubmenuR">\n        <ion-item menuClose submenu-item (click)="openPage(3)">Todos</ion-item>\n        <ion-item menuClose submenu-item (click)="openPage(2)">Robótica</ion-item>\n      </ion-item-group>\n      <ion-item *ngIf="isLoggedIn" menuClose (click)="openPage(4)">\n        <ion-avatar item-start>\n          <img src="assets/icon/icon4.png">\n        </ion-avatar>\n        Mapa\n      </ion-item>\n      <ion-item menuClose (click)="openPage(5)">\n        <ion-avatar item-start>\n          <img src="assets/icon/icon5.png">\n        </ion-avatar>Mística</ion-item>\n      <ion-item menuClose (click)="openPage(6)">\n        <ion-avatar item-start>\n          <img src="assets/icon/icon6.png">\n        </ion-avatar>Anáhuac</ion-item>\n      <ion-item menuClose (click)="openPage(8)">\n        <ion-avatar item-start>\n          <img src="assets/icon/icon2.png">\n        </ion-avatar>Test OV</ion-item>\n      <ion-item menuClose (click)="openPage(9)">\n        <ion-avatar item-start>\n          <img src="assets/icon/icon3.png">\n        </ion-avatar>Emergencias</ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/macbookpro/piba/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* SessionService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalLoginPage = (function () {
    function ModalLoginPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    ModalLoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'modal-login',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/login/modal-login.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Registro\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Ok</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <h1>Gracias por registrarte</h1>\n  </ion-content>\n  '/*ion-inline-end:"/Users/macbookpro/piba/src/pages/login/modal-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalLoginPage);
    return ModalLoginPage;
}());

//# sourceMappingURL=modal-login.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnahuacPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AnahuacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnahuacPage = (function () {
    function AnahuacPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pet = "1";
    }
    AnahuacPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnahuacPage');
    };
    AnahuacPage.prototype.navigate = function (page) {
        window.open(page, '_system');
    };
    AnahuacPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anahuac',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/anahuac/anahuac.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Anáhuac</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-card>\n  <ion-card-content>\n    <ion-card-title>\n    Información Anáhuac\n      </ion-card-title>\n  \n<ion-card>\n  \n    <ion-card-header>\n        Oferta Académica\n      </ion-card-header>\n  <img src="assets/imgs/anahuac.jpg"/>\n  <ion-card-content>\n    \n    <p>\n        Nuestra nueva estructura ofrece una sólida formación humana y en estudios generales además de la adquisición de los conocimientos y competencias de cada profesión\n    </p>\n    <button ion-button full color="elmo" (click)="navigate(\'https://www.anahuac.mx/rua/licenciaturas\')">VER OFERTA ACADÉMICA</button>\n   \n  </ion-card-content>\n</ion-card>\n<ion-card>\n  \n  \n\n  <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/check.png">\n      </ion-thumbnail>\n      <h2>  Proceso de Admisión</h2>\n    </ion-item>\n  <ion-card-content>\n    \n      <div padding>\n          <h3>PASOS: </h3>\n          <ion-segment [(ngModel)]="pet">\n            <ion-segment-button value="1">\n                <img src="assets/imgs/uno.png">\n            </ion-segment-button>\n            <ion-segment-button value="2">\n                <img src="assets/imgs/dos.png">\n            </ion-segment-button>\n            <ion-segment-button value="3">\n                <img src="assets/imgs/tres.png">\n              </ion-segment-button>\n              <ion-segment-button value="4">\n                  <img src="assets/imgs/cuatro.png">\n                 </ion-segment-button>\n                 <ion-segment-button value="5">\n                    <img src="assets/imgs/cinco.png">\n                   </ion-segment-button>\n          </ion-segment>\n        </div>\n        \n        <div [ngSwitch]="pet">\n       \n        \n          <ion-list *ngSwitchCase="\'1\'">\n            <p>Documentos para examen de admisión: Solicitud de admisión, copia de acta de nacimiento, certificado de preparatoria, recibo de teléfono, 4 fotos infantiles, pago de examen. </p>\n          </ion-list>\n          <ion-list *ngSwitchCase="\'2\'">\n              <p>Elige una fecha de examen<br>\n\n<button ion-button full color="elmo" (click)="navigate(\'https://www.anahuac.mx/mexico/preuniversitarios/fechas-de-examen-de-admision/\')">FECHAS PARA CAMPUS NORTE</button>  \n<button ion-button full color="elmo" (click)="navigate(\'http://ww2.anahuac.mx/foraneos/preuniversitarios/#ciudad\')">FECHAS EN TU CIUDAD</button>\n               \n              </p>\n            </ion-list>\n            <ion-list *ngSwitchCase="\'3\'">\n              <p>Acudir al departamento de admisiones y entregar documentación e inscribirse al examen. (Costo del Exámen $1,300)</p>\n              </ion-list>\n              <ion-list *ngSwitchCase="\'4\'">\n                  <p>Asiste con puntualidad en la fecha y la hora señaladas. No olvides tu credencial provisional para ingresar a la Universidad, el examen consta de tres días de pruebas; College Board, Examen de orientación vocacional y clasificación, Entrevista</p>\n                </ion-list>\n\n                <ion-list *ngSwitchCase="\'5\'">\n                    <p>\n                 \n                        Consulta la página de fechas de examen de admisión en la que podrás recoger tus resultados.\n\n                        Los alumnos que hayan aplicado para la carrera de Médico Cirujano deberán hacer el Curso Propedéutico para completar el proceso de admisión.\n                    </p>\n                \n                </ion-list>\n        </div>\n        <button ion-button full color="elmo" (click)="navigate(\'https://www.anahuac.mx/mexico/preuniversitarios/wp-content/uploads/2016/05/SolicitudAdmisionAnahuac1.pdf\')">SOLICITUD DE ADMISIÓN</button>\n   \n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  \n    <ion-card-header>\n        BECAS Y CRÉDITO EDUCATIVO\n      </ion-card-header>\n  <img src="assets/imgs/becas.jpg"/>\n  <ion-card-content>\n    \n    <p align="justify">\n        Conforme a su misión educativa, la Universidad Anáhuac apoya a estudiantes con capacidad para desarrollar el perfil de excelencia humana y profesional, sin que el factor económico sea un impedimento para lograrlo.\n   </p>\n    <button ion-button full color="elmo" (click)="navigate(\'http://pegaso.anahuac.mx/contenidos/archivos/solicitud_beca.pdf\')">SOLICITUD DE BECA</button>\n    <button ion-button full color="elmoscuro" (click)="navigate(\'https://www.anahuac.mx/mexico/preuniversitarios/becas/\')">MÁS INFORMACIÓN</button>\n   \n  </ion-card-content>\n</ion-card>\n\n  \n  </ion-card-content>\n</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/anahuac/anahuac.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AnahuacPage);
    return AnahuacPage;
}());

//# sourceMappingURL=anahuac.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http, modalCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.colegios = [
            "Academia Maddox",
            "Alpes San Javier",
            "Alpes y Cumbres Guadalajara",
            "Andes Caracas",
            "Andes Culiacán",
            "Andes Los Mochis",
            "Andes Mazatlán",
            "Andes Puebla",
            "Andes Tuxtla",
            "Andes y Del Bosque San Luis",
            "Apostólica de Guadalajara",
            "Apostólica de Monterrey",
            "Apostólica León",
            "Bachillerato Anáhuac Xalapa",
            "CALP de Ensenada",
            "CECVAC",
            "CEICO Orizaba",
            "Cervino de Guaymas",
            "CEYCA Bachillerato",
            "Cumbres Bogotá",
            "Cumbres Campeche",
            "Cumbres Cancún",
            "Cumbres Chetumal",
            "Cumbres Cozumel",
            "Cumbres Cuernavaca",
            "Cumbres Del Bosque León",
            "Cumbres Durango",
            "Cumbres Irapuato",
            "Cumbres Lomas",
            "Cumbres Medellín",
            "Cumbres México",
            "Cumbres Monclova",
            "Cumbres Morelia",
            "Cumbres Oaxaca",
            "Cumbres San Javier",
            "Cumbres Tapachula",
            "Cumbres Tijuana",
            "Cumbres Toluca",
            "Cumbres Veracruz",
            "Cumbres Villahermosa",
            "Cumbres y Alpes Aguascalientes",
            "Cumbres y Alpes Piedras Negras",
            "Cumbres y Alpes Querétaro",
            "Cumbres y Alpes Saltillo",
            "Cumbres y Alpes Torreón",
            "Cumbres y Godwin Mérida",
            "Del Bosque México",
            "Del Bosque Puebla",
            "Everest Chihuahua",
            "Everest Zacatecas",
            "Highlands Italia",
            "Highlands México",
            "Highlands San Salvador",
            "IEST Altamira",
            "IEST Valles",
            "Prepa Anáhuac",
            "Interamericano Guadalajara",
            "Irlandés Hermosillo",
            "Irlandés México Femenino",
            "Irlandés México Masculino",
            "Irlandés Monterrey",
            "Irlandés Nuevo Laredo",
            "Pinecrest Institute",
            "Rosedal México",
            "Everest Río de Janeiro"
        ];
        this.estados = [
            { codigo: "01", nombre: "AGUASCALIENTES" },
            { codigo: "02", nombre: "BAJA CALIFORNIA" },
            { codigo: "03", nombre: "BAJA CALIFORNIA SUR" },
            { codigo: "04", nombre: "CAMPECHE" },
            { codigo: "05", nombre: "COAHUILA DE ZARAGOZA" },
            { codigo: "06", nombre: "COLIMA" },
            { codigo: "07", nombre: "CHIAPAS" },
            { codigo: "08", nombre: "CHIHUAHUA" },
            { codigo: "09", nombre: "CIUDAD DE MÉXICO" },
            { codigo: "10", nombre: "DURANGO" },
            { codigo: "11", nombre: "GUANAJUATO" },
            { codigo: "12", nombre: "GUERRERO" },
            { codigo: "13", nombre: "HIDALGO" },
            { codigo: "14", nombre: "JALISCO" },
            { codigo: "15", nombre: "MÉXICO" },
            { codigo: "16", nombre: "MICHOACÁN DE OCAMPO" },
            { codigo: "17", nombre: "MORELOS" },
            { codigo: "18", nombre: "NAYARIT" },
            { codigo: "19", nombre: "NUEVO LEÓN" },
            { codigo: "20", nombre: "OAXACA" },
            { codigo: "21", nombre: "PUEBLA" },
            { codigo: "22", nombre: "QUERÉTARO" },
            { codigo: "23", nombre: "QUINTANA ROO" },
            { codigo: "24", nombre: "SAN LUIS POTOSÍ" },
            { codigo: "25", nombre: "SINALOA" },
            { codigo: "26", nombre: "SONORA" },
            { codigo: "27", nombre: "TABASCO" },
            { codigo: "28", nombre: "TAMAULIPAS" },
            { codigo: "29", nombre: "TLAXCALA" },
            { codigo: "30", nombre: "VERACRUZ DE IGNACIO DE LA LLAVE" },
            { codigo: "31", nombre: "YUCATÁN" },
            { codigo: "32", nombre: "ZACATECAS" },
        ];
        this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registro = {
            Nombre: "",
            Apellido_Paterno: "",
            Apellido_Materno: "",
            Email: "",
            Celular: "",
            Tipo_Persona: 1,
            Estado: "",
            Ciudad: "",
            Colegio: "",
            Uuid: "",
        };
        this.http.get("http://sistemas.anahuac.mx/apreuapi/api/GetGuid").subscribe(function (data) {
            _this.uuid = data;
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.registrar = function () {
        var _this = this;
        if (!this.validar()) {
            this.showAlert();
            return false;
        }
        this.registro.Uuid = this.uuid;
        this.http.post('http://sistemas.anahuac.mx/apreuapi/api/PIBA/Registro', this.registro)
            .subscribe(function (data) {
            console.log(data);
            _this.resultado = data;
            window.localStorage.setItem('uuid', _this.uuid);
            window.localStorage.setItem('loggedIn', "true");
            _this.showConfirm();
        });
    };
    LoginPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Gracias por registrarte',
            message: 'Haz click en Genial para ir a la aplicación',
            buttons: [
                {
                    text: 'Cerrar',
                    handler: function () {
                        console.log('Disagree clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        window.location.reload();
                    }
                },
                {
                    text: 'Genial',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        window.location.reload();
                    }
                }
            ]
        });
        confirm.present();
    };
    LoginPage.prototype.validar = function () {
        if (this.registro.Nombre == "")
            return false;
        if (this.registro.Apellido_Paterno == "")
            return false;
        if (this.registro.Email == "" || !this.registro.Email.match(this.EMAIL_REGEXP))
            return false;
        if (this.registro.Tipo_Persona == 0)
            return false;
        if (this.registro.Colegio == "")
            return false;
        return true;
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Hacen falta datos',
            subTitle: 'Por favor ingresa los datos requeridos y correctos',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.buscarMunicipio = function (estado) {
        var _this = this;
        this.http.post("http://sistemas.anahuac.mx/apreuapi/api/GetMunicipios", { c_estado: estado }).subscribe(function (data) {
            _this.ciudades = data;
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrarse</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/imgs/splash.png\')">\n	<ion-list>\n		<ion-item>\n			<ion-label>Eres..</ion-label>\n			<ion-select [(ngModel)]="registro.Tipo_Persona">\n				<ion-option value="1">Alumno</ion-option>\n				<ion-option value="2">Profesor</ion-option>\n				<ion-option value="3">Padre de Familia</ion-option>\n				<ion-option value="4">Invitado</ion-option>\n			</ion-select>\n		</ion-item>\n\n		<ion-item [hidden]="registro.Tipo_Persona!=1">\n			<ion-label>Grado de Prepa</ion-label>\n			<ion-select [(ngModel)]="registro.Grado">\n				<ion-option value="1">Primer Semestre</ion-option>\n				<ion-option value="2">Segundo Semestre</ion-option>\n				<ion-option value="3">Tercer Semestre</ion-option>\n				<ion-option value="4">Cuarto Semestre</ion-option>\n				<ion-option value="5">Quinto Semestre</ion-option>\n				<ion-option value="6">Sexto Semestre</ion-option>\n			</ion-select>\n		</ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Nombre(s)</ion-label>\n	    <ion-input type="text" [(ngModel)]="registro.Nombre" required></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Apellido Paterno</ion-label>\n	    <ion-input type="text" [(ngModel)]="registro.Apellido_Paterno" required></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Apellido Materno</ion-label>\n	    <ion-input type="text" [(ngModel)]="registro.Apellido_Materno"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Email</ion-label>\n	    <ion-input type="email" [(ngModel)]="registro.Email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" [email]="true" required></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Celular</ion-label>\n	    <ion-input type="text" [(ngModel)]="registro.Celular"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Estado</ion-label>\n	    <ion-select [(ngModel)]="registro.Estado" (ngModelChange)="buscarMunicipio($event)" required>\n	      <ion-option *ngFor="let est of estados" [value]="est.codigo">{{est.nombre}}</ion-option>\n	    </ion-select>\n	  </ion-item>\n\n	  <ion-item [hidden]="registro.Estado==\'\'">\n	    <ion-label floating>Ciudad</ion-label>\n	    <ion-select [(ngModel)]="registro.Ciudad" required>\n	      <ion-option *ngFor="let ciudad of ciudades" [value]="ciudad.D_mnpio">{{ciudad.D_mnpio}}</ion-option>\n	    </ion-select>\n		</ion-item>\n		\n	  <ion-item>\n	    <ion-label floating>Colegio</ion-label>\n	    <ion-select [(ngModel)]="registro.Colegio" required>\n	      <ion-option *ngFor="let col of colegios" [value]="col">{{col}}</ion-option>\n	    </ion-select>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>He leído y estoy de acuerdo con el</ion-label>\n			<ion-checkbox color="dark" [(ngModel)]="aviso"></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<h3 style="text-align:center"><a href="https://www.anahuac.mx/mexico/Avisodeprivacidad/proteccion-de-datos-personales-campus-norte" target="_blank">aviso de privacidad</a>.</h3>\n		</ion-item>\n			\n\n	</ion-list>\n	<button ion-button block [disabled]="!aviso" type="submit" (click)="registrar()">Registrarse</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MisticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisticaPage = (function () {
    function MisticaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MisticaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MisticaPage');
    };
    MisticaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mistica',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/mistica/mistica.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mística</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n<ion-card>\n\n\n  \n    <img src="assets/icon/mistica.png"/>\n  <ion-card-content>\n    <ion-card-title>\n   Horarios de mística\n      </ion-card-title>\n   \n        \n            <ion-item-group>\n              <ion-item-divider color="light">  <ion-thumbnail item-start>\n                  <img src="assets/imgs/iglesia.png">\n                </ion-thumbnail>Evento PIBA<br>Celebración Eucarística<br>18:00 pm<br>jueves 3 de mayo<br>Explanada universitaria</ion-item-divider>\n            \n            </ion-item-group>\n         \n      \n\n<ion-card>\n\n  <img src="assets/imgs/igles.jpg"/>\n  <ion-card-content>\n    \n\n\n           <ion-item-group>\n                <ion-item-divider color="light">Celebración Eucarística<br>Lunes - Viernes<br>8:00 am <br>12:00 pm</ion-item-divider>\n              \n              </ion-item-group>\n   \n  </ion-card-content>\n</ion-card>  \n  </ion-card-content>\n</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/mistica/mistica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MisticaPage);
    return MisticaPage;
}());

//# sourceMappingURL=mistica.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestovPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TestovPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestovPage = (function () {
    function TestovPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestovPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestovPage');
    };
    TestovPage.prototype.navigate = function (page) {
        window.open(page, '_system');
    };
    TestovPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-testov',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/testov/testov.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Test OV</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n<ion-card>\n\n\n  \n    <img src="assets/icon/test.png"/>\n  <ion-card-content>\n    <ion-card-title>\n   Test de orientación vocacional\n      </ion-card-title>\n   \n         \n      \n\n<ion-card>\n\n  <img src="assets/imgs/testov.jpg"/>\n  <ion-card-content>\n    <p align="justify">Este es un test que,\n                   con base en tus intereses, aptitudes, \n                   gustos y habilidades, busca y se orienta a determinar la carrera que puedes \n                   estudiar y que mejor se adecúe a tu perfil.<br> ¿Estás listo para comenzar?</p>\n                <button ion-button full color="elmo" (click)="navigate(\'http://suas-emc2.anahuac.mx/testov/\')">COMENZAR TEST OV</button>\n              </ion-card-content>\n</ion-card>  \n  </ion-card-content>\n</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/testov/testov.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TestovPage);
    return TestovPage;
}());

//# sourceMappingURL=testov.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoboticaresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoboticaresPage = (function () {
    function RoboticaresPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.diaConcurso = "VIERNES";
        this.http.post("http://sistemas.anahuac.mx/apreuapi/api/PIBA/getResultados", {
            id_concurso: 16,
            dia: 'viernes'
        })
            .subscribe(function (data) {
            _this.concursoFecha = data;
            console.log(_this.concursoFecha);
        });
    }
    RoboticaresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoboticaresPage');
    };
    RoboticaresPage.prototype.irAConcurso = function (event, dia) {
        var _this = this;
        this.http.post("http://sistemas.anahuac.mx/apreuapi/api/PIBA/getResultados", {
            id_concurso: 16,
            dia: dia
        })
            .subscribe(function (data) {
            _this.concursoFecha = data;
            console.log(_this.concursoFecha);
        });
    };
    RoboticaresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roboticares',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/roboticares/roboticares.html"*/'<!--\n  Generated template for the RoboticaresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Resultados de Robótica</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n		<img src="assets/icon/robotica.jpg" />\n\n	</ion-card>\n\n	<ion-card>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/score.png">\n			</ion-avatar>\n			<ion-label>Selecciona un día:</ion-label>\n		</ion-item>\n	</ion-card>\n\n	<div padding>\n		<ion-segment [(ngModel)]="diaConcurso">\n			<ion-segment-button (click)="irAConcurso($event,\'viernes\')" value="VIERNES">\n				VIERNES\n			</ion-segment-button>\n\n			<ion-segment-button (click)="irAConcurso($event,\'sabado\')" value="SABADO">\n				SÁBADO\n			</ion-segment-button>\n\n\n\n			<ion-segment-button (click)="irAConcurso($event,\'domingo\')" value="DOMINGO">\n				DOMINGO\n			</ion-segment-button>\n\n		</ion-segment>\n	</div>\n\n	<div>\n		<ion-list>\n			<ion-item *ngFor="let dia of concursoFecha">\n				<p>Colegio: {{dia.colegio}}</p>\n\n				<p>Nombre: {{dia.nombre}}</p>\n\n				<p>Resultado: {{dia.resultado1}}</p>\n\n			</ion-item>\n\n		</ion-list>\n	</div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/roboticares/roboticares.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], RoboticaresPage);
    return RoboticaresPage;
}());

//# sourceMappingURL=roboticares.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoboticaconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoboticaconPage = (function () {
    function RoboticaconPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.diaConcurso = "VIERNES";
        this.http.post("http://sistemas.anahuac.mx/apreuapi/api/PIBA/getConcursos", {
            id_concurso: 16,
            dia: 'viernes'
        })
            .subscribe(function (data) {
            _this.concursoFecha = data;
            console.log(_this.concursoFecha);
        });
    }
    RoboticaconPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConcursodetPage');
    };
    RoboticaconPage.prototype.irAConcurso = function (event, dia) {
        var _this = this;
        this.http.post("http://sistemas.anahuac.mx/apreuapi/api/PIBA/getConcursos", {
            id_concurso: 16,
            dia: dia
        })
            .subscribe(function (data) {
            _this.concursoFecha = data;
            console.log(_this.concursoFecha);
        });
    };
    RoboticaconPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roboticacon',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/roboticacon/roboticacon.html"*/'<!--\n  Generated template for the RoboticaresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Horarios de Robótica</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="assets/icon/robotica.jpg" />\n\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/icon/robotica.png">\n      </ion-avatar>\n      <ion-label>Selecciona un día:</ion-label>\n    </ion-item>\n  </ion-card>\n\n  <div padding>\n    <ion-segment [(ngModel)]="diaConcurso">\n      <ion-segment-button (click)="irAConcurso($event,\'viernes\')" value="VIERNES">\n        VIERNES\n      </ion-segment-button>\n\n      <ion-segment-button (click)="irAConcurso($event,\'sabado\')" value="SABADO">\n        SÁBADO\n      </ion-segment-button>\n      <ion-segment-button (click)="irAConcurso($event,\'domingo\')" value="DOMINGO">\n        DOMINGO\n      </ion-segment-button>\n\n    </ion-segment>\n  </div>\n  <div>\n    <ion-list>\n      <ion-item *ngFor="let dia of concursoFecha">\n        <p>HORARIO: {{dia.horario}}</p>\n\n        <p>LUGAR: {{dia.ubicacion}}</p>\n\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/roboticacon/roboticacon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], RoboticaconPage);
    return RoboticaconPage;
}());

//# sourceMappingURL=roboticacon.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapaPage = (function () {
    function MapaPage(googleMaps, geolocation) {
        this.googleMaps = googleMaps;
        this.geolocation = geolocation;
        this.selectedConcurso = '';
        this.concursos = [
            { id_ubicacion: '02', concurso: 'Apóstoles del Siglo XXI' },
            { id_ubicacion: '03', concurso: 'Aprendiendo con la tecnología' },
            { id_ubicacion: '04', concurso: 'Baile y Coreografía' },
            { id_ubicacion: '06', concurso: 'Comunicación con Imaginación' },
            { id_ubicacion: '04', concurso: 'Conquistando Valores' },
            { id_ubicacion: '05', concurso: 'Crea tu propio negocio' },
            { id_ubicacion: '04', concurso: 'Interpretación y composición Musical' },
            { id_ubicacion: '08', concurso: 'Investigadores del nuevo milenio: ciencias exactas' },
        ];
        this.ubicaciones = [
            { id: '01', color: "#58002A", latitud: 19.4041307, longitud: -99.262905, titulo: "Diseño CAD", poligon: [{ lat: 19.404374, lng: -99.263065 }, { lat: 19.403786, lng: -99.263031 }, { lat: 19.403840, lng: -99.262146 }, { lat: 19.404314, lng: -99.262148 }, { lat: 19.404294, lng: -99.262349 }, { lat: 19.404410, lng: -99.262364 }] },
            { id: '02', color: "#3E0031", latitud: 19.403177, longitud: -99.261920, titulo: "007 Pedagogía", poligon: [{ lat: 19.403342, lng: -99.262221 }, { lat: 19.403216, lng: -99.262206 }, { lat: 19.403220, lng: -99.262133 }, { lat: 19.403126, lng: -99.262121 }, { lat: 19.403118, lng: -99.262206 }, { lat: 19.402992, lng: -99.262192 }, { lat: 19.403030, lng: -99.261653 }, { lat: 19.403147, lng: -99.261666 }, { lat: 19.403145, lng: -99.261727 }, { lat: 19.403256, lng: -99.261739 }, { lat: 19.403262, lng: -99.261668 }, { lat: 19.403383, lng: -99.261681 }] },
            { id: '03', color: "#43013B", latitud: 19.4027365, longitud: -99.2618577, titulo: "Auditorio Posgrado", poligon: [{ lat: 19.402629, lng: -99.261623 }, { lat: 19.402508, lng: -99.261482 }, { lat: 19.403117, lng: -99.260904 }, { lat: 19.403237, lng: -99.261043 }] },
            { id: '04', color: "#D90000", latitud: 19.402338, longitud: -99.262787, titulo: "Explanada", poligon: [{ lat: 19.402544, lng: -99.263018 }, { lat: 19.402017, lng: -99.262974 }, { lat: 19.402063, lng: -99.262456 }, { lat: 19.402568, lng: -99.262530 }] },
            { id: '05', color: "#FF2D00", latitud: 19.402265, longitud: -99.263468, titulo: "Biblioteca", poligon: [{ lat: 19.402489, lng: -99.263867 }, { lat: 19.401968, lng: -99.263833 }, { lat: 19.402016, lng: -99.263097 }, { lat: 19.402529, lng: -99.263133 }] },
            { id: '06', color: "#AE6187", latitud: 19.4041307, longitud: -99.262905, titulo: "Sala didáctica CAD 2", poligon: [{ lat: 19.404374, lng: -99.263065 }, { lat: 19.403786, lng: -99.263031 }, { lat: 19.403840, lng: -99.262146 }, { lat: 19.404314, lng: -99.262148 }, { lat: 19.404294, lng: -99.262349 }, { lat: 19.404410, lng: -99.262364 }] },
            { id: '07', color: "#FE679A", latitud: 19.403074, longitud: -99.261056, titulo: "Ejecutivos A y B Posgrado", poligon: [{ lat: 19.402629, lng: -99.261623 }, { lat: 19.402508, lng: -99.261482 }, { lat: 19.403117, lng: -99.260904 }, { lat: 19.403237, lng: -99.261043 }] },
            { id: '08', color: "#806584", latitud: 19.401723, longitud: -99.262028, titulo: "Auditorio Pastoral", poligon: [{ lat: 19.401700, lng: -99.262199 }, { lat: 19.401559, lng: -99.262013 }, { lat: 19.401728, lng: -99.261864 }, { lat: 19.401877, lng: -99.262060 }] },
            { id: '09', color: "#FFCADA", latitud: 19.402867, longitud: -99.262687, titulo: "Auditorio Rectoría", poligon: [{ lat: 19.403042, lng: -99.262903 }, { lat: 19.402757, lng: -99.262887 }, { lat: 19.402771, lng: -99.262518 }, { lat: 19.403061, lng: -99.262531 }] },
            { id: '10', color: "#3B2437", latitud: 19.4041307, longitud: -99.262905, titulo: "Auditorio CAD", poligon: [{ lat: 19.404374, lng: -99.263065 }, { lat: 19.403786, lng: -99.263031 }, { lat: 19.403840, lng: -99.262146 }, { lat: 19.404314, lng: -99.262148 }, { lat: 19.404294, lng: -99.262349 }, { lat: 19.404410, lng: -99.262364 }] },
            { id: '11', color: "#700114", latitud: 19.4041307, longitud: -99.262905, titulo: "Estudio TV CAD", poligon: [{ lat: 19.404374, lng: -99.263065 }, { lat: 19.403786, lng: -99.263031 }, { lat: 19.403840, lng: -99.262146 }, { lat: 19.404314, lng: -99.262148 }, { lat: 19.404294, lng: -99.262349 }, { lat: 19.404410, lng: -99.262364 }] },
            { id: '12', color: "#570023", latitud: 19.4041307, longitud: -99.262905, titulo: "Salón de exámenes CAD", poligon: [{ lat: 19.404374, lng: -99.263065 }, { lat: 19.403786, lng: -99.263031 }, { lat: 19.403840, lng: -99.262146 }, { lat: 19.404314, lng: -99.262148 }, { lat: 19.404294, lng: -99.262349 }, { lat: 19.404410, lng: -99.262364 }] },
            { id: '12', color: "#570023", latitud: 19.4041307, longitud: -99.262905, titulo: "Salón de exámenes CAD", poligon: [{ lat: 19.404374, lng: -99.263065 }, { lat: 19.403786, lng: -99.263031 }, { lat: 19.403840, lng: -99.262146 }, { lat: 19.404314, lng: -99.262148 }, { lat: 19.404294, lng: -99.262349 }, { lat: 19.404410, lng: -99.262364 }] },
        ];
    }
    MapaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        this.geolocation.getCurrentPosition(options).then(function (resp) {
            _this.loadMap();
        }).catch(function (error) {
            alert('Error getting location' + error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
        });
    };
    MapaPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 19.401796,
                    lng: -99.263548
                },
                zoom: 18
            },
            controls: {
                myLocationButton: true,
                compass: true,
            },
        };
        this.map = __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        this.map.one(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function (data) {
            _this.map.getMyLocation();
            _this.map.setMyLocationEnabled(true);
        });
    };
    MapaPage.prototype.verMapa = function (ev) {
        var _this = this;
        this.map.clear();
        var location = this.ubicaciones.find(function (x) { return x.id === _this.selectedConcurso; });
        this.map.addMarker({
            title: location.titulo,
            icon: 'orange',
            animation: 'DROP',
            position: {
                lat: location.latitud,
                lng: location.longitud
            }
        });
        this.map.addPolygon({
            points: location.poligon,
            strokeColor: location.color,
            strokeOpacity: 0,
            strokeWeight: 0.1,
            fillColor: location.color,
            fillOpacity: 0.5
        });
    };
    MapaPage.prototype.miUbicacion = function (lat, lng) {
        console.log("esta es mi ubicacion");
        this.map.addMarker({
            title: "",
            icon: 'orange',
            animation: 'DROP',
            position: {
                lat: lat,
                lng: lng
            }
        });
    };
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/mapa/mapa.html"*/'<!--\n  Generated template for the MapaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mapa de Concursos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label>Selecciona un concurso</ion-label>\n          <ion-select [(ngModel)]="selectedConcurso" (ngModelChange)="verMapa($event)">\n            <ion-option *ngFor="let concurso of concursos" [value]="concurso.id_ubicacion">{{concurso.concurso}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n	<div id="map_canvas"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/mapa/mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SessionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anahuac_anahuac__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mistica_mistica__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__concursos_concursos__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__testov_testov__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resultados_resultados__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__roboticares_roboticares__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__roboticacon_roboticacon__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mapa_mapa__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SessionService = (function () {
    function SessionService() {
        this.loggedIn = false;
        this.loggedIn = window.localStorage.getItem("loggedIn") == "true" ? true : false;
    }
    SessionService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    SessionService.prototype.setLoggedIn = function (isLoggedIn) {
        this.loggedIn = isLoggedIn;
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());

var HomePage = (function () {
    function HomePage(navCtrl, sessionService) {
        this.navCtrl = navCtrl;
        this.sessionService = sessionService;
        this.anahuacPage = __WEBPACK_IMPORTED_MODULE_3__anahuac_anahuac__["a" /* AnahuacPage */];
        this.misticaPage = __WEBPACK_IMPORTED_MODULE_4__mistica_mistica__["a" /* MisticaPage */];
        this.concursosPage = __WEBPACK_IMPORTED_MODULE_5__concursos_concursos__["a" /* ConcursosPage */];
        this.testovPage = __WEBPACK_IMPORTED_MODULE_6__testov_testov__["a" /* TestovPage */];
        this.resultadosPage = __WEBPACK_IMPORTED_MODULE_7__resultados_resultados__["a" /* ResultadosPage */];
        this.roboticaresPage = __WEBPACK_IMPORTED_MODULE_8__roboticares_roboticares__["a" /* RoboticaresPage */];
        this.roboticaconPage = __WEBPACK_IMPORTED_MODULE_9__roboticacon_roboticacon__["a" /* RoboticaconPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.mapaPage = __WEBPACK_IMPORTED_MODULE_10__mapa_mapa__["a" /* MapaPage */];
        this.isLoggedIn = this.sessionService.isLoggedIn();
        if (!this.isLoggedIn)
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    }
    HomePage.prototype.push = function (page) {
        this.navCtrl.push(page);
    };
    HomePage.prototype.navigate = function (page) {
        window.open(page, '_system');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inicio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-card>\n    <img src="assets/icon/anahuaclogo.jpg">\n  </ion-card>\n\n  <ion-card [navPush]="concursosPage" *ngIf="isLoggedIn">\n    <img src="assets/icon/cuadro5.jpg">\n  </ion-card>\n  <ion-card [navPush]="resultadosPage" *ngIf="isLoggedIn">\n    <img src="assets/icon/cuadro4.png">\n  </ion-card>\n  <ion-card [navPush]="mapaPage">\n    <img src="assets/icon/cuadro3.jpg" *ngIf="isLoggedIn">\n  </ion-card>\n  <ion-card [navPush]="misticaPage">\n    <img src="assets/icon/cuadro1.jpg">\n  </ion-card>\n  <ion-card [navPush]="anahuacPage">\n    <img src="assets/icon/cuadro2.png">\n  </ion-card>\n  <ion-card [navPush]="testovPage">\n    <img src="assets/icon/testov.png">\n  </ion-card>\n  <ion-card [navPush]="loginPage">\n    <img src="assets/icon/cuadro6.jpg" *ngIf="!isLoggedIn">\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2 offset-4>\n        <ion-card (click)="navigate(\'https://www.facebook.com/pibalat/\')">\n          <img src="assets/imgs/face.png">\n        </ion-card>\n      </ion-col>\n      <ion-col col-2>\n        <ion-card (click)="navigate(\'https://www.instagram.com/piba_lat/\')">\n          <img src="assets/imgs/insta.png">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/home/home.html"*/,
            providers: [SessionService]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], SessionService])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcursosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__concursodet_concursodet__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConcursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConcursosPage = (function () {
    function ConcursosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.concursos = [
            { id: 1, concurso: 'Apóstoles del Siglo XXI', color: this.getRandomColor(), icono: 'apostoles_siglo.png' },
            { id: 2, concurso: 'Aprendiendo con la Tecnología', color: this.getRandomColor(), icono: 'aprendiendo_2.png' },
            { id: 3, concurso: 'Baile y Coreografía', color: this.getRandomColor(), icono: 'baile_3.png' },
            { id: 4, concurso: 'Comunicación con Imaginación', color: this.getRandomColor(), icono: 'comu_4.png' },
            { id: 5, concurso: 'Conquistando Valores', color: this.getRandomColor(), icono: 'conquistando_5.png' },
            { id: 6, concurso: 'Crea tu Propio Negocio', color: this.getRandomColor(), icono: 'negocio_6.png' },
            { id: 7, concurso: 'Creación Literaria', color: this.getRandomColor(), icono: 'creacion_7.png' },
            { id: 8, concurso: 'Debate', color: this.getRandomColor(), icono: 'debate_8.png' },
            { id: 9, concurso: 'Declamación', color: this.getRandomColor(), icono: 'ss.png' },
            { id: 10, concurso: 'Interpretación y Composición Musical', color: this.getRandomColor(), icono: 'interpretacion_9.png' },
            { id: 11, concurso: 'Investigadores del Nuevo Milenio', color: this.getRandomColor(), icono: 'investigadores_10.png' },
            { id: 12, concurso: 'Líderes Hablan', color: this.getRandomColor(), icono: 'lideres11.png' },
            { id: 13, concurso: 'Líderes por la Trascendencia', color: this.getRandomColor(), icono: 'lideres_12.png' },
            { id: 14, concurso: 'Matemáticas', color: this.getRandomColor(), icono: 'matematicas_13.png' },
            { id: 15, concurso: 'Transcending Science', color: this.getRandomColor(), icono: 'trascending_14.png' }
        ];
    }
    ConcursosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConcursosPage');
    };
    ConcursosPage.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    ConcursosPage.prototype.irAConcurso = function (event, concurso) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__concursodet_concursodet__["a" /* ConcursodetPage */], {
            concurso: concurso
        });
    };
    ConcursosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-concursos',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/concursos/concursos.html"*/'<!--\n  Generated template for the ConcursosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Horarios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-grid>\n    <ion-row> \n        <ion-card>\n\n            <ion-item>\n                <ion-avatar item-start>\n                  <img src="assets/icon/inaguracion.png">\n                </ion-avatar>\n                <h2>Inauguración</h2>\n                \n              </ion-item>\n          <ion-card-content>\n            <p>19:00 - 20:00 Ceremonia de inaguración <br>20:30 - 22:30 Cena de directores</p>\n             </ion-card-content>\n          \n             <ion-item>\n                <ion-avatar item-start>\n                  <img src="assets/icon/clausura.png">\n                </ion-avatar>\n                <h2>Clausura</h2>\n                \n              </ion-item>\n          <ion-card-content>\n            <p>15:00 - 15:30 Ceremonia de clausura y premiación (Explanada)</p>\n             </ion-card-content>\n        </ion-card>\n  \n    </ion-row>\n	  <ion-row>\n	    <ion-col col-6 ion-item *ngFor="let c of concursos"> \n	    	<ion-card class="card-background-page" (click)="irAConcurso($event,c)">\n		    <img src="assets/imgs/{{c.icono}}"/>\n		    </ion-card>\n		</ion-col>\n	  </ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpro/piba/src/pages/concursos/concursos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConcursosPage);
    return ConcursosPage;
}());

//# sourceMappingURL=concursos.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultadodet_resultadodet__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadosPage = (function () {
    function ResultadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.concursos = [
            { id: 1, concurso: 'Apóstoles del Siglo XXI', color: this.getRandomColor(), icono: 'apostoles_siglo.png' },
            { id: 2, concurso: 'Aprendiendo con la Tecnología', color: this.getRandomColor(), icono: 'aprendiendo_2.png' },
            { id: 3, concurso: 'Baile y Coreografía', color: this.getRandomColor(), icono: 'baile_3.png' },
            { id: 4, concurso: 'Comunicación con Imaginación', color: this.getRandomColor(), icono: 'comu_4.png' },
            { id: 5, concurso: 'Conquistando Valores', color: this.getRandomColor(), icono: 'conquistando_5.png' },
            { id: 6, concurso: 'Crea tu Propio Negocio', color: this.getRandomColor(), icono: 'negocio_6.png' },
            { id: 7, concurso: 'Creación Literaria', color: this.getRandomColor(), icono: 'creacion_7.png' },
            { id: 8, concurso: 'Debate', color: this.getRandomColor(), icono: 'debate_8.png' },
            { id: 9, concurso: 'Declamación', color: this.getRandomColor(), icono: 'ss.png' },
            { id: 10, concurso: 'Interpretación y Composición Musical', color: this.getRandomColor(), icono: 'interpretacion_9.png' },
            { id: 11, concurso: 'Investigadores del Nuevo Milenio', color: this.getRandomColor(), icono: 'investigadores_10.png' },
            { id: 12, concurso: 'Líderes Hablan', color: this.getRandomColor(), icono: 'lideres11.png' },
            { id: 13, concurso: 'Líderes por la Trascendencia', color: this.getRandomColor(), icono: 'lideres_12.png' },
            { id: 14, concurso: 'Matemáticas', color: this.getRandomColor(), icono: 'matematicas_13.png' },
            { id: 15, concurso: 'Transcending Science', color: this.getRandomColor(), icono: 'trascending_14.png' }
        ];
    }
    ResultadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConcursosPage');
    };
    ResultadosPage.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    ResultadosPage.prototype.irAConcurso = function (event, concurso) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resultadodet_resultadodet__["a" /* ResultadodetPage */], {
            concurso: concurso
        });
    };
    ResultadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultados',template:/*ion-inline-start:"/Users/macbookpro/piba/src/pages/resultados/resultados.html"*/'<!--\n  Generated template for the ConcursosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n	  <button ion-button menuToggle>\n		<ion-icon name="menu"></ion-icon>\n	  </button>\n	  <ion-title>Resultados</ion-title>\n	</ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content>\n	  <ion-grid>\n		<ion-row>\n		  <ion-col col-6 ion-item *ngFor="let c of concursos"> \n			  <ion-card class="card-background-page" (click)="irAConcurso($event,c)">\n			  <img src="assets/imgs/{{c.icono}}"/>\n			  </ion-card>\n		  </ion-col>\n		</ion-row>\n	  </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/macbookpro/piba/src/pages/resultados/resultados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ResultadosPage);
    return ResultadosPage;
}());

//# sourceMappingURL=resultados.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map
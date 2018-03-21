import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { OneSignal } from '@ionic-native/onesignal';

import { MyApp } from './app.component';
import { HomePage, SessionService } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { ConcursosPage } from '../pages/concursos/concursos';
import { TestovPage } from '../pages/testov/testov';
import { ResultadodetPage } from '../pages/resultadodet/resultadodet';
import { MapaPage } from '../pages/mapa/mapa';
import { RoboticaresPage } from '../pages/roboticares/roboticares';
import { RoboticaconPage } from '../pages/roboticacon/roboticacon';
import { ResultadosPage } from '../pages/resultados/resultados';
import { AnahuacPage } from '../pages/anahuac/anahuac';
import { MisticaPage } from '../pages/mistica/mistica';
import { ConcursodetPage } from '../pages/concursodet/concursodet';
import { EmergenciasPage } from '../pages/emergencias/emergencias';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { ModalLoginPage } from '../pages/login/modal-login.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    ConcursosPage,
    MapaPage,
    RoboticaresPage,
    ResultadosPage,
    ModalLoginPage,
    AnahuacPage,
    MisticaPage,
    TestovPage,
    ConcursodetPage,
    EmergenciasPage,
    ResultadodetPage,
    RoboticaconPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConcursosPage,
    MapaPage,
    RoboticaresPage,
    ResultadosPage,
    ResultadodetPage,
    LoginPage,
    ModalLoginPage,
    AnahuacPage,
    MisticaPage,
    TestovPage,
    ConcursodetPage,
    EmergenciasPage,
    RoboticaconPage
  ],
  providers: [
    StatusBar,
    SessionService,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    InAppBrowser,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage, SessionService } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ConcursosPage } from '../pages/concursos/concursos';
import { TestovPage } from '../pages/testov/testov';
import { MapaPage } from '../pages/mapa/mapa';
import { RoboticaresPage } from '../pages/roboticares/roboticares';
import { RoboticaconPage } from '../pages/roboticacon/roboticacon';
import { ResultadosPage } from '../pages/resultados/resultados';
import { AnahuacPage } from '../pages/anahuac/anahuac';
import { MisticaPage } from '../pages/mistica/mistica';
import { ConcursodetPage } from '../pages/concursodet/concursodet';
import { ResultadodetPage } from '../pages/resultadodet/resultadodet';
import { EmergenciasPage } from '../pages/emergencias/emergencias';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  showSubmenuC: boolean = false;
  showSubmenuR: boolean = false;
  isLoggedIn: boolean = false;

  pages: Array<{title: string, component: any, margin: string, icono: string}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public sessionService: SessionService) {
    this.initializeApp();
    this.isLoggedIn = this.sessionService.isLoggedIn();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, margin: '10px', icono: 'home' },
      { title: 'Horarios', component: ConcursosPage, margin: '10px', icono: 'flask' },
      { title: 'Robótica', component: RoboticaresPage, margin: '20px', icono: 'cog' },
      { title: 'Resultados', component: ResultadosPage, margin: '10px', icono: 'trophy' },
      { title: 'Mapa', component: MapaPage, margin: '10px', icono: 'map' },
      { title: 'Mística', component: MisticaPage, margin: '10px', icono: 'flower' },
      { title: 'Anáhuac', component: AnahuacPage, margin: '10px', icono: 'infinite' },
      { title: 'Login', component: LoginPage, margin: '10px', icono: 'lock' },
      { title: 'Test OV', component: TestovPage, margin: '10px', icono: 'flask' },
      { title: 'Emergencias', component: EmergenciasPage, margin: '10px', icono: 'flask' },
      { title: 'Robótica_', component: RoboticaconPage, margin: '10px', icono: 'cog' }
    ];

  }
  
  /*this.firebase.getToken()
    .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
    .catch(error => console.error('Error getting token', error));

  this.firebase.onTokenRefresh()
    .subscribe((token: string) => console.log(`Got a new token ${token}`));*/

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(this.pages[page].component);
  }
  menuConcursosHandler(): void {
    this.showSubmenuC = !this.showSubmenuC;
  }
  menuResultadosHandler(): void {
    this.showSubmenuR = !this.showSubmenuR;
  }
  
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {AnahuacPage} from '../anahuac/anahuac';

import { Injectable } from '@angular/core';
import { MisticaPage } from '../mistica/mistica';
import { ConcursosPage } from '../concursos/concursos';
import { TestovPage } from '../testov/testov';
import { ResultadosPage } from '../resultados/resultados';
import { RoboticaresPage } from '../roboticares/roboticares';
import { RoboticaconPage } from '../roboticacon/roboticacon';
import { MapaPage } from '../mapa/mapa';

@Injectable()
export class SessionService {

    private loggedIn: boolean = false;

    

    constructor() {
      this.loggedIn = window.localStorage.getItem("loggedIn")=="true" ? true: false;
    }

    isLoggedIn():boolean{
        return this.loggedIn;
    }

    setLoggedIn(isLoggedIn: boolean){
        this.loggedIn = isLoggedIn;
    }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SessionService]
})
export class HomePage {
  public anahuacPage = AnahuacPage;
  public misticaPage = MisticaPage;
  public concursosPage = ConcursosPage;
  public testovPage = TestovPage;
  public resultadosPage = ResultadosPage;
  public roboticaresPage = RoboticaresPage;
  public roboticaconPage = RoboticaconPage;
  public loginPage = LoginPage;
  public mapaPage = MapaPage;
  public isLoggedIn: boolean;
  constructor(public navCtrl: NavController, public sessionService: SessionService) {
    this.isLoggedIn = this.sessionService.isLoggedIn();
  	//if(!this.isLoggedIn) this.navCtrl.setRoot(LoginPage);
  }
  push(page) {
    this.navCtrl.push(page);
  }

  navigate(page) {
    window.open(page,'_system');
  }

}

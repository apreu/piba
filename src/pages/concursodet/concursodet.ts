import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ConcursodetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface ConcursoFecha{
  id: number,
  id_concurso: number,
  concurso: string,
  horario: string,
  ubicacion: string,
  dia: string,
  campo2: string,
  activo: boolean,
  fecha_reg: string
}

@IonicPage()
@Component({
  selector: 'page-concursodet',
  templateUrl: 'concursodet.html',
})
export class ConcursodetPage {
  diaConcurso: string = "VIERNES";
  concursoFecha: ConcursoFecha[];
  detalleConcurso: {id:number, concurso: string, color: string, icono: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.detalleConcurso = this.navParams.get("concurso");
    console.log(this.detalleConcurso);

    this.http.post("http://sistemas.anahuac.mx/apreuapi/api/PIBA/getConcursos", {
      id_concurso: this.detalleConcurso.id,
      dia: 'viernes'
    })
    .subscribe(data => {
      this.concursoFecha = data as any;
      console.log(this.concursoFecha);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcursodetPage');
  }

  irAConcurso(event, dia){
		this.http.post("http://sistemas.anahuac.mx/apreuapi/api/PIBA/getConcursos", {
      id_concurso: this.detalleConcurso.id,
      dia: dia
    })
    .subscribe(data => {
      this.concursoFecha = data as any;
      console.log(this.concursoFecha);
    })
	}

}

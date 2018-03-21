import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultadodetPage } from '../resultadodet/resultadodet';

/**
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  concursos: Array<{ id: number, concurso: string, color: string, icono: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
		console.log('ionViewDidLoad ConcursosPage');
	}
	getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	irAConcurso(event, concurso) {
		this.navCtrl.push(ResultadodetPage, {
			concurso: concurso
		})
	}

}
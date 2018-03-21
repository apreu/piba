import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {HomePage} from '../home/home';

import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalLoginPage } from './modal-login.component';
import { AlertController } from 'ionic-angular';



export interface Registro {
  Nombre: string,
  Apellido_Paterno: string,
  Apellido_Materno: string,
  Email: string,
  Celular: string,
  Tipo_Persona: number,
  Estado: string,
  Ciudad: string,
  Colegio: string,
  Uuid: string,
}
export interface Resultado {
  result: boolean,
  errorMsg: string,
  resultCode: number,
  payload: string,
  token: string
}


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public colegios: any = 
  [
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
  public estados = 
  [
    {codigo:"01", nombre: "AGUASCALIENTES"},
    {codigo:"02", nombre: "BAJA CALIFORNIA"},
    {codigo:"03", nombre: "BAJA CALIFORNIA SUR"},
    {codigo:"04", nombre: "CAMPECHE"},
    {codigo:"05", nombre: "COAHUILA DE ZARAGOZA"},
    {codigo:"06", nombre: "COLIMA"},
    {codigo:"07", nombre: "CHIAPAS"},
    {codigo:"08", nombre: "CHIHUAHUA"},
    {codigo:"09", nombre: "CIUDAD DE MÉXICO"},
    {codigo:"10", nombre: "DURANGO"},
    {codigo:"11", nombre: "GUANAJUATO"},
    {codigo:"12", nombre: "GUERRERO"},
    {codigo:"13", nombre: "HIDALGO"},
    {codigo:"14", nombre: "JALISCO"},
    {codigo:"15", nombre: "MÉXICO"},
    {codigo:"16", nombre: "MICHOACÁN DE OCAMPO"},
    {codigo:"17", nombre: "MORELOS"},
    {codigo:"18", nombre: "NAYARIT"},
    {codigo:"19", nombre: "NUEVO LEÓN"},
    {codigo:"20", nombre: "OAXACA"},
    {codigo:"21", nombre: "PUEBLA"},
    {codigo:"22", nombre: "QUERÉTARO"},
    {codigo:"23", nombre: "QUINTANA ROO"},
    {codigo:"24", nombre: "SAN LUIS POTOSÍ"},
    {codigo:"25", nombre: "SINALOA"},
    {codigo:"26", nombre: "SONORA"},
    {codigo:"27", nombre: "TABASCO"},
    {codigo:"28", nombre: "TAMAULIPAS"},
    {codigo:"29", nombre: "TLAXCALA"},
    {codigo:"30", nombre: "VERACRUZ DE IGNACIO DE LA LLAVE"},
    {codigo:"31", nombre: "YUCATÁN"},
    {codigo:"32", nombre: "ZACATECAS"},
  ];
  public ciudades: any;
  
  public registro: Registro;
  public resultado: Resultado;
  public uuid: string;
  public EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public modalCtrl: ModalController, public alertCtrl: AlertController) {
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
    this.http.get("http://sistemas.anahuac.mx/apreuapi/api/GetGuid").subscribe(data => {
        this.uuid = data as any;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registrar(){
    if(!this.validar()){
      this.showAlert();
      return false;
    }
    this.registro.Uuid = this.uuid;
    this.http.post('http://sistemas.anahuac.mx/apreuapi/api/PIBA/Registro', this.registro)
      .subscribe(
        data=>{
          console.log(data);
          this.resultado = data as any;
          window.localStorage.setItem('uuid', this.uuid);
          window.localStorage.setItem('loggedIn', "true");
          this.showConfirm();
        }
      );
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Gracias por registrarte',
      message: 'Haz click en Genial para ir a la aplicación',
      buttons: [
        {
          text: 'Cerrar',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.setRoot(HomePage);
            window.location.reload();
          }
        },
        {
          text: 'Genial',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.setRoot(HomePage);
            window.location.reload();
          }
        }
      ]
    });
    confirm.present();
  }
  validar(){
    if(this.registro.Nombre=="") return false;
    if(this.registro.Apellido_Paterno=="") return false;
    if(this.registro.Email=="" || !this.registro.Email.match(this.EMAIL_REGEXP)) return false;
    if(this.registro.Tipo_Persona==0) return false;
    if(this.registro.Colegio=="") return false;
    return true;
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hacen falta datos',
      subTitle: 'Por favor ingresa los datos requeridos y correctos',
      buttons: ['OK']
    });
    alert.present();
  }

  buscarMunicipio(estado){
    this.http.post("http://sistemas.anahuac.mx/apreuapi/api/GetMunicipios", {c_estado:estado}).subscribe(data => {
        this.ciudades = data as any;
    });
  }

}

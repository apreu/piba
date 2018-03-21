import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  public selectedConcurso='';

  public concursos = [
    {id_ubicacion: '02', concurso: 'Apóstoles del Siglo XXI'},
    {id_ubicacion: '03', concurso: 'Aprendiendo con la tecnología'},
    {id_ubicacion: '04', concurso: 'Baile y Coreografía'},
    {id_ubicacion: '06', concurso: 'Comunicación con Imaginación'},
    {id_ubicacion: '04', concurso: 'Conquistando Valores'},
    {id_ubicacion: '05', concurso: 'Crea tu propio negocio'},
    {id_ubicacion: '04', concurso: 'Interpretación y composición Musical'},
    {id_ubicacion: '08', concurso: 'Investigadores del nuevo milenio: ciencias exactas'},
  ];

  public ubicaciones = [
    {id: '01', color: "#58002A", latitud: 19.4041307, longitud: -99.262905, titulo: "Diseño CAD", poligon: [{lat: 19.404374, lng: -99.263065},{lat: 19.403786, lng: -99.263031},{lat: 19.403840, lng:  -99.262146},{lat: 19.404314, lng: -99.262148}, {lat:19.404294, lng:-99.262349}, {lat:19.404410, lng:-99.262364}]},
    {id: '02', color: "#3E0031", latitud: 19.403177, longitud: -99.261920, titulo: "007 Pedagogía", poligon: [{lat: 19.403342, lng: -99.262221},{lat: 19.403216, lng: -99.262206},{lat: 19.403220, lng: -99.262133},{lat: 19.403126, lng: -99.262121}, {lat: 19.403118, lng: -99.262206}, {lat: 19.402992, lng: -99.262192}, {lat: 19.403030, lng: -99.261653}, {lat: 19.403147, lng: -99.261666}, {lat: 19.403145, lng:-99.261727}, {lat: 19.403256, lng: -99.261739}, {lat: 19.403262, lng: -99.261668}, {lat: 19.403383, lng: -99.261681}]},
    {id: '03', color: "#43013B", latitud: 19.4027365, longitud: -99.2618577, titulo: "Auditorio Posgrado", poligon: [{lat: 19.402629, lng: -99.261623},{lat: 19.402508, lng: -99.261482},{lat: 19.403117, lng: -99.260904},{lat: 19.403237, lng: -99.261043}]},
    {id: '04', color: "#D90000", latitud: 19.402338, longitud: -99.262787, titulo: "Explanada", poligon: [{lat: 19.402544, lng: -99.263018},{lat: 19.402017, lng: -99.262974},{lat: 19.402063, lng: -99.262456},{lat: 19.402568, lng: -99.262530}]},
    {id: '05', color: "#FF2D00", latitud: 19.402265, longitud: -99.263468, titulo: "Biblioteca", poligon: [{lat: 19.402489, lng: -99.263867},{lat: 19.401968, lng: -99.263833},{lat: 19.402016, lng: -99.263097},{lat: 19.402529, lng: -99.263133}]},
    {id: '06', color: "#AE6187", latitud: 19.4041307, longitud: -99.262905, titulo: "Sala didáctica CAD 2", poligon: [{lat: 19.404374, lng: -99.263065},{lat: 19.403786, lng: -99.263031},{lat: 19.403840, lng:  -99.262146},{lat: 19.404314, lng: -99.262148}, {lat:19.404294, lng:-99.262349}, {lat:19.404410, lng:-99.262364}]},
    {id: '07', color: "#FE679A", latitud: 19.403074, longitud: -99.261056, titulo: "Ejecutivos A y B Posgrado", poligon: [{lat: 19.402629, lng: -99.261623},{lat: 19.402508, lng: -99.261482},{lat: 19.403117, lng: -99.260904},{lat: 19.403237, lng: -99.261043}]},
    {id: '08', color: "#806584", latitud: 19.401723, longitud: -99.262028, titulo: "Auditorio Pastoral", poligon: [{lat: 19.401700, lng: -99.262199},{lat: 19.401559, lng: -99.262013},{lat: 19.401728, lng: -99.261864},{lat: 19.401877, lng: -99.262060}]},
    {id: '09', color: "#FFCADA", latitud: 19.402867, longitud: -99.262687, titulo: "Auditorio Rectoría", poligon: [{lat: 19.403042, lng: -99.262903},{lat: 19.402757, lng: -99.262887},{lat: 19.402771, lng: -99.262518},{lat: 19.403061, lng: -99.262531}]},
    {id: '10', color: "#3B2437", latitud: 19.4041307, longitud: -99.262905, titulo: "Auditorio CAD", poligon: [{lat: 19.404374, lng: -99.263065},{lat: 19.403786, lng: -99.263031},{lat: 19.403840, lng:  -99.262146},{lat: 19.404314, lng: -99.262148}, {lat:19.404294, lng:-99.262349}, {lat:19.404410, lng:-99.262364}]},
    {id: '11', color: "#700114", latitud: 19.4041307, longitud: -99.262905, titulo: "Estudio TV CAD", poligon: [{lat: 19.404374, lng: -99.263065},{lat: 19.403786, lng: -99.263031},{lat: 19.403840, lng:  -99.262146},{lat: 19.404314, lng: -99.262148}, {lat:19.404294, lng:-99.262349}, {lat:19.404410, lng:-99.262364}]},
    {id: '12', color: "#570023", latitud: 19.4041307, longitud: -99.262905, titulo: "Salón de exámenes CAD", poligon: [{lat: 19.404374, lng: -99.263065},{lat: 19.403786, lng: -99.263031},{lat: 19.403840, lng:  -99.262146},{lat: 19.404314, lng: -99.262148}, {lat:19.404294, lng:-99.262349}, {lat:19.404410, lng:-99.262364}]},
    {id: '12', color: "#570023", latitud: 19.4041307, longitud: -99.262905, titulo: "Salón de exámenes CAD", poligon: [{lat: 19.404374, lng: -99.263065},{lat: 19.403786, lng: -99.263031},{lat: 19.403840, lng:  -99.262146},{lat: 19.404314, lng: -99.262148}, {lat:19.404294, lng:-99.262349}, {lat:19.404410, lng:-99.262364}]},
  ]

  map: GoogleMap;
  constructor(private googleMaps: GoogleMaps, private geolocation: Geolocation) {
    
  }
  

  ionViewDidLoad() {

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.loadMap();
     }).catch((error) => {
       alert('Error getting location'+ error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
     });
  }

 loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 19.401796,
          lng: -99.263548
        },
        zoom: 18
      },
      controls:{
        myLocationButton: true,
        compass: true,
      },
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      this.map.getMyLocation();
      this.map.setMyLocationEnabled(true);
    })
    
  }
  verMapa(ev){
    this.map.clear();
    let location = this.ubicaciones.find(x => x.id === this.selectedConcurso);
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
        })
    
  }
  miUbicacion(lat: number, lng: number){
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
  }


}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8wyuj_umBo6GX_u4t_KRq_WQ1Nprn3ZE",
  authDomain: "listado-personas-78e61.firebaseapp.com",
  databaseURL: "https://listado-personas-78e61-default-rtdb.firebaseio.com",
  projectId: "listado-personas-78e61",
  storageBucket: "listado-personas-78e61.appspot.com",
  messagingSenderId: "562117649499",
  appId: "1:562117649499:web:a17e89421ab629a6460b7e",
  measurementId: "G-X3NM3Y615F"
};

@Injectable()
export class LoginService {
  tokenConexion:string;
  constructor(
    private router:Router,

    ) {

     }
  login(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
              this.tokenConexion = token
          }
        )
      },
    )
    console.log('Token asignado: ' + this.getIdToken());
    this.router.navigate(['personas']);
  }
  getIdToken():string{
    return this.tokenConexion;
  }
}


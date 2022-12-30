import { Component, OnInit } from '@angular/core';
import  * as firebase  from 'firebase/app'
import { getAnalytics } from "firebase/analytics";

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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
  ){}

  ngOnInit(): void {
    const analytics = getAnalytics(firebase.initializeApp(firebaseConfig));
  }
}


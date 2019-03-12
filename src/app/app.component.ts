import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'loginSignUpDemo';

  ngOnInit() {
    firebase.initializeApp(

      {
        apiKey: "AIzaSyAh-RXQZ5rTCXKb9KGWLovxCW_ZUGaXxzA",
        authDomain: "firstangularproject-8f42f.firebaseapp.com",



      }

    )

  }

}

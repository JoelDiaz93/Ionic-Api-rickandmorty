import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { NavController, ActionSheetController } from '@ionic/angular';
import { AuthenticationService } from '../shared/authentication-service';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  characters = [];

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private firebaseServ: FirebaseService
  ) {}

  ngOnInit() {
    console.log('Cargando informacion...');
    this.http
      .get<any>('https://rickandmortyapi.com/api/character')
      .subscribe((res) => {
        console.log(res);
        this.characters = res.results;
      });
  }

  logout() {
    this.authService
      .SignOut()
      .then((res) => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

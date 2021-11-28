import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {

  characters = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    console.log("Cargando informacion...")
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        console.log(res);
        this.characters = res.results;
      })
  }

}

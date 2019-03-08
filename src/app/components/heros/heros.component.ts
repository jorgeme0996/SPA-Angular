import { Component, OnInit } from '@angular/core';
import { HerosService, Hero } from '../../services/heros.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros:Hero[] = [];

  constructor( private _herosService:HerosService ) { }

  ngOnInit() {
    this.heros = this._herosService.getHeros();
  }

}

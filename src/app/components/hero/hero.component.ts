import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HerosService} from '../../services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  hero:any = {}

  constructor( private activatedRoute:ActivatedRoute, private _herosService:HerosService) { 
    this.activatedRoute.params.subscribe(params => {
      this.hero = this._herosService.getHero(params['id']);
      console.log(this.hero);
    })
  }

}

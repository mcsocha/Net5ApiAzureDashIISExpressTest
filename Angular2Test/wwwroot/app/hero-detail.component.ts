import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(private _heroService: HeroService, private _router: Router, private _routeParams: RouteParams) {}

  ngOnInit() {
    if (!this.hero) {
      let id = +this._routeParams.get('id');
      this._heroService.getHero(id).then(hero => this.hero = hero);
    }
  }

  goBack() {            
      alert("Your hero id is: " + this.hero.id);
      this._router.navigate(['Heroes', { id: this.hero.id }]);
  }
}

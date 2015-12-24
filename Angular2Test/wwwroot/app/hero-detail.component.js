var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(_heroService, _router, _routeParams) {
        this._heroService = _heroService;
        this._router = _router;
        this._routeParams = _routeParams;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.hero) {
            var id = +this._routeParams.get('id');
            this._heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
        }
    };
    HeroDetailComponent.prototype.goBack = function () {
        alert("Your hero id is: " + this.hero.id);
        this._router.navigate(['Heroes', { id: this.hero.id }]);
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/hero-detail.component.html',
            inputs: ['hero']
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
})();
exports.HeroDetailComponent = HeroDetailComponent;

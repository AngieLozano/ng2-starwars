webpackJsonp([0,3],{330:function(t,e,n){"use strict";var a=n(1),r=n(70),o=n(93),i=(n.n(o),n(78)),c=(n.n(i),n(77)),s=(n.n(c),n(88)),l=n(87);n.d(e,"a",function(){return p});var f=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t){this.http=t,this.PAGESIZE=10,this.totalPage=0,this.count=0,this.currentPage=1,this.isNextable=!1,this.isPrevable=!1}return t.prototype.getFilms=function(){function t(t){return e.currentPage=1,e.count=t.json().count,e.isNextable=null!==t.json().next,e.isPrevable=null!==t.json().previous,e.count>e.PAGESIZE?e.totalPage=Math.ceil(e.count/e.PAGESIZE):e.totalPage=0,t.json().results.map(n.convertResponseToFilm)}var e=this,n=new l.a;return this.http.get(s.a.FILM).map(t).catch(function(t){return o.Observable.throw(t.json().error||"Server error")})},t=f([n.i(a.c)(),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.c&&r.c)&&e||Object])],t);var e}()},331:function(t,e,n){"use strict";var a=n(1),r=n(70),o=n(93),i=(n.n(o),n(78)),c=(n.n(i),n(77)),s=(n.n(c),n(88)),l=n(87);n.d(e,"a",function(){return p});var f=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t){this.http=t,this.PAGESIZE=10,this.totalPage=0,this.count=0,this.currentPage=1,this.isNextable=!1,this.isPrevable=!1}return t.prototype.getPeople=function(){function t(t){return e.currentPage=1,e.count=t.json().count,e.isNextable=null!==t.json().next,e.isPrevable=null!==t.json().previous,e.count>e.PAGESIZE?e.totalPage=Math.ceil(e.count/e.PAGESIZE):e.totalPage=0,t.json().results.map(n.convertResponseToPeople)}var e=this,n=new l.a;return this.http.get(s.a.PEOPLE).map(t).catch(function(t){return o.Observable.throw(t.json().error||"Server error")})},t=f([n.i(a.c)(),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.c&&r.c)&&e||Object])],t);var e}()},332:function(t,e,n){"use strict";var a=n(1),r=n(70),o=n(93),i=(n.n(o),n(78)),c=(n.n(i),n(77)),s=(n.n(c),n(88)),l=n(87);n.d(e,"a",function(){return p});var f=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t){this.http=t,this.PAGESIZE=10,this.totalPage=0,this.count=0,this.currentPage=1,this.isNextable=!1,this.isPrevable=!1}return t.prototype.getPlanets=function(){function t(t){return e.currentPage=1,e.count=t.json().count,e.isNextable=null!==t.json().next,e.isPrevable=null!==t.json().previous,e.count>e.PAGESIZE?e.totalPage=Math.ceil(e.count/e.PAGESIZE):e.totalPage=0,t.json().results.map(n.convertResponseToPlanet)}var e=this,n=new l.a;return this.http.get(s.a.PLANET).map(t).catch(function(t){return o.Observable.throw(t.json().error||"Server error")})},t=f([n.i(a.c)(),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.c&&r.c)&&e||Object])],t);var e}()},333:function(t,e,n){"use strict";var a=n(1),r=n(70),o=n(93),i=(n.n(o),n(78)),c=(n.n(i),n(77)),s=(n.n(c),n(88)),l=n(87);n.d(e,"a",function(){return p});var f=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t){this.http=t,this.PAGESIZE=10,this.totalPage=0,this.count=0,this.currentPage=1,this.isNextable=!1,this.isPrevable=!1}return t.prototype.getSpecies=function(){function t(t){return e.currentPage=1,e.count=t.json().count,e.isNextable=null!==t.json().next,e.isPrevable=null!==t.json().previous,e.count>e.PAGESIZE?e.totalPage=Math.ceil(e.count/e.PAGESIZE):e.totalPage=0,t.json().results.map(n.convertResponseToSpecies)}var e=this,n=new l.a;return this.http.get(s.a.SPECIES).map(t).catch(function(t){return o.Observable.throw(t.json().error||"Server error")})},t=f([n.i(a.c)(),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.c&&r.c)&&e||Object])],t);var e}()},334:function(t,e,n){"use strict";var a=n(1),r=n(70),o=n(93),i=(n.n(o),n(78)),c=(n.n(i),n(77)),s=(n.n(c),n(88)),l=n(87);n.d(e,"a",function(){return p});var f=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t){this.http=t,this.PAGESIZE=10,this.totalPage=0,this.count=0,this.currentPage=1,this.isNextable=!1,this.isPrevable=!1}return t.prototype.getStarship=function(){function t(t){return e.currentPage=1,e.count=t.json().count,e.isNextable=null!==t.json().next,e.isPrevable=null!==t.json().previous,e.count>e.PAGESIZE?e.totalPage=Math.ceil(e.count/e.PAGESIZE):e.totalPage=0,t.json().results.map(n.convertResponseToStarship)}var e=this,n=new l.a;return this.http.get(s.a.STARSHIP).map(t).catch(function(t){return o.Observable.throw(t.json().error||"Server error")})},t=f([n.i(a.c)(),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.c&&r.c)&&e||Object])],t);var e}()},335:function(t,e,n){"use strict";var a=n(1),r=n(70),o=n(93),i=(n.n(o),n(78)),c=(n.n(i),n(77)),s=(n.n(c),n(88)),l=n(87);n.d(e,"a",function(){return p});var f=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t){this.http=t,this.PAGESIZE=10,this.totalPage=0,this.count=0,this.currentPage=1,this.isNextable=!1,this.isPrevable=!1}return t.prototype.getVehicle=function(){function t(t){return e.currentPage=1,e.count=t.json().count,e.isNextable=null!==t.json().next,e.isPrevable=null!==t.json().previous,e.count>e.PAGESIZE?e.totalPage=Math.ceil(e.count/e.PAGESIZE):e.totalPage=0,t.json().results.map(n.convertResponseToVehicle)}var e=this,n=new l.a;return this.http.get(s.a.VEHICLE).map(t).catch(function(t){return o.Observable.throw(t.json().error||"Server error")})},t=f([n.i(a.c)(),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.c&&r.c)&&e||Object])],t);var e}()},399:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=399},400:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(n(523),n(482)),r=n(1),o=n(522),i=n(521);o.a.production&&n.i(r.a)(),n.i(a.a)().bootstrapModule(i.a)},511:function(t,e,n){"use strict";var a=n(1),r=n(330);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.filmService=t}return t.prototype.ngOnInit=function(){this.loadDataFilms()},t.prototype.loadDataFilms=function(){var t=this;this.filmService.getFilms().subscribe(function(e){return t.films=e},function(t){console.log(t)})},t.prototype.trackByEpisodId=function(t,e){return e.episodeId},t=o([n.i(a.Q)({selector:"film-list",template:'\n      <h2>Films</h2>\n      \n      <table class="table">\n        <thead class="table__head">\n        <tr>\n          <th>#</th>\n          <th>Title</th>\n          <th>Episode</th>\n          <th>Release Date</th>\n        </tr>\n        </thead>\n        <tbody class="table__body">\n        <tr *ngFor="let film of films; let i = index; trackBy:trackByEpisodId;">\n          <td>{{ i+1 }}</td>\n          <td>{{ film.title }}</td>\n          <td>{{ film.episodeId }}</td>\n          <td>{{ film.releaseDate }}</td>\n        </tr>\n        </tbody>\n      </table>\n  '}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},512:function(t,e,n){"use strict";var a=n(1);n.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t=r([n.i(a.Q)({selector:"FooterBlock",template:'\n      <div class="footer__wrapper">\n      \n        <div class="footer__text">\n          <span>Crafted with &nbsp;<i class="fa fa-heart-o"></i>&nbsp; by Irfan Maulana</span>\n        </div>\n      \n        <ul class="footer__list">\n          <li class="footer__icon footer__icon--facebook">\n            <a rel="nofollow" href="https://www.facebook.com/mazipanneh">\n              <i class="fa fa-facebook-square"></i>\n            </a>\n          </li>\n          <li class="footer__icon footer__icon--twitter">\n            <a rel="nofollow" href="https://twitter.com/Maz_Ipan">\n              <i class="fa fa-twitter"></i>\n            </a>\n          </li>\n          <li class="footer__icon footer__icon--instagram">\n            <a rel="nofollow" href="https://instagram.com/maz_ipan">\n              <i class="fa fa-instagram"></i>\n            </a>\n          </li>\n          <li class="footer__icon footer__icon--linkedin">\n            <a rel="nofollow" href="https://id.linkedin.com/in/irfanmaulanamazipan">\n              <i class="fa fa-linkedin"></i>\n            </a>\n          </li>\n          <li class="footer__icon footer__icon--slideshare">\n            <a rel="nofollow" href="https://www.slideshare.net/IrfanMaulana21">\n              <i class="fa fa-slideshare"></i>\n            </a>\n          </li>\n          <li class="footer__icon footer__icon--github">\n            <a rel="nofollow" href="https://github.com/mazipan">\n              <i class="fa fa-github"></i>\n            </a>\n          </li>\n          <li class="footer__icon footer__icon--wordpress">\n            <a rel="nofollow" href="https://mazipanneh.wordpress.com/">\n              <i class="fa fa-wordpress"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n  '}),o("design:paramtypes",[])],t)}()},513:function(t,e,n){"use strict";var a=n(1);n.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){this.headerTitle="Ng2-StarWars",this.userName="Irfan"}return t=r([n.i(a.Q)({selector:"HeaderBlock",template:'\n        <header role="header" class="site__header header" id="header">\n          <div class="header__wrapper">\n        \n            <div class="header__brand">\n              <img src="https://mazipan.github.io/lightweight-admin-template/images/irfan-maulana.jpg" />\n              <div class="header__title" [innerText]="headerTitle">\n              </div>\n            </div>\n        \n            <div class="header__account account account--has-login">\n              <div class="account__wrapper">\n                <img class="account__img" src="https://mazipan.github.io/lightweight-admin-template/images/irfan-maulana.jpg" />\n                <span class="account__name" [innerText]="userName">\n                </span>\n              </div>\n              <i class="account__arrow fa fa-angle-down js--show-dropdown-menu"></i>\n        \n              <div class="account__menu">\n                <ul class="account__menu-wrapper">\n                  <li class="account__menu-item"><a href="#profil">Profile</a></li>\n                  <li class="account__menu-item"><a href="#logout">Logout</a></li>\n                </ul>\n              </div>\n        \n            </div>\n        \n            <div class="header__nav--mobile">\n              <div class="header__nav-btn" id="menu-toggle">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n              </div>\n            </div>\n        \n          </div>\n        </header>\n  '}),o("design:paramtypes",[])],t)}()},514:function(t,e,n){"use strict";var a=n(1),r=n(324);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.router=t}return t.prototype.switchTab=function(t){this.tabActive=t,this.router.navigate(["/"+t])},t=o([n.i(a.Q)({selector:"NavigationListBlock",template:'\n      <ul class="nav__wrapper">\n      \n        <li class="nav__item nav__item--active" routerLink="/film" routerLinkActive="nav__item--active">\n          <a href="#">\n            <i class="nav__icon fa fa-film"></i> Film\n          </a>\n        </li>\n        <li class="nav__item" routerLink="/planet" routerLinkActive="nav__item--active">\n          <a routerLink="/planet" routerLinkActive="active">\n            <i class="nav__icon fa fa-globe"></i> Planet\n          </a>\n        </li>\n        <li class="nav__item" routerLink="/vehicle" routerLinkActive="nav__item--active">\n          <a routerLink="/vehicle" routerLinkActive="active">\n            <i class="nav__icon fa fa-car"></i> Vehicle\n          </a>\n        </li>\n        <li class="nav__item" routerLink="/starship" routerLinkActive="nav__item--active">\n          <a routerLink="/starship" routerLinkActive="active">\n            <i class="nav__icon fa fa-space-shuttle"></i> Starship\n          </a>\n        </li>\n        <li class="nav__item" routerLink="/species" routerLinkActive="nav__item--active">\n          <a routerLink="/species" routerLinkActive="active">\n            <i class="nav__icon fa fa-paw"></i> Species\n          </a>\n        </li>\n        <li class="nav__item" routerLink="/people" routerLinkActive="nav__item--active">\n          <a routerLink="/people" routerLinkActive="active">\n            <i class="nav__icon fa fa-users"></i> People\n          </a>\n        </li>\n      \n      </ul>\n  '}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.b&&r.b)&&e||Object])],t);var e}()},515:function(t,e,n){"use strict";var a=n(1),r=n(331);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.peopleService=t}return t.prototype.ngOnInit=function(){this.loadDataPeople()},t.prototype.loadDataPeople=function(){var t=this;this.peopleService.getPeople().subscribe(function(e){return t.people=e},function(t){console.log(t)})},t.prototype.trackByName=function(t,e){return e.name},t=o([n.i(a.Q)({selector:"people-list",template:'\n      <h2>People</h2>\n      \n      <table class="table">\n        <thead class="table__head">\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Gender</th>\n          <th>Home World</th>\n        </tr>\n        </thead>\n        <tbody class="table__body">\n        <tr *ngFor="let person of people; let i = index; trackBy:trackByName;">\n          <td>{{ i+1 }}</td>\n          <td>{{ person.name }}</td>\n          <td>{{ person.gender }}</td>\n          <td>{{ person.homeworld }}</td>\n        </tr>\n        </tbody>\n      </table>\n  '}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},516:function(t,e,n){"use strict";var a=n(1),r=n(332);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.planetService=t}return t.prototype.ngOnInit=function(){this.loadDataPlanets()},t.prototype.loadDataPlanets=function(){var t=this;this.planetService.getPlanets().subscribe(function(e){return t.planets=e},function(t){console.log(t)})},t.prototype.trackByName=function(t,e){return e.name},t=o([n.i(a.Q)({selector:"planet-list",template:'\n        <h2>Planets</h2>\n      \n        <table class="table">\n          <thead class="table__head">\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Diameter</th>\n            <th>Population</th>\n          </tr>\n          </thead>\n          <tbody class="table__body">\n          <tr *ngFor="let planet of planets; let i = index; trackBy:trackByName;">\n            <td>{{ i+1 }}</td>\n            <td>{{ planet.name }}</td>\n            <td>{{ planet.diameter }}</td>\n            <td>{{ planet.population }}</td>\n          </tr>\n          </tbody>\n        </table>'}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},517:function(t,e,n){"use strict";var a=n(1),r=n(333);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.speciesService=t}return t.prototype.ngOnInit=function(){this.loadDataSpecies()},t.prototype.loadDataSpecies=function(){var t=this;this.speciesService.getSpecies().subscribe(function(e){return t.species=e},function(t){console.log(t)})},t.prototype.trackByName=function(t,e){return e.name},t=o([n.i(a.Q)({selector:"species-list",template:'\n      <h2>Species</h2>\n      \n      <table class="table">\n        <thead class="table__head">\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Classification</th>\n          <th>Homeworld</th>\n        </tr>\n        </thead>\n        <tbody class="table__body">\n        <tr *ngFor="let spec of species; let i = index; trackBy:trackByName;">\n          <td>{{ i+1 }}</td>\n          <td>{{ spec.name }}</td>\n          <td>{{ spec.classification }}</td>\n          <td>{{ spec.homeworld }}</td>\n        </tr>\n        </tbody>\n      </table>\n  '}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},518:function(t,e,n){"use strict";var a=n(1),r=n(334);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.starshipService=t}return t.prototype.ngOnInit=function(){this.loadDataStarship()},t.prototype.loadDataStarship=function(){var t=this;this.starshipService.getStarship().subscribe(function(e){return t.starship=e},function(t){console.log(t)})},t.prototype.trackByName=function(t,e){return e.name},t=o([n.i(a.Q)({selector:"starship-list",template:'\n      <h2>Films</h2>\n      \n      <table class="table">\n        <thead class="table__head">\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Passengers</th>\n          <th>Starship Class</th>\n        </tr>\n        </thead>\n        <tbody class="table__body">\n        <tr *ngFor="let star of starship; let i = index; trackBy:trackByName;">\n          <td>{{ i+1 }}</td>\n          <td>{{ star.name }}</td>\n          <td>{{ star.passengers }}</td>\n          <td>{{ star.starship_class }}</td>\n        </tr>\n        </tbody>\n      </table>\n  '}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},519:function(t,e,n){"use strict";var a=n(1),r=n(335);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.vehicleService=t}return t.prototype.ngOnInit=function(){this.loadDataVehicle()},t.prototype.loadDataVehicle=function(){var t=this;this.vehicleService.getVehicle().subscribe(function(e){return t.vehicle=e},function(t){console.log(t)})},t.prototype.trackByName=function(t,e){return e.name},t=o([n.i(a.Q)({selector:"vehicle-list",template:'\n      <h2>Vehicle</h2>\n      \n      <table class="table">\n        <thead class="table__head">\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Vehicle Class</th>\n          <th>Manufacturer</th>\n        </tr>\n        </thead>\n        <tbody class="table__body">\n        <tr *ngFor="let veh of vehicle; let i = index; trackBy:trackByName;">\n          <td>{{ i+1 }}</td>\n          <td>{{ veh.name }}</td>\n          <td>{{ veh.vehicle_class }}</td>\n          <td>{{ veh.manufacturer }}</td>\n        </tr>\n        </tbody>\n      </table>\n  '}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},520:function(t,e,n){"use strict";var a=n(1);n.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t=r([n.i(a.Q)({selector:"my-app",template:'\n      <HeaderBlock></HeaderBlock>\n    \n      <main role="main" class="site__main main">\n        <nav class="main__nav nav">\n      \n          <NavigationListBlock></NavigationListBlock>\n      \n          <FooterBlock></FooterBlock>\n      \n        </nav>\n        <article class="main__content content">\n          <div class="content__wrapper">\n              \n              <router-outlet></router-outlet>\n            \n          </div>\n        </article>\n      </main>\n  '}),o("design:paramtypes",[])],t)}()},521:function(t,e,n){"use strict";var a=n(1),r=n(152),o=n(70),i=n(324),c=n(520),s=n(513),l=n(514),f=n(512),u=n(511),p=n(515),h=n(516),d=n(517),v=n(518),_=n(519),m=n(330),y=n(332),b=n(331),g=n(333),P=n(334),R=n(335);n.d(e,"a",function(){return k});var j=this&&this.__decorate||function(t,e,n,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},w=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},O=[{path:"",redirectTo:"film",pathMatch:"full"},{path:"film",component:u.a},{path:"planet",component:h.a},{path:"people",component:p.a},{path:"species",component:d.a},{path:"starship",component:v.a},{path:"vehicle",component:_.a}],k=function(){function t(){}return t=j([n.i(a.b)({imports:[r.a,o.a,o.b,i.a.forRoot(O)],declarations:[c.a,s.a,l.a,f.a,u.a,p.a,h.a,d.a,v.a,_.a],providers:[m.a,b.a,y.a,g.a,P.a,R.a],bootstrap:[c.a]}),w("design:paramtypes",[])],t)}()},522:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={production:!0}},523:function(t,e,n){"use strict";var a=n(537),r=(n.n(a),n(530)),o=(n.n(r),n(526)),i=(n.n(o),n(532)),c=(n.n(i),n(531)),s=(n.n(c),n(529)),l=(n.n(s),n(528)),f=(n.n(l),n(536)),u=(n.n(f),n(525)),p=(n.n(u),n(524)),h=(n.n(p),n(534)),d=(n.n(h),n(527)),v=(n.n(d),n(535)),_=(n.n(v),n(533)),m=(n.n(_),n(538)),y=(n.n(m),n(939));n.n(y)},87:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(){function t(){}return t.prototype.convertResponseToFilm=function(t){var e={title:t.title,episodeId:t.episode_id,openingCrawl:t.opening_crawl,director:t.director,producer:t.producer,releaseDate:t.release_date};return e},t.prototype.convertResponseToPeople=function(t){var e={birth_year:t.birth_year,eye_color:t.eye_color,openingCrawl:t.openingCrawl,gender:t.gender,hair_color:t.hair_color,height:t.height,homeworld:t.homeworld,mass:t.mass,name:t.name,skin_color:t.skin_color,created:t.created,edited:t.edited};return e},t.prototype.convertResponseToPlanet=function(t){var e={name:t.name,rotation_period:t.rotation_period,orbital_period:t.orbital_period,diameter:t.diameter,terrain:t.terrain,climate:t.climate,gravity:t.gravity,surface_water:t.surface_water,population:t.population};return e},t.prototype.convertResponseToSpecies=function(t){var e={average_height:t.average_height,average_lifespan:t.average_lifespan,classification:t.classification,created:t.created,designation:t.designation,edited:t.edited,eye_colors:t.eye_colors,hair_colors:t.hair_colors,homeworld:t.homeworld,language:t.language,name:t.name,skin_colors:t.skin_colors};return e},t.prototype.convertResponseToStarship=function(t){var e={MGLT:t.MGLT,cargo_capacity:t.cargo_capacity,openingCrawl:t.openingCrawl,consumables:t.consumables,created:t.created,crew:t.crew,edited:t.edited,hyperdrive_rating:t.hyperdrive_rating,length:t.length,manufacturer:t.manufacturer,max_atmosphering_speed:t.max_atmosphering_speed,model:t.model,name:t.name,passengers:t.passengers,starship_class:t.starship_class};return e},t.prototype.convertResponseToVehicle=function(t){var e={name:t.name,model:t.model,manufacturer:t.manufacturer,cost_in_credits:t.cost_in_credits,length:t.length,max_atmosphering_speed:t.max_atmosphering_speed,crew:t.crew,passengers:t.passengers,cargo_capacity:t.cargo_capacity,consumables:t.consumables,vehicle_class:t.vehicle_class};return e},t}()},88:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(){function t(){}return t.FILM="https://swapi.co/api/films/",t.PEOPLE="https://swapi.co/api/people/",t.PLANET="https://swapi.co/api/planets/",t.SPECIES="https://swapi.co/api/species/",t.STARSHIP="https://swapi.co/api/starships/",t.VEHICLE="https://swapi.co/api/vehicles/",t}()},940:function(t,e,n){t.exports=n(400)}},[940]);
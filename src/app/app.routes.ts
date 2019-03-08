import {RouterModule, Routes, Router} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HerosComponent} from './components/heros/heros.component';
import {AboutComponent} from './components/about/about.component'

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heros', component: HerosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
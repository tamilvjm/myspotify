import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { SearchComponent } from "./components/search/search.component";
//import { NavbarComponent } from "./components/navbar/navbar.component";

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        component: SearchComponent
    }
]

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
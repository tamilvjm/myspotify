"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require("./components/about/about.component");
var search_component_1 = require("./components/search/search.component");
//import { NavbarComponent } from "./components/navbar/navbar.component";
var routes = [
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: '',
        component: search_component_1.SearchComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map
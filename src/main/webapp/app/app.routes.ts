import {Routes} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {inject} from "@angular/core";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("../views/land/land.component").then(m => m.LandComponent)
    },
    {
        path: "contact",
        loadComponent: () => import("../views/contact/contact.component").then(m => m.ContactComponent)
    },
    {
        path: "adhesion",
        loadComponent: () => import("../views/adhesion/adhesion.component").then(m => m.AdhesionComponent)
    },
    {
        path: "map",
        loadComponent: () => import("../views/map/map.component").then(m => m.MapComponent)
    },
    {
        path: "events",
        loadComponent: () => import("../views/events/events.component").then(m => m.EventsComponent),
        resolve: {
            messages: () => inject(HttpClient).get("http://localhost:8080/bot/misterfly/gallery")
        }
    }
];

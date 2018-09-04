import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./header.component"
import { BrowserModule } from "@angular/platform-browser"
import { LoginModule } from "./login/login.module"
import { ShoppingModule } from "./shopping/shopping.module"
import { HomeComponent, NotFoundComponent, ListComponent } from "./menulinks.components";

//Route Mapping
let appRoutes = [
    { path: "", component: HomeComponent },
    { path: "list", component: ListComponent },
    { path: "**", component: NotFoundComponent } // '**' - indicates any other path
]

@NgModule({
    //Register Componenets
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        NotFoundComponent,
        ListComponent
    ],
    //Specify Startup Component - Root Component
    bootstrap: [AppComponent],
    //Module Dependencies
    imports: [
        BrowserModule,
        LoginModule,
        ShoppingModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppModule {
    constructor() {
        console.log("App Module Constructor");
    }
}
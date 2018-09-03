import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./header.component"
import { BrowserModule } from "@angular/platform-browser"
import { LoginModule } from "./login/login.module"
import { ShoppingModule } from "./shopping/shopping.module"
@NgModule({
    //Register Componenets
    declarations : [
        AppComponent,
        HeaderComponent
    ],
    //Specify Startup Component - Root Component
    bootstrap : [AppComponent],
    //Module Dependencies
    imports : [
        BrowserModule,
        LoginModule,
        ShoppingModule
    ]
})
export class AppModule {
    constructor(){
        console.log("App Module Constructor");
    }
}
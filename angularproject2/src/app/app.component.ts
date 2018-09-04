//include Component decorator available in @angular/core lib
import { Component } from "@angular/core";

@Component({
    //Specify Tag Name for component
    selector : "app-root",
    //Specify output for Component
    //Use BackTick character for multiline template
    template : `<!--<h3>My First Angular Component</h3> -->
                <app-header></app-header>
                <router-outlet></router-outlet>
                `

})
export class AppComponent {
    
    constructor(){
        console.log("App Component Constructor");    
    }
}
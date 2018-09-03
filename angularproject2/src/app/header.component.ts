import { Component } from "@angular/core";

@Component({
    selector : "app-header",
    templateUrl : "./header.component.html"
})
export class HeaderComponent {

    appTitle : String;
    userName = "Guest"; 

    constructor(){
        console.log("Header Comoponent");
        this.appTitle = "Shopping App"
    }

    showUserName() : String {   
        return this.userName
    }
}
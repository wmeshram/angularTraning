import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";

@Component({
    selector : "sign-in",
    template : `<h4>Welcome {{userName}}</h4>
    <my-sign [title] = "signInHeading" (myEvent)="handleMyEvent($event)"></my-sign>`  // [] - used for property binding
})

export class SignInComponent{
    userName  = "Guest";
    signInHeading = "Sign In";
    
    constructor(){
        console.log("Sign In Constructor");
    }

    handleMyEvent(event) : void {
        this.userName = event.usr;
    }
    
}
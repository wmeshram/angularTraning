import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    template: `<h1>Welcome to the app</h1>`
})

export class HomeComponent {
    constructor() {
        console.log("Home Component");
    }
}

@Component({
    selector: "app-list",
    template: `<div class="row">
                    <div class="col-sm-7">
                        <app-products></app-products>
                    </div>
                    <div class="col-sm-5 card card-body">
                        <app-cartitems></app-cartitems>
                    </div>
               </div>`
})

export class ListComponent {
    constructor() {
        console.log("List Comoponent");
    }
}

@Component({
    selector: "app-notfound",
    template: "<h1>404 Not Found</h1>"
})

export class NotFoundComponent {
    constructor() {
        console.log("Not Found Comoponent");
    }
}
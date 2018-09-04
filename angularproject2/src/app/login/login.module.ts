import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./singup.component";
import { RouterModule } from "@angular/router"
import { SharedModule } from "../shared/shared.module"
let loginMappings = [
    {path:"signin",component: SignInComponent},
    {path:"signup",component:SignUpComponent}
]

@NgModule({
    declarations : [
        SignInComponent,
        SignUpComponent
    ],

    imports : [
        RouterModule.forChild(loginMappings),
        SharedModule
    ]
})

export class LoginModule{
    constructor(){
        console.log("Login Module Constructor");
    }
}
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from "@angular/core";

@Component({
    selector : "my-sign",
    template : `<h4>{{title}}</h4>
    <form>
    UserName : <input type="text" placeholder = "Enter User Name" #frmUsr><br>
    Password : <input type="password" placeholder = "Enter Password" #frmPwd><br>
    <button  type="button" class="btn btn-primary" (click)="handleButtonClick(frmUsr.value,frmPwd.value)">{{title}}</button> 
    </form>
    ` // () - used for Event Binding
})

export class MySignComponent implements OnInit,OnChanges,OnDestroy{
    @Input()
    title : String;

    @Output()
    myEvent = new EventEmitter();

    constructor(){
        console.log("My Sign Constructor " ,this.title);
    }

    handleButtonClick(usr,pwd) : void {
        this.myEvent.emit({usr,pwd});
        //console.log(usr + " " + pwd);
    }

    ngOnInit(){
        console.log("My Sign Init ",this.title);
    }

    ngOnChanges(){
        console.log("My Sign Changes ",this.title);
    }

    ngOnDestroy(){
        console.log("My Sign Destroy")
    }
}
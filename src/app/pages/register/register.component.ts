import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var swal: any;

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    moduleId: module.id,
    selector: 'register-cmp',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    username: string = "";
    password: string = "";
    email: string = "";
    constructor(private http: Http) {

    }
    submit() {
        var body = { "name": this.username, "email": this.email, "password": this.password };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .post('http://127.0.0.1:8000/api/signup/',
            body, {
                headers: headers
            })
            .subscribe(data => {
                console.log(data.json());
                swal({
                    type: "success",
                    title: "Good job!",
                    text: "Your account has been successfully created",
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success"

                });
            }, error => {
                console.log(JSON.stringify(error.json()));
                console.log("not ok")
                swal({
                    title: "ERROR!!!!",
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success"
                });

            });
    }

    ngOnInit() {
        // this.checkFullPageBackgroundImage();
    }
}

import { Component, OnInit } from '@angular/core';
declare var swal: any;

declare var $: any;
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Provider } from '../../provider/provider';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    test: Date = new Date();
    username: string = "";
    password: string = "";

    constructor(private http: Http,public provider: Provider,private router: Router) {

    }
    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };
    ngOnInit() {
        this.checkFullPageBackgroundImage();

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }
    submit() {
        let link = this.provider.link + "login/"
        let data = { "username": this.username, "password": this.password }
        console.log(data);
        this.http.post(link, data)
            .subscribe(data1 => {
                this.provider.token = JSON.parse(data1["_body"]);
                this.provider.token = this.provider.token["token"];
                console.log(this.provider.token);
                this.router.navigateByUrl('/dashboard');
            }, error => {
                console.log("error");
                swal({
                    title: "Invalid password or username",
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success"
                });
            });
    }
}

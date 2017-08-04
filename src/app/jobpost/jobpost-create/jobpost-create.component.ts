import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Provider } from '../../provider/provider';
declare var swal:any;

@Component({
    selector: 'jobpost-create',
    templateUrl: './jobpost-create.component.html',
    styleUrls: ['./jobpost-create.component.css']
})
export class JobpostCreateComponent implements OnInit {
    job_title: string = "";
    job_description: string = "";
    job_salary: string = "";
    job_location: string = "";
    job_duration: string = "";
    constructor(private http: Http,public provider: Provider) {
    }

    ngOnInit() {

    }
    submit() {
        console.log(this.job_title);
        var body = { "job_title":this.job_title,"job_description":this.job_description,"job_salary":this.job_salary,"job_location":this.job_location,"job_duration":this.job_duration};
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT '+this.provider.token);
        console.log(this.provider.token)
        this.http
            .post('http://127.0.0.1:8000/api/talent/jobpost/',
            body, {
                headers: headers
            })
            .subscribe(data => {
                console.log(data.json());
                swal({
                type: "success",
                title: "KUDOS!",
                text: "Job Sucessfully Posted!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"

            });
            }, error => {
                console.log(JSON.stringify(error.json()));
                console.log("not ok")
            });
    }

}


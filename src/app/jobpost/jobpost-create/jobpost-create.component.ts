import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
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
    constructor(private http: Http) {

    }

    ngOnInit() {

    }
    submit() {
        console.log(this.job_title);
        var body = { "job_title":this.job_title,"job_description":this.job_description,"job_salary":this.job_salary,"job_location":this.job_location,"job_duration":this.job_duration};
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVzZXIxIiwidXNlcl9pZCI6NSwiZW1haWwiOiJVc2VyMUBlbWFpbC5jb20iLCJleHAiOjE1MjU0NzE1NTZ9.zaryPzeRb-oDk-Q-osCwf4Mxd0dIV1QOQO_Ys_SCBek');
        this.http
            .post('http://127.0.0.1:8000/api/talent/jobpost/',
            body, {
                headers: headers
            })
            .subscribe(data => {
                console.log(data.json());
            }, error => {
                console.log(JSON.stringify(error.json()));
                console.log("not ok")
            });
    }

}


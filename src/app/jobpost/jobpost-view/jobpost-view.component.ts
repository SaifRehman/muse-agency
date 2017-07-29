import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    selector: 'jobpost-view-component',
    templateUrl: './jobpost-view.component.html',
    styleUrls: ['./jobpost-view.component.css']
})
export class JobpostViewComponent implements OnInit {

    constructor(private http: Http) {

    }

    ngOnInit() {

    }

}
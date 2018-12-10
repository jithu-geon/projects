import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SampleModel } from '../dashboard.model';

@Injectable()
export class DashboardService {
    private serviceUrl = '/api/SampleData';
    constructor(private http: HttpClient) {}

    getSampleData = (model: SampleModel) => {
        return this.http.get<any>(this.serviceUrl, { params: <any>model });
      };
}
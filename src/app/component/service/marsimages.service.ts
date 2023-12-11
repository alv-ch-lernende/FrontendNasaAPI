import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {allMarsImages} from "./marsImage-repository.service";

class ApiResponse {
}

@Injectable({
  providedIn: 'root'
})
export class MarsimagesService {

  constructor(private http: HttpClient) {}

  getImagesCuriosity(): Observable<allMarsImages> {
    return this.http.get<allMarsImages>(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=M40mlyyCKEpb1QvJGpkyF0MulpTr7NOaJdkhUUTa`);
  }

  getImagesOpportunity(): Observable<allMarsImages> {
    return this.http.get<allMarsImages>(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=M40mlyyCKEpb1QvJGpkyF0MulpTr7NOaJdkhUUTa`);
  }

  getImagesSpirit(): Observable<allMarsImages> {
    return this.http.get<allMarsImages>(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=10&api_key=M40mlyyCKEpb1QvJGpkyF0MulpTr7NOaJdkhUUTa`);
  }
}

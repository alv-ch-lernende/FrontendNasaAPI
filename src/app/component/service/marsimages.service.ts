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

  getImages(): Observable<allMarsImages> {
    return this.http.get<allMarsImages>(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=M40mlyyCKEpb1QvJGpkyF0MulpTr7NOaJdkhUUTa`);
  }
}

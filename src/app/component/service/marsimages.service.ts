import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

class ImageDTO {
  // imageUrl: string;
  // otherProperty: string;
}

class ApiResponse {
}

@Injectable({
  providedIn: 'root'
})
export class MarsimagesService {

  constructor(private http: HttpClient) {}

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`);
  }
}

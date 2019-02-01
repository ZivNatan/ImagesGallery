import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class GalleryService {

  constructor(private http: HttpClient) { }

  getImages(): Observable <any> {
     return this.http.get('../assets/data.json').map((res: any) => res);
  }

}




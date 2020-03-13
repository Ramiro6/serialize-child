import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

const environmentApi: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private http: HttpClient ) { }

  getData(): Observable<any> {
    return this.http.get(`${environmentApi}content`);
  }
}

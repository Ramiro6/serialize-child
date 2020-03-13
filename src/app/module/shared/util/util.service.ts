import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';

const environmentApi: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor( ) { }
}

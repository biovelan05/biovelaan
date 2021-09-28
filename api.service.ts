import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IBrj, ICum, IRet, ISite } from './tom';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url:string='http://localhost/ret/ret.php'
  public url1:string='http://localhost/brj/brj.php'
  public url2:string='http://localhost/cum/cum.php'
  constructor(public http: HttpClient) { }
  getinfo():Observable<IRet[]>{
    return this.http.get<IRet[]>(this.url)
  }
  getdata():Observable<IBrj[]>{
    return this.http.get<IBrj[]>(this.url1)
  }
  getmesg():Observable<ICum[]>{
    return this.http.get<ICum[]>(this.url2)
  }
  
  
}

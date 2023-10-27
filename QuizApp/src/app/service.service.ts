import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 
  }
  getData(){
    return this.http.get('https://opentdb.com/api.php?amount=1&category=18&difficulty=hard&type=multiple')
  }
}

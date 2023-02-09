import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import configurl from '../../assets/Config/config.json';
import { Task } from '../Models/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  url=configurl.apiServer.url
  constructor(private httpClient:HttpClient) { }
  CreateTask(createComponent:Task):Observable<Task>{
    return this.httpClient.post<Task>(this.url+'/api/CreateTask',createComponent)
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../Models/Task.model';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
 createTask:Task={
  TaskName:'',
  TeamLead:''
 };
 url = 'http://localhost:18964/api/Task/CreateTask';
 constructor(private task:TaskServiceService, private router:Router, private http:HttpClient){
  this.createTask =new Task();
 }
 CreateTask(){
  this.http.post(this.url,this.createTask).subscribe({
    next(task){
      console.log(task)
    }
  })
}
}

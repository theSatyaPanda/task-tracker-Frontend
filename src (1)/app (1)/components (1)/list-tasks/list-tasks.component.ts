import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/Task';
import { TaskServiceService } from 'src/app/task-service.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  taskList!:Task[];
  refreshtaskList$= new BehaviorSubject<boolean>(true);
  constructor(private service:TaskServiceService) { }

  ngOnInit(): void {
   /* this.taskList=*/
   this.service.getTasks().subscribe(tasks=>{
    this.taskList=tasks
  });
   //  function subscribe(tasks) {this.taskList=tasks;}
   // subscribe is function which gives you  a variable called tasks 
  }
  deleteTask(task_name:any){
    //console.log(task_name);
     this.service.deleteTask(task_name).subscribe((result)=>{
       //console.log(result);
       this.ngOnInit();
     });
 
   }

}

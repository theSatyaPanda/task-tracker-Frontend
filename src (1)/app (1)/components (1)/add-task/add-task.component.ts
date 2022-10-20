import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskServiceService } from 'src/app/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task!: string;
  day!: string;

  constructor(private service:TaskServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var obj:Task={task:this.task,day:this.day};
    this.service.addTask(obj).subscribe(task=> console.log('data saved'));
    console.log(this.task, this.day);
    console.log("Submit button clicked");
    this.task="";
    this.day="";
  }

}

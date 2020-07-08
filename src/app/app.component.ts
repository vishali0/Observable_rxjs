import { Component } from '@angular/core';
import { BlogService } from './blog.service';
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable';
  blogResult;
  blogForm: FormGroup;

  constructor(private blogService: BlogService, private fb: FormBuilder) {
    // this.blogResult = JSON.parse(JSON.stringify(this.blogService.getService()));
    this.blogResult = this.blogService.getService();
    console.log(this.blogResult);

    this.blogForm = this.fb.group({
      productName: this.fb.control(""),
      price: this.fb.control(""),
    });
  }
}

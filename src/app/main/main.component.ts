import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  required;
  requiredData;
  constructor(private activate: ActivatedRoute, private blogService: BlogService) {
    //this.required = this.activate.snapshot.params.id;
    //this.requiredData=subsc
    this.activate.params.subscribe((info) => this.required = info.id);
    console.log("RequiredId", this.required);

    this.blogService.getServiceById(this.required).subscribe((data) => {
      this.requiredData = JSON.parse(JSON.stringify(data));
      console.log(this.requiredData)
    })


  }

  ngOnInit(): void {
  }

}

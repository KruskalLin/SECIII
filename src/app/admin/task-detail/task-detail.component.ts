import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {TaskDetail} from "../../requester/entity/task-detail";
import {AdminService} from "../../@core/data/admin.service";
import {Task} from "../../worker/entity/task";
import {Gallery, GalleryItem, ImageItemComponent, ThumbnailItemComponent} from "@ngx-gallery/core";
import {Lightbox} from "@ngx-gallery/lightbox";

@Component({
  selector: 'ngx-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  items: GalleryItem[] = [];

  task: Task;
  constructor(private router: Router, private taskService: AdminService, private route: ActivatedRoute,
              public gallery: Gallery, public lightbox: Lightbox) {

  }

  ngOnInit() {
    const self = this;
    const lightbox = this.gallery.ref('lightbox', {
      thumbPosition: 'top'
    });


    this.route.paramMap.subscribe(
      (params: ParamMap) => {

        self.taskService.getTasks().subscribe(
        p => {self.task = p[params.get('id')];
          self.taskService.getImages(self.task.id).map(
            p => {
              const temp = [];
              for(let i=0;i<p.length;i++){
                temp.push(
                  {
                    component: ImageItemComponent,
                    thumbComponent: ThumbnailItemComponent,
                    data: {
                      src: p[i].replace(/ /g, "%20"),
                      thumb: p[i].replace(/ /g, "%20"),
                      thumbnail: p[i].replace(/ /g, "%20"),
                    }
                  }
                )
              }
              return temp;
            }
          ).subscribe(p => {
              self.items = p;
              lightbox.load(p);
            }, error2 => { console.log(error2) }
          )

        console.log(self.task) },
        error2 => { console.log(error2);})


      },
      error => {
         console.log(error);
      }
    );


  }
  reject() {
    const self = this;
     this.taskService.update({taskId: self.task.id, state: 'REJECT'});
  }

  approve() {
    const self = this;
    this.taskService.update({taskId: self.task.id, state: 'APPROVE'});
  }


  close() {
    const self = this;
    this.taskService.update({taskId: self.task.id, state: 'CLOSE'});

  }
}

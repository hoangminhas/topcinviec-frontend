import { PostService } from './../../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActionSequence } from 'protractor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
posts;
id = this.route.snapshot.paramMap.get('id');
  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getDetail(id){
    this.postService.getById(id).subscribe(post=>{
      this.posts = post;
    })
  }
}

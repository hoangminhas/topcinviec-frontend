import { PostService } from "./../../../services/post.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.css"],
})
export class JobListComponent implements OnInit {
  posts: [];

  constructor(private postService: PostService) {
    this.postService = postService;
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAll().subscribe((res) => {
      if (res.success === true) {
        this.posts = res.data;
        // console.log('123',this.posts)
      } else {
        console.log(res.msg);
      }
    });
  }
}

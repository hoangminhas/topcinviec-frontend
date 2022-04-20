import { RecruiterService } from "./../../../services/recruiter.service";
import { PostService } from "./../../../services/post.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recruiter-detail",
  templateUrl: "./recruiter-detail.component.html",
  styleUrls: ["./recruiter-detail.component.css"],
})
export class RecruiterDetailComponent implements OnInit {
  posts = [];
  userLogin: any
  constructor(
    private recruiterService: RecruiterService,
    private route: ActivatedRoute ) 
  {
    // private postService: PostService
    // this.postService = postService;
    this.recruiterService = recruiterService;
  }

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem("userLogin"));
    this.getAllPostOfUser(this.userLogin.id);
  }

  getAllPostOfUser(id) {
    this.recruiterService.getAllPostOfUser(id).subscribe((res) => {
      if (res.success === true) {
        this.posts = res.data;
      }
    });
  }
}

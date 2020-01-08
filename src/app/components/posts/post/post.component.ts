import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: { id: string; titlePost: string; contentPost: string; imagePost: string; } = {
    id: "1",
    titlePost: "Post Numero Uno",
    contentPost: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imagePost: "https://i.picsum.photos/id/237/200/300.jpg"

  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.post.id = this.route.snapshot.params.id;
  }

}

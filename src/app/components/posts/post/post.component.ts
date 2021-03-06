import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostI } from "../../../shared/models/post.interface";
import { PostService } from '../../posts/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  public post$: Observable<PostI>;

  constructor(private route: ActivatedRoute, private postSvc: PostService) { }

  ngOnInit() {
    const idPost = this.route.snapshot.params.id;
    this.post$ = this.postSvc.getOnePosts(idPost);

  }

}

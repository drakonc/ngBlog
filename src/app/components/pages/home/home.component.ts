import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  }[] = [
    {
      id: "1",
      titlePost: "Post Numero Uno",
      contentPost:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imagePost: "https://i.picsum.photos/id/237/200/300.jpg"
    },
    {
      id: "2",
      titlePost: "Post Numero Dos",
      contentPost:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imagePost: "https://i.picsum.photos/id/237/200/300.jpg"
    },
    {
      id: "3",
      titlePost: "Post Numero Tres",
      contentPost:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imagePost: "https://i.picsum.photos/id/237/200/300.jpg"
    },
    {
      id: "4",
      titlePost: "Post Numero Cuatro",
      contentPost:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imagePost: "https://i.picsum.photos/id/237/200/300.jpg"
    },
    {
      id: "5",
      titlePost: "Post Numero Cuatro",
      contentPost:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imagePost: "https://i.picsum.photos/id/237/200/300.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}

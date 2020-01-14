import { Component, OnInit } from '@angular/core';
import { faUserLock, faUserTie, faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public appName: String = "ngBlog";
  public icons: {} = { faUserLock, faAddressCard, faUserTie }


  constructor() { }

  ngOnInit() {
  }

}

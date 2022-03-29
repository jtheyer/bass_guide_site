import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  title = "Catch, Record, Release..."

  constructor() { }

  ngOnInit() {
  }

}

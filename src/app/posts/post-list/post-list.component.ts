import { Component, Input } from '@angular/core';
// Input is a decorate to listen event from outside (=from the parent component only)

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post content'},
  //   {title: 'Second Post', content: 'This is the second post content'},
  //   {title: 'Third Post', content: 'This is the third post content'},
  //   {title: 'Forth Post', content: 'This is the forth post content'}
  // ];
  @Input() posts: Post[] = [];
}

import { Component, EventEmitter, Output } from '@angular/core';
// EventEmitter can allows post-create to emit an event when there is a new post
// Output is the decorator

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>();
  // < > force the data emit has to be the type inside it

  // newPost = 'NO CONTENT';   // a property to save the new posts, default is an empty string

  // onAddPost(postInput: HTMLTextAreaElement) {
  //   // tell typescript what type of element it is by A : B
  //   // console.log(postInput);  //cannot see the content
  //   // console.dir(postInput);
  //   this.newPost = postInput.value;
  // }

  onAddPost(form: NgForm) {
    // this.newPost = this.enteredvalue;
    if (form.invalid) {
      return;
    }
    const post: Post = { title: form.value.title,
      content: form.value.content};
    this.postCreated.emit(post);
  }
}

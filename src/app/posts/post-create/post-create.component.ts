import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredvalue = '';
  newPost = 'NO CONTENT';   // a property to save the new posts, default is an empty string

  // onAddPost(postInput: HTMLTextAreaElement) {
  //   // tell typescript what type of element it is by A : B
  //   // console.log(postInput);  //cannot see the content
  //   // console.dir(postInput);
  //   this.newPost = postInput.value;
  // }

  onAddPost() {
    this.newPost = this.enteredvalue;
  }
}

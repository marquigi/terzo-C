import { Component, Input } from '@angular/core';
import { Post } from '../../models/posts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css'
})
export class PostDetail {
  @Input()
  post?: Post;
}

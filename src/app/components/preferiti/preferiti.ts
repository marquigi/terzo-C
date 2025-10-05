import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts-service';

@Component({
  selector: 'app-preferiti',
  imports: [],
  templateUrl: './preferiti.html',
  styleUrl: './preferiti.css'
})
export class Preferiti {

  ps: PostsService = inject(PostsService);
}

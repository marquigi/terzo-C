import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts-service';
import { Post, PostCategory } from '../../models/posts';
import { PostDetail } from "../post-detail/post-detail";

@Component({
  selector: 'app-post-list',
  imports: [PostDetail],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList implements OnInit {

  // Proprietà su cui mi basero per creare HTML
  posts: Post[] = [];
  categories: PostCategory[] = [];


  // Sono il componente e mi faccio fare il servizio da angular
  // Alternativa 1: con inject
  ps: PostsService = inject(PostsService);
  // inject è una funzione che serve per ottenere una dipendenza (es. un servizio) direttamente nel codice, senza doverla dichiarare nel costruttore di un componente

  // Alternativa 2: con constructor
  // constructor(public ps: PostsService) { }

  // Quando il componente viene inizializzato (grazie a OnInit)
  ngOnInit(): void {
    // Carico i post dal servizio e li salvo nella proprietà "posts"
    this.posts = this.ps.getPosts();
    // Carico le categorie dal servizio e li salvo nella "categories" "posts"
    this.categories = this.ps.getCategory();
  }
}

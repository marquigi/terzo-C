import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts-service';
import { Post, PostCategory } from '../../models/posts';
import { PostDetail } from "../post-detail/post-detail";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [PostDetail, CommonModule],
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

  filter(cat?: PostCategory) {
    // Funzione che filtra i post in base alla categoria
    // Il parametro cat è facoltativo (?:) e di tipo PostCategory

    if (cat) {
      // Se viene passata una categoria, prendo solo i post di quella categoria
      this.posts = this.ps.getPostbyCategory(cat);
    } else {
      // Se non passo nessuna categoria, mostro tutti i post
      this.posts = this.ps.getPosts();
    }
  }
}

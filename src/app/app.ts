import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostList } from "./components/post-list/post-list";
import { Preferiti } from "./components/preferiti/preferiti";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostList, Preferiti],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('terzo-C');
}

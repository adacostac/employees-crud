import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
import { Book } from './demo.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: [ './demo.component.scss' ]
})
export class DemoComponent implements OnInit {
  books: Book[];
  isCollapsed = false;

  constructor (private demo: DemoService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.demo.getBooks()
      .subscribe(books => { this.books = books; });
  }
}

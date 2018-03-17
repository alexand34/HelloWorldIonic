import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookPage } from './../book/book';



export class Book {
  label: string;
  file: string;
  imgName: string;
}

@Component({
  selector: 'index',
  templateUrl: 'index.html'
})

export class IndexPage {
  books: {}[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {  
    this.books = [];

    let book1 = new Book();
    book1.label = "Moby Dick";
    book1.file =  "assets/books/moby-dick.epub";
    book1.imgName = "assets/icon/moby-dick.png"
    this.books.push(book1);

    let book2 = new Book();
    book2.label = "Alice in Wonderland";
    book2.file =  "assets/books/allice-in-wonderland.epub";
    book2.imgName = "assets/icon/allice-in-wonderland.ico"
    this.books.push(book2);
  }

  show(book) {
    console.log('show', book);
    this.navCtrl.push(BookPage, {
      book: book
    });
  }
}


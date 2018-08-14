import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ManageComponent } from './components/manage/manage.component';
import { BooksComponent } from './components/books/books.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';

import { BookService } from './services/book.service';
import { GlobalService } from './services/global.service';
import { AddbookComponent } from './components/addbook/addbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ManageComponent,
    BookComponent,
    BooklistComponent,
    NavbarAdminComponent,
    CartComponent,
    FooterAdminComponent,
    AboutComponent,
    BooksComponent,
    BookComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BookService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoModule } from './to-do/to-do.module';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { LoginWindowComponent } from './components/login-window/login-window.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { NotFoundWindowComponent } from './components/not-found-window/not-found-window.component';
import { NbpWindowComponent } from './components/nbp-window/nbp-window.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    LoginWindowComponent,
    ProductsComponent,
    MainWindowComponent,
    NotFoundWindowComponent,
    NbpWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToDoModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

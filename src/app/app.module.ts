import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMangaComponent } from './header-manga/header-manga.component';
import { FooterMangaComponent } from './footer-manga/footer-manga.component';
import { HomeMangaComponent } from './home-manga/home-manga.component';
import { DetailMangaComponent } from './detail-manga/detail-manga.component';
import { NarbarMangaComponent } from './narbar-manga/narbar-manga.component';
import { SidebarMangaComponent } from './sidebar-manga/sidebar-manga.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMangaComponent,
    FooterMangaComponent,
    HomeMangaComponent,
    DetailMangaComponent,
    NarbarMangaComponent,
    SidebarMangaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisageComponent } from './visage/visage.component';
import { CorpsComponent } from './corps/corps.component';
import { RegardComponent } from './regard/regard.component';
import { MassageComponent } from './massage/massage.component';
import { EpilationComponent } from './epilation/epilation.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { InfosComponent } from './infos/infos.component';

@NgModule({
  declarations: [
    AppComponent,
    VisageComponent,
    CorpsComponent,
    RegardComponent,
    MassageComponent,
    EpilationComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

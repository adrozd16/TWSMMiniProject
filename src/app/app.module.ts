import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactComponent } from './components/contact/contact.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { CharacterConfiguratorComponent } from './components/character-configurator/character-configurator.component';
import { UserCharactersComponent } from './components/user-characters/user-characters.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    PageHeaderComponent,
    HomepageComponent,
    ContactComponent,
    CharacterConfiguratorComponent,
    UserCharactersComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    //Material design
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule { }

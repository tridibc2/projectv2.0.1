import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ClientModule } from './client/client-routing/client.module';
import { AdminModule } from './admin/admin-routing/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './client/shared/navbar/navbar.component';
import { FooterComponent } from './client/shared/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './client/home/home.component';
import { ContactModalComponent } from './client/shared/contact-modal/contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    ContactModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    AdminModule,
    ClientModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ContactModalComponent
  ]
})
export class AppModule { }

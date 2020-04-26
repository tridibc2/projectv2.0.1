import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { BlogHomeComponent } from '../blog-home/blog-home.component';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { PricingComponent } from '../pricing/pricing.component';
import { BlogCategoryComponent } from '../blog-category/blog-category.component';
import { BlogByCategoryComponent } from '../blog-by-category/blog-by-category.component';
import { RecentBlogComponent } from '../recent-blog/recent-blog.component';
import { ServicesComponent } from '../services/services.component';



@NgModule({
  declarations: [
    BlogHomeComponent,
    BlogDetailComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    PricingComponent,
    BlogCategoryComponent,
    BlogByCategoryComponent,
    RecentBlogComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }

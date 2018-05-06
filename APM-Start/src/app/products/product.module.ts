import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ConvertToSpacePipe,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate: [ProductGuardService],
        component: ProductDetailComponent }
    ]),
    SharedModule,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }

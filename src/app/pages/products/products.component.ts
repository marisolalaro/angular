import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {ProductComponent}from './../../components/product/product.component';
import { product } from './../../models/product.model';


@Component({
  standalone:true,
  imports: [ProductComponent, CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  http =inject(HttpClient);
  product: product[] =[];

  ngOnInit(){
    this.http.get<product[]> ('https://api.escuelajs.co/api/v1/products')
    .subscribe((data) => {
     this.product=data;
    });

  }

}

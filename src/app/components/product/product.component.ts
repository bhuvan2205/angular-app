import { ProductService } from './ProductService.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  product: any = {};
  id: string | any;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getData(this.id).subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
    });
  }
}

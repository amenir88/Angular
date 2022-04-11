import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  list : Product[];
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
this.ps.getAllProducts().subscribe(res=>this.list=res);

  }

}

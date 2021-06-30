import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  products$: Observable<any[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll().snapshotChanges();
   }

  ngOnInit(): void {
  }

}

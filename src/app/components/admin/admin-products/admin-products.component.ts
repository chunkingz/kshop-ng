import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/iProduct';
import { IProductDataKey } from 'src/app/models/iProductDataKey';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products!: IProduct[] | any;
  filteredProducts!: any[];
  subscription: Subscription;


  constructor(private productService: ProductService) {
    
    this.subscription = productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products; 
    });
    
   }

  ngOnInit() {
  }

  filter(query: string){
    
    this.filteredProducts = (query) ? 
    this.products.filter((p: IProductDataKey) => p.data.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : 
    this.products;
  }

  delete(id: any){
    if(confirm('Are you sure you want to delete this product?')){
      this.productService.delete(id);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

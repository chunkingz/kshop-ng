import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { switchMap } from 'rxjs/operators';


interface iProducts {
  data: {
    category: string;
    imageUrl: string;
    price: number;
    title: string;
  };
  key: string | null;
}[]

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  products!: any[];
  subscription: Subscription;
  categories$: any;
  category!: any;
  filteredProducts!: any[];


  constructor(productService: ProductService, categoryService: CategoryService, route: ActivatedRoute) {

    this.subscription = productService.getAll().pipe(switchMap(products => {
      this.products = products;
      return route.queryParamMap;
    })).subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = (this.category) ? 
          this.products.filter(p => p.data.category === this.category) : 
          this.products;
      })
    

    this.categories$ = categoryService.getAll().snapshotChanges();

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

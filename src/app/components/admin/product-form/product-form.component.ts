import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  categories$: Observable<any[]>;
  product: any[] = [];

  constructor(
    categoryService: CategoryService, 
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
    ) {
    
      this.categories$ = categoryService.getCategories().snapshotChanges();

      let id = route.snapshot.paramMap.get('id');
      
      if(id) {
        let x = productService.getOneProduct(id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);
        
      }
   }

   save(product: any){
     this.productService.create(product);
     this.router.navigate(['/admin/products']);
   }

}

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
  product: Object | any = {};
  id: any;

  constructor(
    categoryService: CategoryService, 
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
    ) {
    
      this.categories$ = categoryService.getCategories().snapshotChanges();

      this.id = route.snapshot.paramMap.get('id');
      
      if(this.id) productService.getOneProduct(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);
   }

   save(product: Object){
     if(this.id) this.productService.update(this.id, product);
     else this.productService.create(product);
     
     this.router.navigate(['/admin/products']);
   }

   delete(){
     if(confirm('Are you sure you want to delete this product?')){
       this.productService.delete(this.id);
       this.router.navigate(['/admin/products']);
     }
   }

}

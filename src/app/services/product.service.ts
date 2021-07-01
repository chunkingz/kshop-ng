import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: Object){
    return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const key = a.payload.key;
        const data = a.payload.val();
        return {data, key};
      })
    }));
  }

  getOneProduct(productId: string){
    return this.db.object('/products/' + productId);
  }

  update(productId: string, product: Object){
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId: string){
    return this.db.object('/products/' + productId).remove();
  }
}

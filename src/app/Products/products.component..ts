import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { productsCall } from '../Store Management/Store/actions';
import { UserService } from '../Chat/userService/user.service';
import { map } from 'rxjs/operators';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent {

    productData: any;
    cartItems: any[] = [];
    id = 1;

    constructor(private httpClient: HttpClient, private router: Router,private store:Store,private userService:UserService) { }

    ngOnInit() {
        this.button();
        this.userService.storeProducts();
        this.httpClient
            .get('https://fakestoreapi.com/products')
            .subscribe((res) => {
                this.productData = res;
                // Initialize addedCart property for each product
                this.productData.forEach((product) => {
                    console.log(typeof (product), "Type...")
                    product.addedCart = false;
                    product.quantity = 0;
                });
            });
    
          this.userService.productList.subscribe((res)=>{console.log(res,"line 37");
            // this.productData= JSON.parse(JSON.stringify(res?.products));
            this.productData = res.products;
                    // Initialize addedCart property for each product
                    // this.productData.forEach((product) => {
                    //     console.log(typeof (product), "Type...")
                    //     product.addedCart = false;
                    //     product.quantity = 0;
                    // });
          })
        
    }

    getProducts() {
        console.log(this.productData);
    }

    removeCart() {
        this.cartItems = [];
        this.productData.forEach((product) => {
            product.addedCart = false;
        });
    }

    addCart(index: any) {
        
        const selectedProduct = this.productData[index];
        selectedProduct.quantity = 1;
        if (!selectedProduct.addedCart) {
            // If the product is not in the cart, add it
            this.cartItems.push(selectedProduct);
            selectedProduct.addedCart = true;
        } else {
            // If the product is already in the cart, you can handle it as needed
            console.log('Product is already in the cart');
        }
        console.log(this.productData, 'Products');
        console.log(this.cartItems, 'Length of Cart Items');
    }
    increaseQuantity(data) {
        data.quantity = data.quantity + 1;
        this.cartItems.forEach((v, i) => {
            if (v.id === data.id) {
                this.cartItems[i].quantity + 1;
                // this.productData.forEach((value, index) => {
                //   if (value.id == v.id) {
                //     this.productData[index].quantity++;
                //   }
                // });
            }
        });
    }
    decreaseQuantity(data) {
        console.log(data, '111');
        data.quantity = data.quantity - 1;

        if (data.quantity > 1) {
            this.cartItems.forEach((v, i) => {
                if (v.id === data.id) {
                    this.cartItems[i].quantity - 1;
                    // this.productData.forEach((value, index) => {
                    //   if (value.id == v.id) {
                    //     this.productData[index].quantity--;
                    //   }
                    // });
                }
            });
        } else {
            this.cartItems.forEach((v, i) => {
                if (data.id == v.id) {
                    this.cartItems[i].quantity = 0;
                    this.cartItems.splice(i, 1);
                    this.productData.forEach((value, index) => {
                        if (value.id == v.id) {
                            this.productData[index].quantity = 0;
                            this.productData[index].addedCart = false;
                        }
                    });
                }
            });
        }
    }

    goToDetails(id: number) {
        const test = { username: "admin", password: "admin" }
        this.router.navigate(['/pr-details', id],
            {
                // skipLocationChange: true,
                state: { data: test },
                replaceUrl: true
            }
        )
        // let filterdUser=this.productData.filter((data:any)=>data.id==id)
        // console.log(filterdUser,"User has filtered")
       
    }
    navTo(path: string) {
        console.log(path, "Loadead")
        this.router.navigate(['products/offers'])
    }

    button(){
        this.store.dispatch(productsCall());
    }
}
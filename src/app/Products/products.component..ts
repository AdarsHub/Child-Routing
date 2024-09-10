import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
    // ======  this View child can helps us to know the current height and width for the image ======
    // @ViewChildren('image') images: QueryList<ElementRef>;
    productData: any;
    cartItems: any[] = [];
    id = 1;
    testStr: string = "testStr";
    testStr2: String = "teststr";
    constructor(private httpClient: HttpClient, private router: Router, private store: Store, private userService: UserService) { }

    ngOnInit() {
        console.log("Loaded...111")
        this.remDuplicates();
        console.log(typeof (this.testStr), "string====", typeof (this.testStr2), "String===")
        this.button();
        // this.userService.storeProducts();
        this.httpClient
            .get('https://fakestoreapi.com/products')
            .subscribe((res) => {
                console.log(res,"Response... 111")
                this.productData = res;
                // Initialize addedCart property for each product
                this.productData.forEach((product:any) => {
                    console.log(typeof (product), "Type...")
                    product.addedCart = false;
                    product.quantity = 0;
                });
            });

        // this.userService.productList.subscribe((res) => {
        //     console.log(res, "line 37");
        //     console.log(res, "line 37");
        //     // this.productData= JSON.parse(JSON.stringify(res?.products));
        //     this.productData = res.products;
            // Initialize addedCart property for each product
            // this.productData.forEach((product) => {
            //     console.log(typeof (product), "Type...")
            //     product.addedCart = false;
            //     product.quantity = 0;
            // });
        // })

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
        const test = { username: "admin", password: "admin" };
        const items=JSON.parse(localStorage.getItem('details'));
        console.log(items,"111");
        items.forEach((val,ind)=>{
            if(val.id===id){
            //   items.quantity=
            }
            else{

            }
        })
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

    button() {
        this.store.dispatch(productsCall());
    }
    remDuplicates() {
        const arr = [10, 2, 6, 2, 8, 5, 4, 6, 4, 6, 9, 4, 6, 7, 1];
        // let fltrArr=arr.filter((val,ind)=>{
        //     return arr.indexOf(val)===ind
        // })
        // const fltr=[...new Set(arr)];
        // console.log(fltrArr,"222", fltr) 
        let unqArr = [];
        arr.forEach((val, index) => {
            if (unqArr.indexOf(val) === -1) {
                unqArr.push(val)
            }
        })
        console.log(unqArr, "Unique");

    }

    // =====================In Future it helps us for reach the image height =====================
    // ngAfterViewInit() {
    //     this.addDummyImages(3);
    //     console.log("Console Triggered");

    //     this.images.forEach((imageElement: ElementRef) => {
    //       const image = imageElement.nativeElement;
    //       const width = image.offsetWidth;
    //       const height = image.offsetHeight;

    //       console.log(`Width: ${width}, Height: ${height}`);
    //     });
    //   }
    //   onImageLoad(event: Event) {
    //     const img = event.target as HTMLImageElement;
    //     const width = img.offsetWidth;
    //     const height = img.offsetHeight;

    //     console.log(`Image Loaded - Width: ${width}, Height: ${height}`);
    //     this.productData.forEach((val)=>{
    //         // val.image.push('data:image/jpeg;base64,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')
    //   const data=val.image as any;
    //   data.push("");
    //     })

    //       }
    //       nxt(d:any){
    //         console.log(d,"Triggered..")
    //       }

    //       addDummyImages(count: number) {
    //         for (let i = 1; i <= 1; i++) {
    //             this.productData=JSON.parse(JSON.stringify(this.productData))
    //             this.productData.imageUrl=["data:image/jpeg;base64,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",
    //             "   data:image/jpeg;base64,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",
    //             "https://tinypng.com/images/social/website.jpg"];    
    //     }
    //     console.log("Test Products" , this.productData,count)
}



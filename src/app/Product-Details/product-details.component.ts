import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FigletServieService } from '../Services/figlet-servie.service';
import { UserService } from '../Chat/userService/user.service';
import { CartService } from '../Services/Cart-Service/cart.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
    title = 'angular11-app';
    products: any;
    selectedProduct: any;
    param_Id: any;
    loader: boolean = false;
    styleText: any;
    detailsArr: any = ["Adarsh", "22", "Male"]

    addedCart: boolean = false;
    checkProduct: any;
    productSelected: boolean = false;
    isLoader: any;

    constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private figletService: FigletServieService,
        private userService: UserService, private cartService: CartService) {
        // console.log("%cHello, " + "World", "color:white;background-color:cornflowerblue;");
        this.route.params.subscribe((param: any) => {
            // console.log(param, 'Params')
            this.param_Id = param.id;
            const navigation = this.router.getCurrentNavigation();
            // console.log(navigation, "Navigation....");
            const data = navigation?.extras.state?.data;
            // console.log(data, "State Data ")
            // setTimeout(() => {
            //     this.getProduct(this.param_Id)
            // }, 1000);

        })
        this.http.get('https://fakestoreapi.com/products').subscribe((res: any) => {
            this.products = res;
            this.getProduct(this.param_Id)
            // })
            // this.userService.productList.subscribe((res)=>{console.log(res,"line 37");
            //     // this.products= JSON.parse(JSON.stringify(res?.products));
            //     this.products = res.products;
            //     this.getProduct(this.param_Id)
        })
        this.userService.productList.subscribe((res) => {
            // console.log(res, "line 37");
            // this.products= JSON.parse(JSON.stringify(res?.products));
            this.products = res.products;
            this.getProduct(this.param_Id)
            // Initialize addedCart property for each product
            // this.products.forEach((product) => {
            //     console.log(typeof (product), "Type...")
            //     product.addedCart = false;
            //     product.quantity = 0;
            // });
        })


    }
    ngOnInit() {
        // console.log(this.getProduct(this.param_Id).subscribe(res=>{console.log(res,"Filtered Res")}),"PRoduct")
        this.figletService.stylizeText(" Angular ")
            .subscribe(
                data => {
                    console.log("%c" + data, "color:white;background-color:cornflowerblue;");
                    this.styleText = data;
                },
                err => {
                    console.error('Error styling text', err);
                }
            );

    }

    getProduct(id: any) {
        this.checkProduct = JSON.parse(localStorage.getItem("details"));
        console.log("===84",this.checkProduct)
        this.products?.forEach((val: any) => {
            if (val.id == this.param_Id) {
                this.selectedProduct = val;
                this.checkProduct.forEach((value, ind) => {
                    if (value.id == this.param_Id) {
                        this.productSelected = true;
                    }
                })

                // console.log(this.selectedProduct, 'The Product u have selected...')
            }
        })
        console.log("Pr Select",this.productSelected)
    }
    gotoShop() {
        this.router.navigate(['/products'])
    }
    addToBag(prod: any) {
        
        this.addedCart = true;
        this.cartService.addToCart(prod);
        setTimeout(() => {
            this.addedCart = false;
            this.router.navigate(['/cart'])
        }, 3000);
    }
    goToCart(selectedProduct){
        this.router.navigate(['/cart'])
    }
    loder(e){
        // console.log(e,"Data Received from the parent")
        this.isLoader=e;
      }
}

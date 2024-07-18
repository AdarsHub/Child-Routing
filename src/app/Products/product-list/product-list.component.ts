import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productList: Array<any> = [
    {"id":1,"product":"Chais","supplierId":1,"categoryId":1,"unit":"10 boxes x 20 bags","price":18},
    {"id":2,"product":"Chang","supplierId":1,"categoryId":1,"unit":"24 - 12 oz bottles","price":19},
    {"id":3,"product":"Aniseed Syrup","supplierId":1,"categoryId":2,"unit":"12 - 550 ml bottles","price":10},
    {"id":4,"product":"Chef Anton's Cajun Seasoning","supplierId":2,"categoryId":2,"unit":"48 - 6 oz jars","price":22},
    {"id":5,"product":"Chef Anton's Gumbo Mix","supplierId":2,"categoryId":2,"unit":"36 boxes","price":21.35},
    {"id":6,"product":"Grandma's Boysenberry Spread","supplierId":3,"categoryId":2,"unit":"12 - 8 oz jars","price":25},
    {"id":7,"product":"Uncle Bob's Organic Dried Pears","supplierId":3,"categoryId":7,"unit":"12 - 1 lb pkgs.","price":30},
    {"id":8,"product":"Northwoods Cranberry Sauce","supplierId":3,"categoryId":2,"unit":"12 - 12 oz jars","price":40},
    {"id":9,"product":"Mishi Kobe Niku","supplierId":4,"categoryId":6,"unit":"18 - 500 g pkgs.","price":97},
    {"id":10,"product":"Ikura","supplierId":4,"categoryId":8,"unit":"12 - 200 ml jars","price":31},
    {"id":11,"product":"Queso Cabrales","supplierId":5,"categoryId":4,"unit":"1 kg pkg.","price":21},
    {"id":12,"product":"Queso Manchego La Pastora","supplierId":5,"categoryId":4,"unit":"10 - 500 g pkgs.","price":38},
    {"id":14,"product":"Tofu","supplierId":6,"categoryId":7,"unit":"40 - 100 g pkgs.","price":23.25},
    {"id":15,"product":"Genen Shouyu","supplierId":6,"categoryId":2,"unit":"24 - 250 ml bottles","price":15.5},
    {"id":16,"product":"Pavlova","supplierId":7,"categoryId":3,"unit":"32 - 500 g boxes","price":17.45},
    {"id":17,"product":"Alice Mutton","supplierId":7,"categoryId":6,"unit":"20 - 1 kg tins","price":39},
    {"id":18,"product":"Carnarvon Tigers","supplierId":7,"categoryId":8,"unit":"16 kg pkg.","price":62.5},
    {"id":20,"product":"Sir Rodney's Marmalade","supplierId":8,"categoryId":3,"unit":"30 gift boxes","price":81},
    {"id":21,"product":"Sir Rodney's Scones","supplierId":8,"categoryId":3,"unit":"24 pkgs. x 4 pieces","price":10},
    {"id":22,"product":"Gustaf's Kn�ckebr�d","supplierId":9,"categoryId":5,"unit":"24 - 500 g pkgs.","price":21},
    {"id":25,"product":"NuNuCa Nu�-Nougat-Creme","supplierId":11,"categoryId":3,"unit":"20 - 450 g glasses","price":14}
  ];
}

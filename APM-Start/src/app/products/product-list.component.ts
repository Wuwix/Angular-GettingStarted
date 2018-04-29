import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { IProduct } from "./product";

@Component({
  // selector : 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Lista produktów';
    imageWidth: number = 50;
    imageMargin: number = 3;
    showImage: boolean = true;
    errorMessage: any;
    _listFilter: string;

    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];

  constructor(private _productService: ProductService) {
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Prudct List: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 || 
      product.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
   
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("on init")
    this._productService.getProducts()
          .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
                     error => this.errorMessage = <any>error);

    this.filteredProducts = this.products;
  }
}


// ctrl + Shift + P 
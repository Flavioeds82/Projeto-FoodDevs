export type CategoryResponse = {
   error:  string;
   result: Category[];
}

export type Category = {
   id:    number;
   name:  string;
   image: string;
}

export interface ProductResponse {
   error:  string;
   result: Products;
}

export interface Products {
   total: number;
   page:  number;
   pages: number;
   data:  Product[];
}

export interface Product {
   id:          number;
   category:    Category;
   name:        string;
   image:       string;
   price:       number;
   ingredients: string;
   points:      number;
   qt ?:        number;
}

export interface fieldList {
   category ?: number;
   page ?:     number;
   search ?:   string;
}
export interface initialStateCart{
   products: Product[];
   address: string[];
   discount: number;
   delivery: number;
};

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
   result: Product;
}

export interface Product {
   id:          number;
   category:    Category;
   name:        string;
   image:       string;
   price:       number;
   ingredients: string;
   points:      number;
}
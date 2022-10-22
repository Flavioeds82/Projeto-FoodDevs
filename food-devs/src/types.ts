export type CategoryResponse = {
   error:  string;
   result: Category[];
}

export type Category = {
   id:    number;
   name:  string;
   image: string;
}
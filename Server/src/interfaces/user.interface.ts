
export interface ICreateUser{
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface ILogin{
    email: string;
    password: string;
    role: string;
}


export interface ICreateShop{
    name: string;
    title: string;
    description: string;
    sellerId: string;

}

export interface ICreateProduct{
    name: string;
    price: number;
    title: string;
    description: string;
    category: string;
    sellerId: string;
    shopId: string;
    images?: string[];
}

export interface ICreateAdmin{
    name: string;
    email: string;
    password: string;
}

export interface ILoginAdmin{
    email: string;
    password: string;
}

export interface IAddCart {
  userId: string;
  productId: string;
}

export interface IAddWishlist {
  userId: string;
  productId: string;
}

export interface ICreateOrder {
  userId: string;

  products: {
    productId: string;
    quantity: number;
  }[];
}
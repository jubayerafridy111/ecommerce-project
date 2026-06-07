
export interface ICreateUser{
    name: string;
    email: string;
    password: string;
}

export interface ILogin{
    email: string;
    password: string;
}

export interface ICreateSeller{
    name: string;
    email: string;
    password: string;
}

export interface ILoginSeller{
    email: string;
    password: string;
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
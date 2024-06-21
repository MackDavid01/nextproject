export interface iUser{
    name:string,
    email:string,
    password:string,
}


export interface iUserData extends iUser, Document{}


export interface iProduct{
    name:string,
    image:string,
}


export interface iProductData extends iProduct, Document{}
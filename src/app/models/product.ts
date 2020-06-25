export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    restaurantId: number;

    constructor(id, name, description='', price=0, imageUrl='https://lh3.googleusercontent.com/proxy/5gsBhhib2Sk01YNfSoxrP2QncOOKl-DvqquI1Y7rFJzJhKKG1mWBiXu-XJt0osjY9VPIdymL4ALAMvWK8CahFGhXRD6-pa-dzWocR90jS116SdpQVHF8Ujg'){
        this.id=id;
        this.name= name;
        this.description= description;
        this.price=price;
        this.imageUrl=imageUrl;
    }
}


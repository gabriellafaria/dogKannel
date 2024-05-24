import { PetShop } from '../entities/PetShop';
import { PetShopRepository } from './petshop-repository';

interface PetShopData {
  name: string;
  distance: number;
  price: number;
}

interface PetShopReply {
  name: string;
  price: number;
}

export class InMemoryPetShopRepository implements PetShopRepository {
  public petShops: PetShop[];

    constructor() {
      this.petShops = [
          new PetShop("Meu Canino Feliz", 2, 20, 40, 24, 48),
          new PetShop("Vai Rex", 1.7, 15, 50, 20, 55),
          new PetShop("ChowChawgas", 0.8, 30, 45),
      ];
    }


    async findAll() {
        return this.petShops;
    }


    async findByName(name: string) {
      const petShop = this.petShops.find(petShop => petShop.getTitle === name);

      if (!petShop) {
        return null
      }

      return petShop
    }

    async calculatePrice(date: Date, amountSmallDogs: number, amountBigDogs: number) {
      const data: PetShopData[] = []; 
      const prices: number[] = [];

      this.petShops.forEach((petShop) => {
        prices.push(petShop.calculatePrice(date, amountSmallDogs, amountBigDogs));

        data.push({ name: petShop.getTitle, distance: petShop.getDistanceInKilometers, price: petShop.calculatePrice(date, amountSmallDogs, amountBigDogs) });
      })

      return this.comparePrice(data);
    }
     
    async comparePrice(shops: PetShopData[]): Promise<PetShopReply> {
      const best = shops.reduce((prev, current) => {
        return prev.price < current.price ? prev : current;
      })

      const response = {
        name: best.name,
        price: best.price
      }
      
      return response;
    }
}
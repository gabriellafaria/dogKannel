import { PetShop } from '../entities/PetShop';

interface PetShopReply {
  name: string;
  price: number;
}

export interface PetShopRepository {
  findAll(): Promise<PetShop[]>;
  findByName(name: string): Promise<PetShop | null>;
  calculatePrice(date: Date, amountSmallDogs: number, amountBigDogs: number): Promise<PetShopReply| null>;
}
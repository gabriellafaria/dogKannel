export class PetShop {
  protected title: string;
  protected distanceInKilometers: number;
  protected smallDogPrice: number;
  protected bigDogPrice: number;
  protected weekendSmallDogPrice: number
  protected weekendBigDogPrice: number

  constructor(title: string, distanceInKilometers: number, smallDogPrice: number, bigDogPrice: number, weekendSmallDogPrice?: number, weekendBigDogPrice?: number) {
    this.title = title;
    this.distanceInKilometers = distanceInKilometers;
    this.smallDogPrice = smallDogPrice;
    this.bigDogPrice = bigDogPrice;
    this.weekendSmallDogPrice = weekendSmallDogPrice ?? smallDogPrice;
    this.weekendBigDogPrice = weekendBigDogPrice ?? bigDogPrice;
  }

  public isWeekend(date: Date): boolean {
    return date.getDay() === 0 || date.getDay() === 6 ? true : false
  }

  public calculatePrice(date: Date, amountSmallDogs: number, amountBigDogs: number): number {
    return this.isWeekend(date) ? this.weekendSmallDogPrice * amountSmallDogs + this.weekendBigDogPrice * amountBigDogs : this.smallDogPrice * amountSmallDogs + this.bigDogPrice * amountBigDogs
  }

  get getTitle(): string {
    return this.title;
  }

  get getDistanceInKilometers(): number {
    return this.distanceInKilometers;
  }

  get getSmallDogPrice(): number {
    return this.smallDogPrice;
  }

  get getBigDogPrice(): number {
    return this.bigDogPrice;
  }

  get getWeekendSmallDogPrice(): number {
    return this.weekendSmallDogPrice;
  }

  get getWeekendBigDogPrice(): number {
    return this.weekendBigDogPrice;
  }
} 
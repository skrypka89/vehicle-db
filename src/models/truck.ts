import Vehicle from "./vehicle";

export default class Truck extends Vehicle {
  capacity: number;

  constructor(
    vin: string,
    width: number,
    weight: number,
    brand: string,
    model: string,
    govNumber: string,
    capacity: number
  ) {
    super(
      vin,
      width,
      weight,
      brand,
      model,
      govNumber
    );

    this.capacity = capacity;
  }
}
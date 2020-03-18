import Vehicle from "./vehicle";

export default class Car extends Vehicle {
  constructor(
    vin: string,
    width: number,
    weight: number,
    brand: string,
    model: string,
    govNumber: string
  ) {
    super(
      vin,
      width,
      weight,
      brand,
      model,
      govNumber
    );
  }
}
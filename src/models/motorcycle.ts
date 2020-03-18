import Vehicle from "./vehicle";

export default class Motorcycle extends Vehicle {
  displacement: number;

  constructor(
    vin: string,
    width: number,
    weight: number,
    brand: string,
    model: string,
    govNumber: string,
    displacement: number
  ) {
    super(
      vin,
      width,
      weight,
      brand,
      model,
      govNumber
    );

    this.displacement = displacement;
  }
}
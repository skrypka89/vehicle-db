let lastId: number = 0;

export default abstract class Vehicle {
  id: number;
  vin: string;
  width: number;
  weight: number;
  brand: string;
  model: string;
  govNumber: string;

  constructor(
    vin: string,
    width: number,
    weight: number,
    brand: string,
    model: string,
    govNumber: string
  ) {
    this.id = ++lastId;
    this.vin = vin;
    this.width = width;
    this.weight = weight;
    this.brand = brand;
    this.model = model;
    this.govNumber = govNumber;
  }
}
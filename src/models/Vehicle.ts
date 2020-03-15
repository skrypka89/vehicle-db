import dataStorage from "../data/index";

export default abstract class Vehicle {
  id: number;
  vin: string;
  width: number;
  weight: number;
  brand: string;
  model: string;
  govNumber: string;

  constructor(
    theVin: string,
    theWidth: number,
    theWeight: number,
    theBrand: string,
    theModel: string,
    theGovNumber: string
  ) {
    this.id = dataStorage.createId();
    this.vin = theVin;
    this.width = theWidth;
    this.weight = theWeight;
    this.brand = theBrand;
    this.model = theModel;
    this.govNumber = theGovNumber;
  }
}
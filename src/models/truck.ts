import Vehicle from "./vehicle";

export default class Truck extends Vehicle {
  capacity: number;

  constructor(
    theVin: string,
    theWidth: number,
    theWeight: number,
    theBrand: string,
    theModel: string,
    theGovNumber: string,
    theCapacity: number
  ) {
    super(
      theVin,
      theWidth,
      theWeight,
      theBrand,
      theModel,
      theGovNumber
    );

    this.capacity = theCapacity;
  }
}
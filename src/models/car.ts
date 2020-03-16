import Vehicle from "./vehicle";

export default class Car extends Vehicle {
  constructor(
    theVin: string,
    theWidth: number,
    theWeight: number,
    theBrand: string,
    theModel: string,
    theGovNumber: string
  ) {
    super(
      theVin,
      theWidth,
      theWeight,
      theBrand,
      theModel,
      theGovNumber
    );
  }
}
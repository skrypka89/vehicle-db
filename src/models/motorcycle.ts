import Vehicle from "./vehicle";

export default class Motorcycle extends Vehicle {
  displacement: number;

  constructor(
    theVin: string,
    theWidth: number,
    theWeight: number,
    theBrand: string,
    theModel: string,
    theGovNumber: string,
    theDisplacement: number
  ) {
    super(
      theVin,
      theWidth,
      theWeight,
      theBrand,
      theModel,
      theGovNumber
    );

    this.displacement = theDisplacement;
  }
}
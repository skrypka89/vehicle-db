import Vehicle from "./vehicle";

export default class Motorcycle extends Vehicle {
  tankVolume: number;

  constructor(
    theVin: string,
    theWidth: number,
    theWeight: number,
    theBrand: string,
    theModel: string,
    theGovNumber: string,
    theTankVolume: number
  ) {
    super(
      theVin,
      theWidth,
      theWeight,
      theBrand,
      theModel,
      theGovNumber
    );

    this.tankVolume = theTankVolume;
  }
}
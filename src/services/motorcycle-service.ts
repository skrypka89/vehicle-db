import VehicleService from "./vehicle-service";
import Motorcycle from "../models/motorcycle";
import { IVehicleService } from "./i-vehicle-service";

export default class MotorcycleService extends VehicleService<Motorcycle> implements IVehicleService<Motorcycle> {
  protected data: Motorcycle[];
}
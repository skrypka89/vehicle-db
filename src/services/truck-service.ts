import VehicleService from "./vehicle-service";
import Truck from "../models/truck";
import { IVehicleService } from "./i-vehicle-service";

export default class TruckService extends VehicleService<Truck> implements IVehicleService<Truck> {
  protected data: Truck[];
}
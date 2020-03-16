import VehicleService from "./vehicle-service";
import Car from "../models/car";
import { IVehicleService } from "./i-vehicle-service";

export default class CarService extends VehicleService<Car> implements IVehicleService<Car> {}
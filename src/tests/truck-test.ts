import Truck from "../models/truck";
import { IVehicleService } from "../services/i-vehicle-service";
import TruckService from "../services/truck-service";

const truck1 = new Truck(
  'YV2A4B2A0WA280909',
  3906,
  18500,
  'VOLVO',
  'FH 12',
  'СВ0473KA',
  8500
);
const truck2 = new Truck(
  'XLER6X20004477365',
  3450,
  18000,
  'SCANIA',
  'R380 CR19',
  'СВ4502АM',
  10300
);
const truckService: IVehicleService<Truck> = new TruckService();

console.log(truckService.getAll());
truckService.create(truck2);
truckService.create(truck1);
console.log(truckService.getAll());
truck1.weight = 18200;
truckService.update(truck1);
console.log(truckService.getById(truck1.id));
truckService.delete(truck2.id);
console.log(truckService.getAll());
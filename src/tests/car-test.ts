import Car from "../models/car";
import { IVehicleService } from "../services/i-vehicle-service";
import CarService from "../services/car-service";

const car1 = new Car(
  'JMZGG82L601697808',
  1450,
  1680,
  'MAZDA',
  '6 SDN',
  'СВ9702ВЕ'
);
const car2 = new Car(
  'NLAFD75708W060529',
  1433,
  1790,
  'HONDA',
  'CIVIC',
  'СВ5608АТ'
);
const carService: IVehicleService<Car> = new CarService();

console.log(carService.getAll());
carService.create(car2);
carService.create(car1);
console.log(carService.getAll());
car1.weight = 1700;
carService.update(car1);
console.log(carService.getById(car1.id));
carService.delete(car2.id);
console.log(carService.getAll());
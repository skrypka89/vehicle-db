import Motorcycle from "../models/motorcycle";
import { IVehicleService } from "../services/i-vehicle-service";
import MotorcycleService from "../services/motorcycle-service";

const motorcycle1 = new Motorcycle(
  'JS1GN7DA272101416',
  1125,
  193,
  'SUZUKI',
  'GSX-R600',
  'СВ8934AI',
  600
);
const motorcycle2 = new Motorcycle(
  'JH2RC88L0GK000002',
  1285,
  220,
  'HONDA',
  '750X / DCT',
  'СВ5601СВ',
  745
);
const motorcycleService: IVehicleService<Motorcycle> = new MotorcycleService();

console.log(motorcycleService.getAll());
motorcycleService.create(motorcycle2);
motorcycleService.create(motorcycle1);
console.log(motorcycleService.getAll());
motorcycle1.weight = 163;
motorcycleService.update(motorcycle1);
console.log(motorcycleService.getById(motorcycle1.id));
motorcycleService.delete(motorcycle2.id);
console.log(motorcycleService.getAll());
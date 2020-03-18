import Vehicle from "../models/vehicle";

export interface IVehicleService<T extends Vehicle> {
  create(entity: T): void;
  getAll(): T[];
  getById(id: number): T | undefined;
  update(entity: T): void;
  delete(id: number): void;
}
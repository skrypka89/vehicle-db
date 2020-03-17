import Vehicle from "../models/vehicle";

export abstract class Data<T extends Vehicle> {
  protected data: T[];
}

export interface IVehicleService<T extends Vehicle> extends Data<T> {
  create(entity: T): void;
  getAll(): T[];
  getById(id: number): T;
  update(entity: T): void;
  delete(id: number): void;
}
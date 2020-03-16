import Vehicle from "../models/vehicle";
import { IVehicleService } from "./i-vehicle-service";

export default abstract class VehicleService<T extends Vehicle> implements IVehicleService<T> {
  private data: T[];

  create(entity: T): void {
    this.data.push(entity);
  }

  getAll(): T[] {
    return this.data;
  }

  getById(id: number): T {
    return this.data.find((datum: T): boolean =>
      datum.id == id
    );
  }

  update(entity: T): void {
    this.data = this.data.map((datum: T): T => {
      if (datum.id != entity.id) return datum;
      
      return entity;
    });
  }

  delete(id: number): void {
    this.data = this.data.filter((datum: T): boolean =>
      datum.id != id
    );
  }
}
import Vehicle from "../models/vehicle";
import { IVehicleService } from "./i-vehicle-service";

export default abstract class VehicleService<T extends Vehicle> implements IVehicleService<T> {
  protected data: T[] = [];
  
  create(entity: T): void {
    this.data.push(entity);
  }

  getAll(): T[] {
    return this.data;
  }

  getById(id: number): T | undefined {
    return this.data.find(el =>
      el.id === id
    );
  }

  update(entity: T): void {
    this.data = this.data.map(el => {
      if (el.id !== entity.id) return el;
      
      return entity;
    });
  }

  delete(id: number): void {
    this.data = this.data.filter(el =>
      el.id !== id
    );
  }
}
import { IData } from "../data/IData";
import dataStorage from "../data/index";


export default abstract class VehicleService {
  static create(entity: IData): void {
    return dataStorage.create(entity);
  }

  static getAll(): IData[] {
    return dataStorage.readAll();
  }

  static getById(id: number): IData {
    return dataStorage.read(id);
  }

  static update(entity: IData): void {
    return dataStorage.update(entity);
  }

  static delete(id: number): void {
    return dataStorage.delete(id);
  }
}
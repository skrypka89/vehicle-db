import { IData } from "./IData";

export default class DataStorage {
  private data: IData[];
  private lastId: number;

  constructor() {
    this.lastId = 0;
  }

  createId(): number {
    return ++this.lastId;
  }

  create(entity: IData): void {
    this.data.push(entity);
  }

  readAll(): IData[] {
    return this.data;
  }

  read(id: number): IData {
    return this.data.find((datum: IData): boolean =>
      datum.id == id
    );
  }

  update(entity: IData): void {
    this.data = this.data.map((datum: IData): IData => {
      if (datum.id != entity.id) return datum;
      
      return entity;
    });
  }

  delete(id: number): void {
    this.data = this.data.filter((datum: IData): boolean =>
      datum.id != id
    );
  }
}
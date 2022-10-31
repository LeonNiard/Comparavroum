import { Injectable } from '@nestjs/common';
import { getCarList} from "./api/api.client";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCarList(): void {
    return getCarList();
  }

  getDetailsCar(carId): void {
    return this.getDetailsCar(carId);
  }
}
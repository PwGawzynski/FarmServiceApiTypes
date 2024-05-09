import { TaskType } from '../Task/Enums';

export interface OrderPriceResponseBase {
  taskType: TaskType;
  price: number;
  tax: number;
}

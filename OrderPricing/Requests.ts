import { TaskType } from '../Task/Enums';

export interface CreateOrderPriceReqI {
  order: string;
  taskType: TaskType;
  price: number;
  tax: number;
}

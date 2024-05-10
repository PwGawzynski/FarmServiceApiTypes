import { TaskType } from '../Task/Enums';

export interface CreateOrderPriceReqI {
  order: string;
  taskType: TaskType;
  prices: Map<keyof typeof TaskType, number>;
  tax: number;
}

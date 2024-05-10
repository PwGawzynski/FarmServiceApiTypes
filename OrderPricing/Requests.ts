import { TaskType } from '../Task/Enums';

export interface CreateOrderPriceReqI {
  order: string;
  prices: Map<keyof typeof TaskType, number>;
  tax: number;
}

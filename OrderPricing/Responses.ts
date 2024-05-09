import { TaskType } from '../Task/Enums';

export interface OrderPriceResponseBase {
  taskType: TaskType;
  prices: {
    [K in keyof typeof TaskType]: number;
  };
  tax: number;
}

/**
 * Describes order actual status
 */
export enum OrderStatus {
  Added,
  TaskAssigned,
  Processing,
  InAccounting,
  Done,
}

/**
 * Describes type of service which relates to the order
 */
export enum ServiceType {
  Harvesting,
  Transport,
}

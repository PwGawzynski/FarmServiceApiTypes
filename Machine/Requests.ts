export interface CreateMachineReqI {
  name: string;
  licensePlate: string;
}

export interface UpdateMachineReqI {
  machine: string;
  name: string;
  licensePlate: string;
}

export interface AssignMachinesReqI {
  taskId: string;

  machines: Array<string>;
}

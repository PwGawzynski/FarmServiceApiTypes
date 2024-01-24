import { CreateMachineReqI } from './Requests';

export type MachineResponseBase = CreateMachineReqI & { id: string };

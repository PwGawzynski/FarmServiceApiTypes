export interface TaskSessionResponseBase {
  openedAt: Date;
  closedAt?: Date | null;
  onOpenWorkerLatitude?: string;
  onopenWorkerLongitude?: string;
}

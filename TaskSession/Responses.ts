export interface TaskSessionResponseBase {
  openedAt: Date;
  closedAt?: Date | null;
  onOpenWorkerLatitude?: string;
  onOpenWorkerLongitude?: string;
  onCloseWorkerLatitude?: string;
  onCloseWorkerLongitude?: string;
}

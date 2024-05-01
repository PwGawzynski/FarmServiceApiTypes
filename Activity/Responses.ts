import { ActivityType } from './Enums';
import { UserRole } from '../User/Enums';

export interface ActivityResponseBase {
  sessionId: string;
  fieldId: string;
  taskId: string;
  causerId: string;
  causerShortcutData: {
    name: string;
    surname: string;
    role: UserRole;
  };
  fieldShortcutData: {
    nameLabel: string;
  };
  type: ActivityType;
}

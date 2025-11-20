import { RoomInterface } from '../../shared/models/room.interface';

export interface IncidentInterface {
  id: string;
  description: string;
  date: Date;
  room: RoomInterface;
}

export interface IncidentFormInterface {
  description: string;
  date: Date;
  room: string;
}

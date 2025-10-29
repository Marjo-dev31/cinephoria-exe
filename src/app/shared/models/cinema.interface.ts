import { RoomInterface } from './room.interface';

export interface CinemaInterface {
  id: string;
  city: string;
  rooms: RoomInterface[];
}

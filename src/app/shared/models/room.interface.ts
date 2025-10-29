import { CinemaInterface } from '../../shared/models/cinema.interface';

export interface RoomInterface {
  id: string;
  number: number;
  cinema: CinemaInterface;
}

export interface CinemaInterface {
  id: string;
  city: string;
  rooms: RoomInterface[];
}

export interface RoomInterface {
  id: string;
  number: number;
}

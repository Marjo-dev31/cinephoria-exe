export interface LoginCredantialInterface {
  mail: string;
  password: string;
}

export interface CurrentUserInterface {
  id: string;
  username: string;
  role: RoleInterface;
  access_token: string;
}

export interface RoleInterface {
  id: string;
  name: string;
}

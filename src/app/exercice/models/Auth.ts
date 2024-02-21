export interface LoginForm {
  login: string;
  password: string;
}

export interface RegisterForm {
  nom: string;
  roles: Role[];
  login: string;
  password: string;
  badges: Badge[]
}

export interface AuthDTO {
  login: string;
  token: string;
  roles: Role[];
}

export interface UserDTO {
  badges: Badge[]
}

enum Role {
  ADMIN,
  STUDENT
}

export enum Badge{
  JAVA,
  GIT,
  ANGULAR,
  DOCKER
}

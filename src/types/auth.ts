export enum UserRole  {
    Admin = 'admin',
    User = 'user',
};

export interface LogoutResult {
  status: "OK" | "ERROR";
  redirectTo: string;
}
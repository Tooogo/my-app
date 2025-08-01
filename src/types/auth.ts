export enum UserRole  {
    Admin = 'admin',
    User = 'user',
};

export enum LogoutStatus {
  OK = "OK",
  ERROR = "ERROR",
}

export interface LogoutResult {
  status: LogoutStatus;
  redirectTo: string;
}

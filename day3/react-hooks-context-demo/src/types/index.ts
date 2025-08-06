export interface ListItem {
  id: number;
  label: string;
}

export type UserRole = "Admin" | "User" | "Guest";
export interface RoleOption {
  value: UserRole;
  label: string;
}
export interface User {
  name: string;
  age: number;
}

export function formatName(user: User): string {
  return user.name.toUpperCase();
}

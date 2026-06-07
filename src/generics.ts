// generics

// T type
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

getFirst<number>([25, 5]);
getFirst<string>(['mk', 'haque']);

console.log(getFirst<string>(['mk', 'haque']));

// generics interface

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

// Added: define User and Product so the generic aliases compile
interface User {
  id: number;
  name: string;
  email?: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

// user data

type UserResponse = ApiResponse<User>;

// PRODUCT LIST

type ProductListResponse = ApiResponse<Product[]>;

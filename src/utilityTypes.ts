// Utility types and mapped items

// partial - make all field optional

interface User {
  name: string;
  age: number;
  email: string;
}

function updateUser(id: string, data: Partial<User>) {
  // typescript will understand data can be anything , optional
}

updateUser('1', { age: 50 });

// Pick - you can use if you need specific filed

type UserPreview = Pick<User, 'name' | 'email'>;

const preview: UserPreview = {
  name: 'mk',
  email: 'test@gmail',

  // age no need
};

// Omit - some field you can remove/omit  pic er ulta

type CreateUser = Omit<User, 'id'>;

// example : id will not necessary for createUser type
// very common pattern-API

// record - when all key and value same type in object

type RolePermission = Record<string, boolean>;

const permission: RolePermission = {
  read: true,
  write: true,
  delete: true,
};

// permission system, configuration object - record uses more

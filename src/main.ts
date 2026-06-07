import { type User, formatName } from './utils/utils';
import ProductService from './utils/product';

const user: User = { name: 'MK', age: 25 };
console.log(formatName(user));

const product = new ProductService();

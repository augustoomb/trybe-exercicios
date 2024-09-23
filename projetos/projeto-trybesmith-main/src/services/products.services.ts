import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interfaces';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}

export default ProductService;
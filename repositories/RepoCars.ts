import Cars, { ICars } from '../models/Cars';
import { IUsers } from '../models/Users';

export interface IParams {
  page?: number;
  size?: number;
  search?: string;
}

class RepoCars {
  constructor() {}

  async count(params?: IParams) {
    const allBooks = Cars.query().count('id').where('available', true);
    if (params?.search) {
      allBooks
        .whereILike('nama', `%${params?.search}%`)
        .orWhereILike('sewa', `%${params?.search}%`);
    }

    return Number(
      ((await allBooks) as unknown as { count: number }[])[0].count
    );
  }

  async list(params?: IParams) {
    const size = params?.size ? Number(params?.size) : 10;
    const page = params?.page ? Number(params?.page) - 1 : 0;

    const cars = Cars.query()
      .select('*')
      .page(page, size)
      // .limit(size)
      // .offset(page * size)
      .where('available', true);
    // .orderBy('createdAt', 'asc');

    if (params?.search) {
      cars
        .whereILike('nama', `%${params?.search}%`)
        .orWhereILike('available', `%${params?.search}%`);
    }

    cars.orderBy('created_at', 'desc', 'first');

    return await cars;
  }

  async show(id: string) {
    const cars = await Cars.query().findById(id);
    return cars;
  }

  async create(user: IUsers, carData: ICars) {
    const car = await Cars.query().insert({
      ...carData,
      created_by: user.id,
    });

    return car;
  }

  async remove(user: IUsers, id: string) {
    const cars = await Cars.query()
      .update({
        available: false,
        updated_by: user.id,
        updated_at: new Date().toISOString(),
      })
      .where('id', id);
    return cars;
  }

  async update(user: IUsers, id: string, carData: ICars) {
    const cars = await Cars.query()
      .update({
        ...carData,
        updated_by: user.id,
        updated_at: new Date().toISOString(),
      })
      .where('id', `${id}`);
    return cars;
  }
}

export default RepoCars;

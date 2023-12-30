import database from '../config/database';
import { Model } from 'objection';

Model.knex(database);

export interface ICars {
  id?: string;
  nama: string;
  sewa: number;
  ukuran: string;
  updatedBy?: string;
  createdBy?: string;
  gambar?: string;

}

class Cars extends Model {
  static get tableName() {
    return 'car';
  }

  static get idColumn() {
    return 'id';
  }

  $beforeInsert() {
    // @ts-ignore
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    // @ts-ignore
    this.updated_at = new Date().toISOString();
  }

  static get timestamps() {
    return true;
  }
}

export default Cars;

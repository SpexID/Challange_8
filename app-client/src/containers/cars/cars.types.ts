import { IFileItem } from '../../services/types';
export interface ICars {
  id?: string;
  nama?: string;
  sewa?: number;
  ukuran?: string;
  updated_at?: string;
  created_at?: string;
  gambar?: IFileItem;
  available?: boolean;
  created_by?: string;
}

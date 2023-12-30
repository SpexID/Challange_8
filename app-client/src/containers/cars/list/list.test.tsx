/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react';
import List from './list';
import useAction from './list.hooks';
import { BrowserRouter } from 'react-router-dom';
import { ICars } from '../cars.types';
import test, { describe } from 'node:test';

jest.mock('./list.hooks');

const useActionMock = useAction as jest.MockedFunction<any>;

describe('containers/cars/list',()=>{
  useActionMock.mockReturnValue({
    cars: [
      {
        id: '1',
        nama: 'mock author',
        sewa: 10,
        ukuran: 'mock genre',
        updated_at: new Date().toLocaleString(),
        created_at: new Date().toLocaleString(),
        available:true,
        created_by: '1',
      },
    ] as ICars[],
    params: {
      page: 1,
      size: 10,
    },
    setParams: jest.fn(),
    loading: false,
    meta: {},
    handleEdit: jest.fn(),
    handleRemove: jest.fn(),
    handleSearch: jest.fn(),
  });
  test('render list', async () => {
    const result = render(
      <BrowserRouter>
        <List />
      </BrowserRouter>
    );
    const tableRows = await result.findAllByTestId('table-rows');
    expect(tableRows.length > 0).toBeTruthy();
  });
})
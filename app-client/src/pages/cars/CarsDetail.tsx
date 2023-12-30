import { CarDetailContainer } from '../../containers/cars';
import Dashboard from '../../layouts/dashboard';
import PrivateProvider from '../../providers/PrivateProvider';

export default function CarDetail() {
  return (
    <PrivateProvider>
      <Dashboard>
        <CarDetailContainer/>
      </Dashboard>
    </PrivateProvider>
  );
}

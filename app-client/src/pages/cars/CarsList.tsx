import PrivateProvider from '../../providers/PrivateProvider';
import Dashboard from "../../layouts/dashboard";
import { CarListContainer } from '../../containers/cars';

export default function CarList(){
    return(
        <PrivateProvider>
            <Dashboard>
            <CarListContainer />
            </Dashboard>
        </PrivateProvider>
    );
}
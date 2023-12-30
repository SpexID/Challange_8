import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ICars } from '../cars.types';

export default function useDetail() {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState<ICars | undefined>();
  
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/cars/${id}`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
        setCarDetails(response.data.data);
      } catch (error) {
        console.log('error > ', error);
      }
    };

    fetchCarDetails();
  }, [id]);

  return {
    carDetails,
  };
}

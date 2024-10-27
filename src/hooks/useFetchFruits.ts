import useApi from './useApi';
import { Fruit } from '../models/Fruit';

const API_URL = '/api';

const useFetchFruits = () => {
  const { data, loading, error } = useApi<Fruit[]>(API_URL);

  return {
    fruits: data || [],
    loading,
    error,
  };
};

export default useFetchFruits;

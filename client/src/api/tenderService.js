import Axios from './Axios';

export const createTender = async (tenderData) => {
  const response = await Axios.post('/tender/new', tenderData);
  return response.data;
};

export const getTenders = async () => {
  const response = await Axios.get('/tenders');
  return response.data;
};

export const createBid = async (bidData) => {
  const response = await Axios.post('/bid/new', bidData);
  return response.data;
};

export const getBidsByTenderId = async (tenderId) => {
  const response = await Axios.get(`/bids/${tenderId}`);
  return response.data;
};

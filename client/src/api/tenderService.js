import Axios from './Axios';

export const createTender = async (tenderData) => {
  const response = await Axios.post('/tender/new', tenderData);
  return response.data;
};

export const getTenders = async () => {
  const response = await Axios.get('/getTenders');
  return response.data;
};

export const getAvailableTenders = async () => {
  const response = await Axios.get('/getAvailableTenders');
  return response.data;
};

export const createBid = async (bidData) => {
  const response = await Axios.post('/bid/new', bidData);
  return response.data;
};

export const getAllBids = async () => {
  const response = await Axios.get(`/bids`);
  return response.data;
};

export const getBidsByTenderId = async (tenderId) => {
  const response = await Axios.get(`/bids/${tenderId}`);
  return response.data;
};

export const getLowestBidsByTenderId = async (tenderId) => {
  const response = await Axios.get(`/lowestBid/${tenderId}`);
  return response.data;
};

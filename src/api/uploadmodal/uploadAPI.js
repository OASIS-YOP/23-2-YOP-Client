import HttpClient from '../HttpClient';

const getSelectedImageData = (selectedCard) => {
  return {
    title: 'BUTTER',
    cardId: `JH_BT0${selectedCard + 1}`,
  };
};

const getMyCollectionQuant = async (artistId, userId) => {
  try {
    const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/${userId}/collectionQuant`;
    const response = await HttpClient.get(path);
    return response;
  } catch (e) {
    return null;
  }
};

export default { getSelectedImageData, getMyCollectionQuant };

import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithIsfa = async (isfa) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favresto: FavoriteRestaurantIdb,
    isfa,
  });
};

export default createLikeButtonPresenterWithIsfa;

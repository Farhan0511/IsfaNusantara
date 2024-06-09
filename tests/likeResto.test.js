import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

// Mock the methods from FavoriteRestoIdb
jest.mock('../src/scripts/data/favorite-resto-idb');

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should display like widget when the restaurant has not been liked', async () => {
    FavoriteRestoIdb.getIsfa.mockResolvedValue(null);

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      isfa: { id: 1 },
    });

    expect(document.querySelector('#likeButton')).toBeTruthy();
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    FavoriteRestoIdb.getIsfa.mockResolvedValue({ id: 1 });

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      isfa: { id: 1 },
    });

    expect(document.querySelector('#likeButton')).toBeTruthy();
  });

  it('should be able to like the restaurant', async () => {
    FavoriteRestoIdb.getIsfa.mockResolvedValue(null);

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      isfa: { id: 1 },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(FavoriteRestoIdb.putIsfa).toHaveBeenCalledWith({ id: 1 });
  });

  it('should be able to unlike the restaurant', async () => {
    FavoriteRestoIdb.getIsfa.mockResolvedValue({ id: 1 });

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      isfa: { id: 1 },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(FavoriteRestoIdb.deleteIsfa).toHaveBeenCalledWith(1);
  });
});

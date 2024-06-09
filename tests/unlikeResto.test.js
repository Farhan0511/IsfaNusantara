import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

// Mock the methods from FavoriteRestoIdb
jest.mock('../src/scripts/data/favorite-resto-idb');

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    FavoriteRestoIdb.getIsfa.mockResolvedValue({ id: 1 });

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      isfa: { id: 1 },
    });

    expect(document.querySelector('#likeButton')).toBeTruthy();
    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeTruthy();
  });

  it('should display like widget when the restaurant has been unliked', async () => {
    FavoriteRestoIdb.getIsfa.mockResolvedValue({ id: 1 });

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      isfa: { id: 1 },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    await FavoriteRestoIdb.deleteIsfa(1);

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeTruthy();
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

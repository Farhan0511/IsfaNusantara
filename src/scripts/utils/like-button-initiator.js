import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, isfa }) {
    this._likeButtonContainer = likeButtonContainer;
    this._isfa = isfa;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._isfa;

    if (await this._isIsfaExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isIsfaExist(id) {
    const isfa = await FavoriteRestoIdb.getIsfa(id);
    return !!isfa;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putIsfa(this._isfa);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteIsfa(this._isfa.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;

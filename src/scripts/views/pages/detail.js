import TheIsfaDbSource from '../../data/isfadb-source';
import UrlParser from '../../routes/url-parser';
import { createIsfaDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <div id="isfa" class="isfa"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const isfa = await TheIsfaDbSource.detailIsfa(url.id);
    const isfaContainer = document.querySelector('#isfa');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    isfaContainer.innerHTML = createIsfaDetailTemplate(isfa);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favresto: FavoriteRestoIdb,
      isfa: {
        id: isfa.id,
        name: isfa.name,
        description: isfa.description,
        rating: isfa.rating,
        pictureId: isfa.pictureId,
        city: isfa.city,
      },
    });
  },
};

export default Detail;

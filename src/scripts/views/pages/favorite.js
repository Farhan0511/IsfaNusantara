import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createIsfaItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <div id="isfa" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const isfa = await FavoriteRestoIdb.getAllIsfa();
    const isfaContainer = document.querySelector('#isfa');

    isfa.forEach((isfa) => {
      isfaContainer.innerHTML += createIsfaItemTemplate(isfa);
    });
  },
};

export default Like;

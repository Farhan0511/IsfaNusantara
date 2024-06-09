import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createIsfaItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <section class="content" id="content" tabindex="0">
      <div class="explore">
        <h1 class="explore_label">Favorite page</h1>
        <h2 class="isfa-not-found"></h2>
        <div id="isfa" class="restaurant-list"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const isfa = await FavoriteRestoIdb.getAllIsfa();
    const isfaContainer = document.querySelector('#isfa');
    const empty = document.querySelector('#isfa');
    if (isfa.length === 0) {
      empty.innerHTML = `
        <h3>Tidak ada favorite restaurant yang ditampilkan</h3>
      `;
    }

    isfa.forEach((isfa) => {
      isfaContainer.innerHTML += createIsfaItemTemplate(isfa);
    });
  },
};

export default Like;

import TheIsfaDbSource from '../../data/isfadb-source';
import { createIsfaItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
    <div class="content">
    <div id="isfa" class="isfa">
    </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await TheIsfaDbSource.nowPlayingIsfa();
    const isfaContainer = document.querySelector('#isfa');
    restaurant.forEach((isfa) => {
      isfaContainer.innerHTML += createIsfaItemTemplate(isfa);
    });
  },
};

export default Restaurant;

import CONFIG from '../../globals/config';

const createIsfaItemTemplate = (isfa) => `
<div class="card">
<div class="card-header">
  <div class="rating">
    <p>⭐️<span class="card-rating-score">${isfa.rating}</span></p>
  </div>
  <img 
    class="isfa-item__header__poster" 
    crossorigin="anonymous" 
    src="${CONFIG.BASE_IMAGE_URL + isfa.pictureId}" 
    alt="Gambar ${isfa.name}" 
    tabindex="0"
  />
</div>
<div class="card-content">
  <h3>
    <a href="/#/detail/${isfa.id}">${isfa.name}</a>
  </h3>
  <p class="card-city">City: ${isfa.city}</p>
  <p>Description: ${isfa.description}</p>
</div>
</div>

`;

const createIsfaDetailTemplate = (isfa) => `
  <h2 class="isfa__title">${isfa.name}</h2>
  <img class="isfa__poster" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + isfa.pictureId}" alt="${isfa.name}" />
  <div class="isfa__info">
    <h3>Information</h3>
    <h4>City: ${isfa.city}</h4>
    <h4>Address: ${isfa.address}</h4>
    <h4>Rating: ${isfa.rating}</h4>
    <h4>Description: ${isfa.description}</h4>
  </div>
  <div class="isfa__overview"z>
    <h4 tabindex="0" id="isfa-detail-form-review-title"><span>List Menu</span></h4>
    <div class="restaurant-detail__menu-list">
      <div class="foods">
      <h4>Food</h4>
      </hr>
        <ul class="restaurant-detail__foods">
          ${isfa.menus.foods
    .map(
      (food) => `
          <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>`,
    )
    .join('')}
        </ul>
      </div>
      <div class="drinks">
      <h4>Drink</h4>
      </hr>
        <ul class="restaurant-detail__drinks">
          ${isfa.menus.drinks
    .map(
      (drink) => `
          <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>`,
    )
    .join('')}
        </ul>
      </div>
    </div>
  <h4 tabindex="0" id="isfa-detail-form-review-title"><span>Reviews</span></htabindex=>
    <div tabindex="0" class="detail-review">
      ${isfa.customerReviews
    .map(
      (review) => `
      <div class="detail-review-item">
        <div class="header-review">
          <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
          <p class="date-review">${review.date}</p>
        </div>
        <div class="body-review">
          ${review.review}
        </div>
      </div>
      `,
    )
    .join('')}
    </div>

  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createIsfaDetailTemplate,
  createIsfaItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

import API_ENDPOINT from '../globals/api-endpoint';

class TheIsfaDbSource {
  static async nowPlayingIsfa() {
    const response = await fetch(API_ENDPOINT.ISFA);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailIsfa(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}
export default TheIsfaDbSource;

import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoIdb = {
  async getIsfa(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllIsfa() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putIsfa(resto) {
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },
  async deleteIsfa(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestoIdb;

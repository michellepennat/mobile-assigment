import Api from '../../common/Api';
class FeedService {
  async getAll(page) {
    const data = await Api.get('character', {page});
    if (data.payload) return data.payload;
    return {err: 'No se pudo conectar al servidor'};
  }
}

export default new FeedService();

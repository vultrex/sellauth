class Shops {
    constructor(client) {
        this.client = client;
    }

    async getShops() {
        return await this.client.request({
            method: 'GET',
            endpoint: '/v1/shops'
        });
    }

    async createShop(data) {
        return await this.client.request({
            method: 'POST',
            endpoint: '/v1/shops/create',
            data
        });
    }

    async getShop(shopId) {
        return await this.client.request({
            method: 'GET',
            endpoint: `/v1/shops/${shopId}`
        });
    }

    async getStats(shopId) {
        return await this.client.request({
            method: 'GET',
            endpoint: `/v1/shops/${shopId}/stats`
        });
    }

    async updateShop(shopId, data) {
        return await this.client.request({
            method: 'PUT',
            endpoint: `/v1/shops/${shopId}/update`,
            data
        });
    }
}

module.exports = Shops;

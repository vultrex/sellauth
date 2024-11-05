class Orders {
    constructor(client) {
        this.client = client;
    }

    async getInvoices(shopId) {
        return await this.client.request({
            method: 'GET',
            endpoint: `/v1/shops/${shopId}/invoices`,
        });
    }

    async createOrder(data) {
        return await this.client.request({
            method: 'POST',
            endpoint: '/v1/orders',
            data
        });
    }

    async updateOrder(orderId, data) {
        return await this.client.request({
            method: 'PUT',
            endpoint: `/v1/orders/${orderId}`,
            data
        });
    }

    async deleteOrder(orderId) {
        return await this.client.request({
            method: 'DELETE',
            endpoint: `/v1/orders/${orderId}`
        });
    }
}

module.exports = Orders;

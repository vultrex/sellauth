const productOptions = {
    deliverables_type: '', // e.g., 'service', 'serials', 'files'
    currency: '', // e.g., 'USD'
    visibility: '', // e.g., 'public', 'private'
    type: '', // e.g., 'single', 'subscription'
    name: '', // Product name
    path: '', // Product URL path or slug
    out_of_stock_message: '', // Message to show when out of stock
    deliverables: '', // Specific deliverables for the product
    price: '', // e.g., '10.00'
    price_slash: '', // Original price if discounted
    quantity_min: '', // Minimum purchase quantity
    quantity_max: '', // Maximum purchase quantity
    badge_text: null, // e.g., 'New', 'Popular'
    badge_color: null, // e.g., '#FF0000'
    status_color: null, // e.g., '#00FF00'
    status_text: null, // Status text, e.g., 'In Stock'
    stock: null, // Set stock quantity, -1 for unlimited
    description: '', // e.g., `<p>Product description</p>`
    instructions: '' // e.g., `<p>Usage instructions</p>`
};

class Products {
    constructor(client) {
        this.client = client;
    }

    async getProducts(shopId, params = {}) {
        return await this.client.request({
            method: 'GET',
            endpoint: `/v1/shops/${shopId}/products`,
            params
        });
    }

    async createProduct(shopId, data = productOptions) {
        return await this.client.request({
            method: 'POST',
            endpoint: `/v1/shops/${shopId}/products`,
            data
        });
    }

    async getProduct(shopId, productId) {
        return await this.client.request({
            method: 'GET',
            endpoint: `/v1/shops/${shopId}/products/${productId}`
        });
    }

    async updateProduct(shopId, productId, data = productOptions) {
        return await this.client.request({
            method: 'PUT',
            endpoint: `/v1/shops/${shopId}/products/${productId}/update`,
            data
        });
    }

    async deleteProduct(shopId, productId) {
        return await this.client.request({
            method: 'DELETE',
            endpoint: `/v1/shops/${shopId}/products/${productId}`
        });
    }
}

module.exports = Products;

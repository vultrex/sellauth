const SellAuthClient = require('../sellauth');

const client = new SellAuthClient({
    apiKey: 'your-api-key'
});

async function run() {
    try {
        const shops = await client.shops.getShops();
        console.log('Shops:', shops);

        const shopId = shops[0].id;

        const product = await client.products.createProduct(shopId, {
            deliverables_type: 'service',
            currency: 'USD',
            visibility: 'public',
            type: 'single',
            name: 'Sample Product Name',
            path: 'sample-product-path',
            out_of_stock_message: 'Currently out of stock',
            deliverables: '',
            price: '0.00',
            price_slash: '',
            quantity_min: '',
            quantity_max: '',
            badge_text: null,
            badge_color: null,
            status_color: null,
            status_text: null,
            stock: -1, // -1 for unlimited stock
            description: `<p class="e-paragraph" dir="ltr"><span style="white-space: pre-wrap;">Product description goes here</span></p>`,
            instructions: `<p class="e-paragraph" dir="ltr"><span style="white-space: pre-wrap;">Product instructions go here</span></p>`
        });

        console.log('Product Created:', product);
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
    }
}

run();

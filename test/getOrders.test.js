const SellAuthClient = require('../sellauth');

const client = new SellAuthClient({
    apiKey: 'your-api-key'
});

async function run() {
    try {

        const shops = await client.shops.getShops();
        const orders = await client.orders.getInvoices(shops[0].id, {});

        console.log('Orders:', orders.data[0]);
    } catch (error) {
        console.error('Error:', error);
    }
}

run();

# sellauth

The `sellauth` package is a small Node.js library for interacting with the SellAuth API. Designed to simplify programmatic management of various aspects of the SellAuth platform, it provides a streamlined approach to managing shops, products, orders, users, and more.

## Features

- **Shops**: Retrieve and manage shop information and settings.
- **Products**: Add, update, and manage products.
- **Orders**: Place, update, and query orders.

## Installation

To install the package, run:

```bash
npm install sellauth
```

## Usage

```js
const SellAuthClient = require("sellauth");
const client = new SellAuthClient({ apiKey: "your-api-key" });

// Get all shops
async function getShops() {
  try {
    const shops = await client.shops.getShops();
    console.log("Shops:", shops);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

## Support

If you encounter any issues or require support, please don't hesitate to open an issue on our GitHub project page.

## Acknowledgments

A heartfelt thank you to the sellauth team for providing an easy to navigate api (almost).

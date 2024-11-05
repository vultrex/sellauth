const axios = require('axios');
const modules = require('./src');

class SellAuthClient {
    constructor({ apiKey, baseURL = 'https://api.sellauth.com' }) {
        if (!apiKey) {
            throw new Error('API key is required');
        }

        this.apiKey = apiKey;
        this.baseURL = baseURL;

        // Initialize each module and attach to the SellAuthClient instance
        Object.keys(modules).forEach(moduleName => {
            this[moduleName.toLowerCase()] = new modules[moduleName](this);
        });
    }

    // Centralized request method
    async request({ method, endpoint, data = {}, params = {} }) {
        try {
            const response = await axios({
                method,
                url: `${this.baseURL}${endpoint}`,
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                data,
                params
            });
            return response.data;
        } catch (error) {
            console.error('Error with API request:', error.response?.data || error.message);
            throw error;
        }
    }
}

module.exports = SellAuthClient;

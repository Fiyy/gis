module.exports = ({ env }) => ({
  'strapi-llm-translator': {
    enabled: true,
    config: {
      provider: 'deepl', // Or 'open-ai'
      providerOptions: {
        apiKey: env('DEEPL_API_KEY'), // Replace with your actual environment variable for the API Key
      },
    },
  },
});
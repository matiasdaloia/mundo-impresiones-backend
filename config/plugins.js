module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUD_NAME"),
      api_key: env("API_KEY_CLOUDINARY"),
      api_secret: env("API_SECRET"),
    },
  },
  // ...
});

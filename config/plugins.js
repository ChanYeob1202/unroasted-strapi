module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  // Only use Cloudinary if credentials are provided (production)
  // For local development without Cloudinary, it will use local file storage
  ...(env('CLOUDINARY_NAME') && env('CLOUDINARY_KEY') && env('CLOUDINARY_SECRET')
    ? {
        upload: {
          config: {
            provider: 'cloudinary',
            providerOptions: {
              cloud_name: env('CLOUDINARY_NAME'),
              api_key: env('CLOUDINARY_KEY'),
              api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
              upload: {},
              delete: {},
            },
          },
        },
      }
    : {}),
});
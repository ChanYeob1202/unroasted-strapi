module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  
  {
    name: 'strapi::cors',
    config: {
      origin: ({ env }) => {
        const origins = [
          'http://localhost:3000',
          'http://localhost:3002',
          'https://unroasted.vercel.app',
          'https://www.unroasted.vercel.app',
        ];
        
        // Add custom origin from environment variable if provided
        if (env('CLIENT_URL')) {
          origins.push(env('CLIENT_URL'));
        }
        
        return origins;
      },
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

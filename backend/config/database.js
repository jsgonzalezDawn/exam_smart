module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-3-214-136-47.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'de0ea85mjia5oe'),
        username: env('DATABASE_USERNAME', 'eecpauwqllugqt'),
        password: env('DATABASE_PASSWORD', '8ad8d2f0a79df5fa3db5f612170ab2532c922d2371368924629d90321b6c176f'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {},
    },
  },
});

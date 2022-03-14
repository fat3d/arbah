module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4fbf361d1ef47084aab6d09abe437db7'),
  },
});

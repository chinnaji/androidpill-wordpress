// module.exports = {
// images: {
//   domains: [
//     // "androidpill.wpengine.com",
//     // "https:/i0.wp.com/www.androidpill.com",
//     "i0.wp.com",
//     "secure.gravatar.com",
//   ],
// },
// };

const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: [
      // "androidpill.wpengine.com",
      // "https:/i0.wp.com/www.androidpill.com",
      "i0.wp.com",
      "secure.gravatar.com",
    ],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

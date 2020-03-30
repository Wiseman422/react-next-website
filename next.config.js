const withSass = require('@zeit/next-sass')
/*
module.exports.exportPathMap = function() {
  return {
    '/': { page: '/' }
  };
};
*/
module.exports = withSass({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/home/appSoftware/': { page: '/home/appSoftware' },
      '/home/serviceStartup/': { page: '/home/serviceStartup' },
      '/home/aboutStartup/': { page: '/home/aboutStartup' },
    };
  }
  // target: 'serverless'
})
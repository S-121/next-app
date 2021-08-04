const withOptimizedImages = require("next-optimized-images")


module.exports = withOptimizedImages({
  devIndicators: {
    autoPrerender: false,
  },
  typescript:{
    ignoreBuildErrors:true
  },
  handleImages: ['jpeg', 'png', 'svg'],

  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
    ) {
    return {
    "/": { page: "/" },
    "/landing": { page: "/landing" },
    
    };
  }
    })




  
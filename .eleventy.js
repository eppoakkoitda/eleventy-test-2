module.exports = function(eleventyConfig) {
    //eleventyConfig.addPassthroughCopy("src/assets/images");
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "listener/public"
      }
    }
  };
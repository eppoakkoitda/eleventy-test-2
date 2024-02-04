const Eleventy = require("@11ty/eleventy");

(async function() {
    let elev = new Eleventy( "src", "listener/public", {
        // --quiet
        // quietMode: true,

        // --config
        // configPath: ".eleventy.js",

        // config: function(eleventyConfig) {
        //     // Do some custom Configuration API stuff
        //     // Works great with eleventyConfig.addGlobalData
        // },
    });

    // Use `write` or `toJSON` or `toNDJSON`
    // await elev.write();
    let json = await elev.toJSON();
    // All results
    console.log( json );
})();
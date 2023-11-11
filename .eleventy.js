module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css/style.css');
    eleventyConfig.addPassthroughCopy('src/css/blog.css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/admin');
    eleventyConfig.addPassthroughCopy('src/assets');
    
    const nunjucks = require("nunjucks");
    
    eleventyConfig.setLibrary("njk", nunjucks.configure("src/_includes"));
        
   
    
   
    
    return {
        dir: {
            input: 'src',
            includes: "_includes",
            output: 'public',
            templateFormats: ["njk", "html", "md"]
        }
    };
};


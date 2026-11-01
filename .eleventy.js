module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("dateIT", (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }).format(date);
  });
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("media");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};

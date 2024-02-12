module.exports = {
    eleventyComputed: {
      whatsnew: data => {
        return [
            { id: data.dt.id, title: "test1" },
            { id: data.dt.id, title: "test2" }
        ]
      }
    }
  };
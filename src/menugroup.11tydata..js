module.exports = {
    eleventyComputed: {
        pagination: {
            wn_title: (data) => { return `${JSON.stringify(data.pagination)}のタイトル` },
            // url: (data) => { return `${data.dt.url}のURL` },
            test: "test"
        }
    }
};
module.exports = {
    pwa : {
        name:"music",
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        workboxOptions: {
            exclude: [/\.map$/, /manifest\.json$/, 'index.html']
        }
    },
    publicPath:'/music', // 서브경로
}
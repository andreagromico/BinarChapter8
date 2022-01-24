const { Post, Visitor } = require('../../models')

module.exports = {
    home: async (req, res) => {
        const locals = {
            data: [{
                Post: await Post.count(), 
                Visitor: await Visitor.count(), 
                Reader: await Post.sum('read')
            }],
            contentName: 'Statistics',
            layout: 'layout/dashboard'
        }
        res.render('pages/dashboard/home', locals)
    },
    post: require('./post')
}


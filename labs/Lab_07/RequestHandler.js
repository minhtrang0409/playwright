const Post = require('./Post');


class RequestHandler {
    
    constructor(url) {
        this._url = url;
    }

    async printTargetPost(userId, id) {
        // Construct the returned data as a Post data model from class Post
        const allPosts = await this.getAllPosts(userId);
        if (allPosts.length > 0) {
            const targetPost = allPosts.find(post => post.id === id);
            if (targetPost) {
                return targetPost;
            }
        } else {
            return undefined;
        }
    }

    async printAllPosts(userId) {
        const allPosts = await this.getAllPosts(userId);
        if (allPosts.length > 0) {
            return allPosts;
        } else {
            return undefined;
        }
        
    }

    async getAllPosts(userId) {
        const url = this._url + 'posts';
        const response = await fetch(url);
        const rawPosts = await response.json();
        return rawPosts.filter(post => post.userId === userId);
    }
}
module.exports = RequestHandler;
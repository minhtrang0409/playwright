/**
 * const allPost = getAllPostFromUser(userId);
 * 
 * 
 * 
 */
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;
const targetPost = 10;
getAllPostFromUser(userId).then(function(allPosts) {
    const targetPostContent = fillerPostContent(allPosts, targetPost);
    if (targetPostContent) {
    console.log(targetPostContent);
    } else {
        console.log(`Post ${targetPost} not found`);
    }
});


function getAllPostFromUser(userId) {
    let allPosts = [];
    return fetch(USER_ENDPOINT)
    .then(function(response) {
        return response.json();
    })
    .then(function(allUsers) {
        let hasUser = false;
        for (const user of allUsers) {
            if (user.id === userId) {
                hasUser = true;
                break;
            }
        }
        if (hasUser) {
            return fetch (POST_ENDPOINT)
        }
    });
}

function fillerPostContent(allPosts, targetPost) {
    const targetPost = allPosts.find(function(post) {
        return post.id === targetPost;
    });
    return targetPost.body;
}

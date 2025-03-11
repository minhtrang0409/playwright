
const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

const url = "https://jsonplaceholder.typicode.com/";
lab7();

async function lab7() {
    let requestHandler = new RequestHandler(url);
    const user = new Post(1, 1);
    let userId = user.userId;
    let id = user.id;

    let targetPost = await requestHandler.printTargetPost(userId, id);
    if (targetPost) {
        console.log(targetPost);
    } else {
        console.log("No post found");
    }

    let allPosts = await requestHandler.printAllPosts(userId);
    if (allPosts) {
        console.log(allPosts);
    } else {
        console.log("No");
    }
}
    
import { Post } from "../entities/posts";
import { postURL } from "../shared/data";


export const postList = () => {
    return fetch(
        postURL,
    )
        .then(request => {
            return request.json();
        })
        .then(posts => {
           return posts.map(item => {
               return new Post(item.id, item.userId, item.title, item.body);
           })
        })
}
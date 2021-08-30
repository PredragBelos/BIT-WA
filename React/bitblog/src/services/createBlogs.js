import { blogsURL } from "../shared/data";

/* Function for create blogs array*/
export const createBlogs = fetch(
    blogsURL,
)
.then(request => {
    return request.json();
})
.then(blogs => {
    
})
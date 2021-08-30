
/* Class who represent a blog object*/
export class Blog {
    constructor(title, author, body) {
        try {

            if(!title) {
                throw new Error("Blog title must be defined!");
            }
            if(!body) {
                throw new Error("Blog body must be defined!");
            }
            if(!author) {
                throw new Error("Blog author must be defined!");
            }
            if(typeof title !== "string"){
                throw new Error("Type of blog title must be a string!");
            }
            if(typeof body !== "string"){
                throw new Error("Type of blog body must be a string!");
            }

            this.title = title;
            this.author = author;
            this.body = body;

        } catch (error) {
            console.log(error.message);
        }
    }
}
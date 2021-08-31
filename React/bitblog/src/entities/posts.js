
/* Class that present a post objects*/
export class Post {
    constructor(id, userId, title, body, userName){
        
        try {
            if(!id){
                throw new Error("Post id must be defined!");
            }
            if(!userId){
                throw new Error("Post userId must be defined!");
            }
            if(!title){
                throw new Error("Post title must be defined!");
            }
            if(!body){
                throw new Error("Post body must be defined!");
            }

            this.id = id;
            this.userId = userId;
            this.title = title;
            this.body = body; 
            this.userName =""; 

        } catch (error) {
            console.log(error.message);
        }
    }

    setAuthorName(authorId) {
        this.userName = authorId;
    }
}


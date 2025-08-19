import PostRepository from "./post-repository";
import Post from "./posts";

export default class InMemoryPostRepository implements PostRepository {
    private posts: Array <{
        id: number; 
        title: string; 
        description: string;
        author: string;
    }> = [];

    constructor() {
        this.posts = []
    }

    public async save(post: Post): Promise <void>{
        const id = post.id.value;
        const title = post.title.value;
        const description = post.description.value;
        const author = post.author.value


        this.posts.push({
            id: id,
            title: title,
            description: description,
            author: author
        })
    }

    public async seePost() {
        return this.posts;
    }

    public async updatePost(){
        // asi que se quede jajajaj
    }

    public async deletePost(){
        // asi que se quede jajajaj x22222
    }
}
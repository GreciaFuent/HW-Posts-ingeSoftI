import Post from "./posts";
import PostRepository from "./post-repository";

// esto es un caso de uso


export default class PostUpdate {

    private readonly repository: PostRepository


    constructor (repository: PostRepository) {
        this.repository = repository
    };

    public async runUpdate(id: number, title: string, description: string, author: string) {
        const post = Post.create(id, title, description, author);
        console.log("antes de agregar el post")
        console.log(post)
        
        await this.repository.updatePost(post)

    }
}

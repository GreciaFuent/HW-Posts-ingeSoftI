import Post from "./posts";
import PostRepository from "./post-repository";



export default class PostRegistrar {

    private readonly repository: PostRepository


    constructor (repository: PostRepository) {
        this.repository = repository
    };

    public async run(id: number, title: string, description: string, author: string) {
        const post = Post.create(id, title, description, author);
        console.log("antes de agregar el post")
        console.log(post)
        
        await this.repository.save(post)

    }
    
}

import PostRepository from "./post-repository";

export default class PostDelete {

    private readonly repository: PostRepository

    constructor (repository: PostRepository) {
        this.repository = repository
    };

    public async runDelete(id: number) {
        
        return await this.repository.deletePost(id)
    }
    
}

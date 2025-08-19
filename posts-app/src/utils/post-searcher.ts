import PostRepository from "./post-repository";

export default class PostSearcher {

    private readonly repository: PostRepository

    constructor (repository: PostRepository) {
        this.repository = repository
    };

    public async runGet() { 
        return await this.repository.seePost()

    }
    
}

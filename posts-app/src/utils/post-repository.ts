import Post from "./posts";


export default interface PostRepository {
    save(post: Post):Promise<void>;
}
import postgres, { Sql } from "postgres";
import PostRepository from "./post-repository";
import Post from "./posts";

export default class PostgresPostRepository implements PostRepository{
    private readonly sql: Sql;

    constructor () {
        const connectionString = 'postgresql://postgres.ihrsmmrruzsavbysxvhg:grecia@aws-1-us-east-2.pooler.supabase.com:6543/postgres'
        this.sql = postgres(connectionString)
    }

    async save(post: Post) {
        try {
            const id = post.id.value
            const title = post.title.value
            const description = post.description.value
            const author = post.author.value

            await this.sql`INSERT INTO public.post (id, title, description, author) values(${id}, ${title}, ${description}, ${author});`;
        }
        catch {
            throw new Error("Failed to save post");
        }
    }

    async seePost() {
        try {
            const posts = await  this.sql`SELECT * FROM post;`;

            return posts;
        }
        catch {
            throw new Error("Failed to get the posts");
        }
    }

    async updatePost(post: Post) {
        try {
            const id = post.id.value
            const title = post.title.value
            const description = post.description.value
            const author = post.author.value

            await this.sql`UPDATE public.post SET id = ${id}, title = ${title}, description = ${description}, author = ${author} WHERE id= ${id};`;
        }
        catch {
            throw new Error("Failed to save post");
        }
    }


}
import postgres from "postgres";
import Post from "./posts";



export default class PostRegistrar {

    constructor () {};

    public async run(id: number, title: string, description: string, author: string) {
        const post = Post.create(id, title, description, author);
        console.log("antes de agregar el post")
        console.log(post)
        await this.saveUserPost(post.id.value, post.title.value, post.description.value, post.author.value)

    }
    
    
    async saveUserPost(id: number, title: string, description: string, author: string): Promise<void> {
        try {
            const connectioString = 'postgresql://postgres.ihrsmmrruzsavbysxvhg:grecia@aws-1-us-east-2.pooler.supabase.com:6543/postgres'
            const sql = postgres(connectioString)
            await sql `INSERT INTO public.post (id, title, description, author) values(${id}, ${title}, ${description}, ${author});`;
        }   
        catch (error) {
            console.log(error)
        }
    }

}

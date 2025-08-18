import postgres from "postgres";



export default class PostRegistrar {

    constructor () {};

    public async run(id: number, title: string, description: string, author: string) {
        this.isValidPost(id, title, description, author);
        this.saveUserPost(id, title, description, author)
    }
    

    isValidPost(id: number, title: string, description: string, author: string){
        if (typeof id === 'string') {
            throw new Error('id must not be a string')
        }
        if (title.length  >=  15) {
            throw new Error('id must not be a string')
        }
        if (description.length  >=  35) {
            throw new Error('id must not be a string')
        }
        if (typeof author !== "string") {
            throw new Error('id must not be a string')
        }
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

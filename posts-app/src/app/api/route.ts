import InMemoryPostRepository from "@/utils/in-memory-post-repository";
import PostRegistrar from "@/utils/post-register";
import PostSearcher from "@/utils/post-searcher";
import PostgresPostRepository from "@/utils/postgress-post-repository";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";



export async function POST(request: NextRequest){
    try {
        const data = await request.json();

        const repository = new PostgresPostRepository();
        // const repository = new InMemoryPostRepository();
        const registrar = new PostRegistrar(repository);
        await registrar.run(data.id, data.title, data.description, data.author);
        
        return NextResponse.json({
            message: 'Post saved succesfully'
        })        
    }
    catch (error) {
        console.log('Error saving post:', error)
        return NextResponse.json({
            error: 'Failed to save post',
        }, {status: 500})
    }
}


export  async function GET() {
    try {
        
        const repository = new PostgresPostRepository();
        const registrar = new PostSearcher(repository);
        const posts = await registrar.runGet();

        console.log(posts)

        return new Response(JSON.stringify(posts), {
        status: 200,
        headers: { "Content-Type": "application/json" },
        });
    }
    catch (error){
        console.log(error)
    }
    
}


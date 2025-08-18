import InMemoryPostRepository from "@/utils/in-memory-post-repository";
import PostRegistrar from "@/utils/post-register";
import PostgresPostRepository from "@/utils/postgress-post-repository";
import { NextRequest, NextResponse } from "next/server";



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

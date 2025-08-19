import PostUpdate from "@/utils/post-updater";
import PostgresPostRepository from "@/utils/postgress-post-repository";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, {params}: {params: {id:string}}) {


    try {
            const data = await request.json();
    
            const repository = new PostgresPostRepository();
            // const repository = new InMemoryPostRepository();
            const registrar = new PostUpdate(repository);
            await registrar.runUpdate(Number(params.id), data.title, data.description, data.author);
            
            
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
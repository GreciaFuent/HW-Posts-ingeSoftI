import PostDelete from "@/utils/post-delet";
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
                message: 'Post updated succesfully'
            })        
        }
        catch (error) {
            console.log('Error saving post:', error)
            return NextResponse.json({
                error: 'Failed to upate post',
            }, {status: 500})
        }
}


export async function DELETE(_req: NextRequest, { params }: { params: { id: string } } ) {
        try {   
            const id = Number(params.id);
                if (!id || Number.isNaN(id)) {
                    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
                }
        
                const repository = new PostgresPostRepository();
                const registrar = new PostDelete(repository);
                await registrar.runDelete(Number(params.id));
                
                
                return NextResponse.json({
                    message: 'Post deleted succesfully'
                })        
        }
        catch (error) {
            console.log('Error saving post:', error)
            return NextResponse.json({
                error: 'Failed to delete post',
            }, {status: 500})
        }
}
import PostRegistrar from "@/utils/post-register";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest){
    try {
        const data = await request.json();

        const registrar = new PostRegistrar();
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

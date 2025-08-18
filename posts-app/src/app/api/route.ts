import PostRegistrar from "@/utils/post-register";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres"



export async function POST(request: NextRequest){
    try {
        const data = await request.json();

        const registrar = new PostRegistrar();
        await registrar.run()

        isValidPost(data);

        await saveUserPost(data)
        
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

function isValidPost(data: any){
    if (typeof data.id === 'string') {
        throw new Error('id must not be a string')
    }
    if (data.title.length  >=  15) {
        throw new Error('id must not be a string')
    }
    if (data.description.length  >=  35) {
        throw new Error('id must not be a string')
    }
    if (typeof data.author !== "string") {
        throw new Error('id must not be a string')
    }
}

async function saveUserPost(data: any): Promise<void> {
    const connectioString = 'postgresql://postgres.ihrsmmrruzsavbysxvhg:grecia@aws-1-us-east-2.pooler.supabase.com:6543/postgres'
    const sql = postgres(connectioString)
    await sql `INSERT INTO post (id, title, description, author) values(${data.id}, ${data.title}, ${data.description}, ${data.author});`;
}
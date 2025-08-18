import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres"


export async function POST(request: NextRequest){
    try {
        const data = await request.json();

        // segun yo es la conexion con la base de datos
        const connectioString = 'postgresql://postgres.ihrsmmrruzsavbysxvhg:grecia@aws-1-us-east-2.pooler.supabase.com:6543/postgres'
        const sql = postgres(connectioString)


        if (data && data.id && data.title && data.description && data.author) {
            let postAprobe = true

            if (typeof data.id === "string") {
                postAprobe = false
            }
            if (data.title.length  >=  15) {
                postAprobe = false
            }
            if (data.description.length  >=  35) {
                postAprobe = false
            }
            if (typeof data.author !== "string") {
                postAprobe = false
            }
            if (postAprobe) {
                return NextResponse.json({message: 'Post is valid',post: data});
            } else {
                return NextResponse.json({
                    error: 'Invalid post format'
                }, {status: 422});
            } 
        }
    }
    catch (error) {
        console.log('Error saving post:', error)
        return NextResponse.json({
            error: 'Failed to dave post',
        }, {status: 500})
    }
}
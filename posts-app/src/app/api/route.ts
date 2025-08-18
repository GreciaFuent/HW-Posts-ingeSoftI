import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest){
    const data = await request.json();
    
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
    return NextResponse.json({
        data
    })
}
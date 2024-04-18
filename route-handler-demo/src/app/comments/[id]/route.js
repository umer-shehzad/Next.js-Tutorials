import { redirect } from "next/navigation";

import { comments } from "../data";

export async function GET(request, { params }) {
    // redirect if url-id > comments(array) length
    if(parseInt(params.id) > comments.length) {
        redirect("/comments");
    }
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    );
    return Response.json(comment);
}

export async function PATCH(request, { params }) {
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    );
    comments[index].text = text;
    return Response.json(comments[index]);
}

export async function DELETE(request, { params }) {
    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    );
    const deletedComment = comments[index]; 
    comments.splice(index, 1);  //comments.splice(startindex, howMuch);
    return Response.json(deletedComment);
}
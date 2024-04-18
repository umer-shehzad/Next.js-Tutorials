import { comments } from "../data";

export async function GET(request, { params }) {
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
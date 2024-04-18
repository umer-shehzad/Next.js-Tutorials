import { comments } from "../data";

export async function GET(request, { params }) {
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    );
    return Response.json(comment);
}
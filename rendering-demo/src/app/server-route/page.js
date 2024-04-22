import { ServerSideFunction } from "@/utils/server-utils";

export default function ServerRoute () {
    console.log("server route");
    const result = ServerSideFunction();
    return (
        <>
        <h1>Server Route Page</h1>
        {result}
        </>
    )
}
export default async function Reviews () {
    // make 4 sec delay to delay reviews
    await new Promise(resolve => setTimeout(resolve, 4000));
    return <p>Reviews</p>
}
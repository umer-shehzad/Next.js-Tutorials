export default async function Products () {
    // make 2 sec delay to delay products
    await new Promise(resolve => setTimeout(resolve, 2000));
    return <p>Products</p>
}
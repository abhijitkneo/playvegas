const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/* export async function GET() {
    try {
        const res = await fetch(`${BASE_URL}/games`);
        const data = await res.json();

        return Response.json(data);

    } catch (error) {
        return new Response('Failed to fetch data', {status: 500})
    }
} */

/* export async function GET(req: Request) {
    try {
       
        const {searchParams} = new URL(req.url)
        const category = searchParams.get('category');
        const sortBy = searchParams.get('sortBy');

        let url = `${BASE_URL}/games`;

        if(category) {
            url += `?category=${category}`
        }

        if(sortBy) {
            url += category ? `&sort-by=${sortBy}` : `?sort-by=${sortBy}`
        }

        const res = await fetch(url);
        const data = await res.json();

        return Response.json(data);

    } catch (error) {
        return new Response('Failed to fetch data', {status: 500})
    }
} */

export async function GET(req: Request) {
    try {
       
        const {searchParams} = new URL(req.url)
        const category = searchParams.get('category');
        const sortBy = searchParams.get('sortBy');

        let url = `${BASE_URL}/games`;

        if(sortBy) {
            url += `?sort-by=${sortBy}`
        }

        const res = await fetch(url);
        const data = await res.json();

        const filteredData = category ? data.filter((game: any) => game.genre.toLowerCase() === category.toLowerCase()) : data

        return Response.json(filteredData);

    } catch (error) {
        return new Response('Failed to fetch data', {status: 500})
    }
}
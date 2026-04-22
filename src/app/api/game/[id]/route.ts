const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET(
    request: Request,
    {params} : {params: Promise<{id: string}>}
) {
    try {
        const {id} = await params
        const res = await fetch(`${BASE_URL}/game?id=${id}`)
        const data = await res.json();
        return Response.json(data);
    } catch (error) {
        throw new Response('Failed to fetch game details', {status: 500})
    }
}
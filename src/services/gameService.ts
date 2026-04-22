//const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const getGames = async () => {    
    const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_SITE_URL : ''
    const res = await fetch(`${baseUrl}/api/games`)
    
    if(!res.ok) {
        throw new Error('Failed to fetch games')
    }

    return res.json();
}

export const getGameDetails = async (id: string) => {
    //const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const res = await fetch(`${baseUrl}/api/game/${Number(id)}`, {
        cache: 'no-store'
    })

    if(!res.ok) {
        throw new Error('Failed to load game details')
    }

    return res.json();
}

//get top 10 games by category
export const getTopGamesByCategory = async(category: string) => {
    const normalizedCategory = category.toLowerCase();
    const res = await fetch(`${baseUrl}/api/games?category=${normalizedCategory}&sortBy=release-date`)

    if(!res.ok) {
        throw new Error('Failed to fetch the games')
    }

    const data = await res.json()

    return Array.isArray(data) ? data.slice(0, 10) : []

}

/* export const getGamesByCategory = async (category: string) => {
    const normalizedCategory = category.toLowerCase();
    const res = await fetch(`${baseUrl}/api/games?category=${normalizedCategory}&sortBy=release-date`)

    if(!res.ok) {
        throw new Error('Failed to fetch the games')
    }

    const data = await res.json();
    return Array.isArray(data) ? data.slice(0,10) : []
} */

//get all games by category
export const getAllGamesByCategory = async (category: string) => {
    const normalizedCategory = category.toLowerCase();
    const res = await fetch(`${baseUrl}/api/games?category=${normalizedCategory}&sortBy=release-date`, {cache: 'no-store'})

    if(!res.ok) {
        throw new Error('Failed to fetch the games from category')
    }

    return res.json()
}
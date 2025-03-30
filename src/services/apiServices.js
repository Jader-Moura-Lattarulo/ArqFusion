export const getApiData = async (endpoint) => {
    try {
        const url = new URL (`https://api-arqfusion-jmdev.vercel.app/api/${endpoint}`)
        const response = await fetch(url, {
            method: 'GET',
        })

        if (!response.ok) {
            console.error(`Error: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (e) {
        console.error('Catch error: ', e)
    }
} 
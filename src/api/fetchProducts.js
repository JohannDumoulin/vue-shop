import axios from 'axios'

export default async () => {
    console.log('start fetching');
    const response = await axios.get('https://fakestoreapi.com/products?limit=15')

    return response.data
}

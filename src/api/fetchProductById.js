import axios from 'axios'

export default async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)

    return response.data
}

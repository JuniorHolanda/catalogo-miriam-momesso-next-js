import axios from 'axios';

const API_URL = 'https://back-end-catalogo-miriam-momesso.onrender.com/product';

export async function getProducts() {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		console.error('Erro ao buscar produtos:', (error as Error).message);
		return []; // repassa o erro para quem chamou
	}
}

// Requisição específica para likes
export async function likeProduct(productId: string, value: number) {
	try {
		const response = await axios.patch(`${API_URL}/${productId}/like`, {
			like: value,
		});
		return response.data;
	} catch (error) {
		console.error('Erro ao atualizar o like:', (error as Error).message);
		return [];
	}
}
const API_URL = 'https://fakestoreapi.com/';
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}products`); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  } 
};
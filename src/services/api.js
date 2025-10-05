const BASE_URL = 'https://agile-releases.s3.us-east-1.amazonaws.com/tests/';

/**
 * FUNÇÃO PADRÃO PARA CHAMADA DE API
 * faz as requisições com tratamento de erros
 */
async function apiCall(endpoint) {
    try {
        const response = await fetch(BASE_URL + endpoint);

        if(!response.ok) throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        console.error(`[API ERROR] (${endpoint}):`, error.message);
        throw error;
    }
}

//busca as informações principais da série
export async function getShowDetails(showId) {
    return apiCall(`tv-shows/${showId}.json`);
}

//busca os episódios de uma única série (todas as temporadas)
export async function getShowEpisodes(showId) {
    return apiCall(`episodes/${showId}.json`);
}
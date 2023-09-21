export const BACKEND_URL = "https://portfolio-be.adaptable.app";

export const fetchApi = async (api: string) => {
    const response = await fetch(api);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}
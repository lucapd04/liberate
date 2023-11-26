
export async function return_recommendations(json) {
    try {
        const response = await fetch('pending url', {
            method: 'POST',
            body: JSON.stringify(json)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

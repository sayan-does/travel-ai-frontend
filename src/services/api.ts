const API_BASE_URL = 'http://127.0.0.1:8080';

export interface APIError {
    detail: string;
}

export const api = {
    async generateItinerary(tripData: {
        destination: string;
        start_date: string;
        end_date: string;
        budget_level: string;
    }) {
        const response = await fetch(`${API_BASE_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tripData),
        });

        if (!response.ok) {
            const error: APIError = await response.json();
            throw new Error(error.detail || 'Failed to generate itinerary');
        }

        return response.json();
    },

    async sendChatMessage(message: string) {
        const response = await fetch(`${API_BASE_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            const error: APIError = await response.json();
            throw new Error(error.detail || 'Failed to send message');
        }

        return response.json();
    },
}; 
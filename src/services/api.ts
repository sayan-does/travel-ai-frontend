// src/services/api.ts

export const API_BASE_URL = 'http://127.0.0.1:8080';

interface APIError {
  detail: string;
}

interface ChatResponse {
  markdown: string;
}

export const api = {
  async generateItinerary(tripData: {
    destination: string;
    start_date: string;
    end_date: string;
    budget_level: string;
  }) {
    const url = `${API_BASE_URL}/generate-itinerary`;
    const response = await fetch(url, {
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
    const url = `${API_BASE_URL}/chat?message=${encodeURIComponent(message)}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error: APIError = await response.json();
      throw new Error(error.detail || 'Failed to send chat message');
    }

    return response.json() as Promise<ChatResponse>;
  },
};
import { BACKEND_URL } from '$env/static/private';

export async function load({ fetch }) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/ping`);
    return {
      status: response.status,
      data: await response.json()
    };
  } catch (error) {
    console.error('Ping failed:', error);
    return {
      status: 500,
      error: 'Failed to connect to backend'
    };
  }
}
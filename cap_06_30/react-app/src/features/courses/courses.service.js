import { apiClient } from '../../lib/api-client'

export async function getCourses() {
  const response = await apiClient.get('/courses')
  return response.data
}

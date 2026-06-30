import { apiClient } from '../../lib/api-client'

export async function getCourses() {
  const response = await apiClient.get('/courses')
  return response.data
}

export async function createCourse(course) {
  const response = await apiClient.post('/courses', course)
  return response.data
}

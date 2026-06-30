import { useQuery } from '@tanstack/react-query'
import { getCourses } from './courses.service'

export function useCourses() {
  return useQuery({
    queryKey: ['courses'],
    queryFn: getCourses,
  })
}

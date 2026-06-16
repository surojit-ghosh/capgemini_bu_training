import * as Yup from 'yup';
import { PRIORITIES } from './constants';

export function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}


export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

export const requestSchema = Yup.object({
  title: Yup.string().trim().required('Title is required'),
  description: Yup.string().trim().required('Description is required'),
  category: Yup.string().required('Please select a category'),
  roomNo: Yup.string().trim().required('Room number is required'),
  priority: Yup.string()
    .oneOf(Object.values(PRIORITIES), 'Select a valid priority')
    .required('Priority is required'),
});

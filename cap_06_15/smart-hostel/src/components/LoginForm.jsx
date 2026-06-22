import { useFormik } from 'formik';
import { loginSchema } from '../lib/utils';

export default function LoginForm({ onSubmit, error }) {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: (values) => onSubmit(values.email, values.password),
  });

  const field = (name, type = 'text', placeholder = '') => ({
    id: name,
    type,
    placeholder,
    className: `w-full bg-white border rounded px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 outline-none transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 ${
      formik.touched[name] && formik.errors[name] ? 'border-neutral-900' : 'border-neutral-200'
    }`,
    ...formik.getFieldProps(name),
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate className="font-sans">
      {error && (
        <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs rounded p-3 mb-4" role="alert">
          <span>{error}</span>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="email" className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">Email Address</label>
        <input {...field('email', 'email', 'you@example.com')} />
        {formik.touched.email && formik.errors.email && (
          <div className="text-[10px] text-neutral-600 mt-1">{formik.errors.email}</div>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">Password</label>
        <input {...field('password', 'password', '••••••••')} />
        {formik.touched.password && formik.errors.password && (
          <div className="text-[10px] text-neutral-600 mt-1">{formik.errors.password}</div>
        )}
      </div>

      <button
        type="submit"
        className="w-full font-medium text-xs bg-neutral-900 text-neutral-50 hover:bg-neutral-800 rounded py-2 transition duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-1.5"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? (
          <>
            <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" />
            Signing in…
          </>
        ) : (
          'Sign In'
        )}
      </button>
    </form>
  );
}

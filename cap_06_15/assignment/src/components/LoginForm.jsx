import { useFormik } from 'formik';
import { loginSchema } from '../utils';

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
    className: `w-full bg-white border rounded px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition duration-150 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 ${
      formik.touched[name] && formik.errors[name] ? 'border-zinc-900' : 'border-zinc-200'
    }`,
    ...formik.getFieldProps(name),
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate className="font-sans">
      {error && (
        <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs rounded p-3 mb-4" role="alert">
          <span>{error}</span>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="email" className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">Email Address</label>
        <input {...field('email', 'email', 'you@example.com')} />
        {formik.touched.email && formik.errors.email && (
          <div className="text-[10px] text-zinc-600 mt-1">{formik.errors.email}</div>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">Password</label>
        <input {...field('password', 'password', '••••••••')} />
        {formik.touched.password && formik.errors.password && (
          <div className="text-[10px] text-zinc-600 mt-1">{formik.errors.password}</div>
        )}
      </div>

      <button
        type="submit"
        className="w-full font-medium text-xs bg-zinc-900 text-zinc-50 hover:bg-zinc-800 rounded py-2 transition duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-1.5"
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

import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useCreateCourse } from './courses.queries'

const initialValues = {
  title: '',
  instructor: '',
  duration: '',
  level: '',
}

const courseSchema = Yup.object({
  title: Yup.string().trim().required('Title is required'),
  instructor: Yup.string().trim().required('Instructor is required'),
  duration: Yup.string().trim().required('Duration is required'),
  level: Yup.string()
    .oneOf(['Beginner', 'Intermediate', 'Advanced'], 'Select a valid level')
    .required('Level is required'),
})

const inputClassName =
  'mt-2 min-h-11 w-full rounded-md border border-hairline bg-surface-1 px-3.5 py-2.5 text-base font-medium leading-[1.5] text-ink transition placeholder:text-ink-subtle focus:border-accent-blue focus:outline-none'

const labelClassName =
  'text-xs font-semibold uppercase leading-[1.23] tracking-[0.6px] text-ink-subtle'

function FormError({ name }) {
  return (
    <ErrorMessage
      name={name}
      component="p"
      className="mt-2 text-[13px] font-medium leading-[1.38] tracking-[0.2px] text-product-consul"
    />
  )
}

function CreateCourse() {
  const navigate = useNavigate()
  const { mutateAsync, isPending, isError, error } = useCreateCourse()

  async function handleSubmit(values, { resetForm }) {
    await mutateAsync(values)
    resetForm()
    navigate('/')
  }

  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-display text-[40px] font-semibold leading-[1.19] tracking-[-1px] text-ink">
          Create a course record.
        </h1>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex min-h-10 items-center justify-center rounded-md bg-surface-2 px-[18px] py-2.5 text-sm font-semibold leading-[1.29] text-ink transition hover:bg-surface-3"
        >
          Back
        </button>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={courseSchema}
        onSubmit={handleSubmit}
      >
        <Form className="rounded-lg border border-hairline bg-surface-1 p-6 md:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClassName} htmlFor="title">
                Title
              </label>
              <Field id="title" name="title" className={inputClassName} />
              <FormError name="title" />
            </div>

            <div>
              <label className={labelClassName} htmlFor="instructor">
                Instructor
              </label>
              <Field
                id="instructor"
                name="instructor"
                className={inputClassName}
              />
              <FormError name="instructor" />
            </div>

            <div>
              <label className={labelClassName} htmlFor="duration">
                Duration
              </label>
              <Field
                id="duration"
                name="duration"
                placeholder="6 weeks"
                className={inputClassName}
              />
              <FormError name="duration" />
            </div>

            <div>
              <label className={labelClassName} htmlFor="level">
                Level
              </label>
              <Field
                as="select"
                id="level"
                name="level"
                className={inputClassName}
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </Field>
              <FormError name="level" />
            </div>
          </div>

          {isError ? (
            <p className="mt-6 rounded-md border border-product-consul/35 bg-product-consul/10 px-3.5 py-2.5 text-sm font-medium leading-[1.71] text-product-consul">
              {error.message || 'Unable to create course.'}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-inverse-canvas px-[18px] py-2.5 text-sm font-semibold leading-[1.29] text-inverse-ink transition hover:bg-ink-muted disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? 'Creating...' : 'Create Course'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-surface-2 px-[18px] py-2.5 text-sm font-semibold leading-[1.29] text-ink transition hover:bg-surface-3"
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  )
}

export default CreateCourse

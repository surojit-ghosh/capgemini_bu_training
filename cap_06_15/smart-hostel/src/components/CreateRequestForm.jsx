import { useFormik, Form, Field } from "formik";
import { requestSchema } from "../lib/utils";
import { PRIORITIES, STATUSES } from "../lib/constants";

export default function CreateRequestForm({ categories, onSubmit, student }) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      roomNo: student?.roomNo || "",
      priority: PRIORITIES.MEDIUM,
    },
    validationSchema: requestSchema,
    onSubmit: async (values, { resetForm }) => {
      await onSubmit({
        ...values,
        status: STATUSES.OPEN,
        createdAt: new Date().toISOString().split("T")[0],
        studentId: student?.id,
        studentName: student?.name,
      });
      resetForm();
    },
  });

  const field = (name) => ({
    id: name,
    className: `w-full bg-white border rounded px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 outline-none transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 ${
      formik.touched[name] && formik.errors[name]
        ? "border-neutral-900"
        : "border-neutral-200"
    }`,
    ...formik.getFieldProps(name),
  });

  const selectField = (name) => ({
    id: name,
    className: `w-full bg-white border rounded px-3 py-2 text-xs text-neutral-900 outline-none cursor-pointer transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 ${
      formik.touched[name] && formik.errors[name]
        ? "border-neutral-900"
        : "border-neutral-200"
    }`,
    ...formik.getFieldProps(name),
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate className="font-sans">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1"
        >
          Title
        </label>
        <input
          type="text"
          placeholder="e.g. Fan not working"
          {...field("title")}
        />
        {formik.touched.title && formik.errors.title && (
          <div className="text-[10px] text-red-600 mt-1">
            {formik.errors.title}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          placeholder="Describe the issue in detail…"
          className={`w-full bg-white border rounded px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 outline-none transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 resize-none ${
            formik.touched.description && formik.errors.description
              ? "border-neutral-900"
              : "border-neutral-200"
          }`}
          {...formik.getFieldProps("description")}
        />
        {formik.touched.description && formik.errors.description && (
          <div className="text-[10px] text-red-600 mt-1">
            {formik.errors.description}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
        <div className="md:col-span-5">
          <label
            htmlFor="category"
            className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1"
          >
            Category
          </label>
          <select {...selectField("category")}>
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          {formik.touched.category && formik.errors.category && (
            <div className="text-[10px] text-red-600 mt-1">
              {formik.errors.category}
            </div>
          )}
        </div>

        <div className="md:col-span-3">
          <label
            htmlFor="roomNo"
            className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1"
          >
            Room No.
          </label>
          <input
            type="text"
            readOnly
            className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-xs text-neutral-900 opacity-60 cursor-not-allowed outline-none"
            {...formik.getFieldProps("roomNo")}
          />
          {formik.touched.roomNo && formik.errors.roomNo && (
            <div className="text-[10px] text-red-600 mt-1">
              {formik.errors.roomNo}
            </div>
          )}
        </div>

        <div className="md:col-span-4">
          <label
            htmlFor="priority"
            className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1"
          >
            Priority
          </label>
          <select {...selectField("priority")}>
            <option value={PRIORITIES.LOW}>Low</option>
            <option value={PRIORITIES.MEDIUM}>Medium</option>
            <option value={PRIORITIES.HIGH}>High</option>
          </select>
          {formik.touched.priority && formik.errors.priority && (
            <div className="text-[10px] text-red-600 mt-1">
              {formik.errors.priority}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full font-medium text-xs bg-neutral-900 text-neutral-50 hover:bg-neutral-800 border border-neutral-900 rounded py-2 transition duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-1.5"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? (
          <>
            <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" />
            Submitting…
          </>
        ) : (
          "Submit Request"
        )}
      </button>
    </form>
  );
}

import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "./Form/TextInput";
import SelectInput from "./Form/SelectInput";
import TextArea from "./Form/TextArea";
import DateInput from "./Form/DateInput";
import { CATEGORIES, PRIORITIES } from "../lib/constants";

const INITIAL_VALUES = {
  residentName: "",
  mobile: "",
  area: "",
  category: "",
  priority: "",
  description: "",
  visitDate: "",
};

const validationSchema = Yup.object({
  residentName: Yup.string().required("Resident name is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  area: Yup.string().required("Area is required"),
  category: Yup.string().required("Please select a category"),
  priority: Yup.string().required("Please select a priority"),
  description: Yup.string().required("Description is required"),
  visitDate: Yup.date().nullable().typeError("Invalid date"),
});

function RequestForm({ onSubmit }) {
  console.log("RequestForm re-rendered");

  return (
    <div className="border border-neutral-200 rounded bg-white overflow-hidden mb-6">
      <div className="bg-neutral-50 border-b border-neutral-200 px-5 py-3 font-semibold text-xs text-neutral-950 font-display uppercase tracking-wider">
        New Request
      </div>
      <div className="p-6">
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
          }}
        >
          {({ values, handleChange, handleBlur, errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <TextInput
                  name="residentName"
                  value={values.residentName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Aarav"
                  label="Resident Name"
                  error={touched.residentName && errors.residentName}
                />
                <TextInput
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. 9876543210"
                  label="Mobile Number"
                  error={touched.mobile && errors.mobile}
                />
                <TextInput
                  name="area"
                  value={values.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. HSR Layout"
                  label="Area"
                  error={touched.area && errors.area}
                />
                <SelectInput
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  options={CATEGORIES}
                  placeholder="Select Category"
                  label="Category"
                  error={touched.category && errors.category}
                />
                <SelectInput
                  name="priority"
                  value={values.priority}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  options={Object.values(PRIORITIES)}
                  placeholder="Select Priority"
                  label="Priority"
                  error={touched.priority && errors.priority}
                />
                <DateInput
                  name="visitDate"
                  value={values.visitDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Visit Date"
                  error={touched.visitDate && errors.visitDate}
                />
                <TextArea
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Describe the issue in detail…"
                  label="Description"
                  error={touched.description && errors.description}
                />
              </div>
              <button
                type="submit"
                className="w-full font-medium text-xs bg-neutral-900 text-neutral-50 hover:bg-neutral-800 border border-neutral-900 rounded py-2 transition duration-150 cursor-pointer"
              >
                Submit Request
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RequestForm;

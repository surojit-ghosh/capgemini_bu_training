import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./visitor-appointment.schema";

export default function VisitorForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 flex justify-center items-center font-sans antialiased">
      <div className="max-w-xl w-full bg-white border border-neutral-200 rounded-lg p-8 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">
            Visitor Appointment Form
          </h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (values, { resetForm }) => {
            setIsSubmitted(true);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-5">
              <div>
                <label
                  htmlFor="visitorName"
                  className="block text-xs font-medium text-neutral-700 mb-1.5"
                >
                  Visitor Name <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  id="visitorName"
                  name="visitorName"
                  className={`w-full px-3 py-2 text-sm bg-neutral-50 border rounded-md outline-hidden focus:bg-white focus:ring-1 focus:ring-neutral-900 transition-all ${
                    touched.visitorName && errors.visitorName
                      ? "border-red-500"
                      : "border-neutral-200"
                  }`}
                />
                <ErrorMessage
                  name="visitorName"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-neutral-700 mb-1.5"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-3 py-2 text-sm bg-neutral-50 border rounded-md outline-hidden focus:bg-white focus:ring-1 focus:ring-neutral-900 transition-all ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-neutral-200"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-xs font-medium text-neutral-700 mb-1.5"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <Field
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  className={`w-full px-3 py-2 text-sm bg-neutral-50 border rounded-md outline-hidden focus:bg-white focus:ring-1 focus:ring-neutral-900 transition-all ${
                    touched.mobileNumber && errors.mobileNumber
                      ? "border-red-500"
                      : "border-neutral-200"
                  }`}
                />
                <ErrorMessage
                  name="mobileNumber"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="department"
                  className="block text-xs font-medium text-neutral-700 mb-1.5"
                >
                  Department to Visit <span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  id="department"
                  name="department"
                  className={`w-full px-3 py-2 text-sm bg-neutral-50 border rounded-md outline-hidden focus:bg-white focus:ring-1 focus:ring-neutral-900 transition-all appearance-none ${
                    touched.department && errors.department
                      ? "border-red-500"
                      : "border-neutral-200"
                  }`}
                >
                  <option value="">-- Select Department --</option>
                  <option value="HR">HR</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Finance">Finance</option>
                  <option value="Admin">Admin</option>
                </Field>
                <ErrorMessage
                  name="department"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="visitDate"
                  className="block text-xs font-medium text-neutral-700 mb-1.5"
                >
                  Visit Date <span className="text-red-500">*</span>
                </label>
                <Field
                  type="date"
                  id="visitDate"
                  name="visitDate"
                  className={`w-full px-3 py-2 text-sm bg-neutral-50 border rounded-md outline-hidden focus:bg-white focus:ring-1 focus:ring-neutral-900 transition-all ${
                    touched.visitDate && errors.visitDate
                      ? "border-red-500"
                      : "border-neutral-200"
                  }`}
                />
                <ErrorMessage
                  name="visitDate"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="purpose"
                  className="block text-xs font-medium text-neutral-700 mb-1.5"
                >
                  Purpose of Visit <span className="text-red-500">*</span>
                </label>
                <Field
                  as="textarea"
                  id="purpose"
                  name="purpose"
                  rows={3}
                  className={`w-full px-3 py-2 text-sm bg-neutral-50 border rounded-md outline-hidden focus:bg-white focus:ring-1 focus:ring-neutral-900 transition-all resize-none ${
                    touched.purpose && errors.purpose
                      ? "border-red-500"
                      : "border-neutral-200"
                  }`}
                />
                <ErrorMessage
                  name="purpose"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <span className="block text-xs font-medium text-neutral-700 mb-2">
                  Visitor Type <span className="text-red-500">*</span>
                </span>
                <div className="space-y-2">
                  {["Interview Candidate", "Vendor", "Guest"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center text-sm text-neutral-800 cursor-pointer select-none"
                    >
                      <Field
                        type="radio"
                        name="visitorType"
                        value={type}
                        className="h-4 w-4 accent-neutral-900 border-neutral-300 mr-2"
                      />
                      {type}
                    </label>
                  ))}
                </div>
                <ErrorMessage
                  name="visitorType"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="pt-1">
                <label className="flex items-center text-sm text-neutral-800 cursor-pointer select-none">
                  <Field
                    type="checkbox"
                    name="needParking"
                    className="h-4 w-4 accent-neutral-900 border-neutral-300 rounded-sm mr-2"
                  />
                  Need Parking?
                  <span className="text-neutral-400 text-xs ml-1">
                    (Optional)
                  </span>
                </label>
              </div>

              <div className="pt-1">
                <label className="flex items-center text-sm text-neutral-800 cursor-pointer select-none">
                  <Field
                    type="checkbox"
                    name="acceptTerms"
                    className="h-4 w-4 accent-neutral-900 border-neutral-300 rounded-sm mr-2"
                  />
                  I accept the terms and conditions
                  <span className="text-red-500">*</span>
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-400 text-white font-medium text-sm rounded-md transition-colors cursor-pointer"
                >
                  Submit Request
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {isSubmitted && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start space-x-3">
            <svg
              className="h-5 w-5 text-green-600 mt-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-green-800">
                Appointment Request Submitted Successfully!
              </h3>
              <p className="text-xs text-green-700 mt-0.5">
                We have received your request. Our team will contact you soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

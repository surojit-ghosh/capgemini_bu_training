import * as Yup from "yup";

export const initialValues = {
  visitorName: "",
  email: "",
  mobileNumber: "",
  department: "",
  visitDate: "",
  purpose: "",
  visitorType: "",
  needParking: false,
  acceptTerms: false,
};

export const validationSchema = Yup.object({
  visitorName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  mobileNumber: Yup.string()
    .length(10, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  department: Yup.string().required("Please select a department"),
  visitDate: Yup.date().required("Please select visit date").nullable(),
  purpose: Yup.string()
    .min(10, "Purpose must be at least 10 characters")
    .required("Purpose is required"),
  visitorType: Yup.string().required("Please select visitor type"),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions",
  ),
});

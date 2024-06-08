import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputBox from "../Atoms/InputBox";

const UserForm = ({ addUser, updateUser, users }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const validationSchema = Yup.object({
    name: Yup.string().required("User Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone Number must be digits")
      .min(10, "Phone Number must be at least 10 digits")
      .required("Phone Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      id: null,
      name: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.id) {
        updateUser(values);
      } else {
        addUser(values);
      }
      navigate("/");
    },
  });

  useEffect(() => {
    if (id && users) {
      const existingUser = users.find((user) => user.id === parseInt(id));
      if (existingUser) {
        formik.setValues(existingUser);
      }
    }
  }, [id, users, formik]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {formik.values.id ? `Update ${formik.values.name}` : "Add New User"}
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <InputBox
          label="User Name:"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name}
          touched={formik.touched.name}
        />
        <InputBox
          label="Phone Number:"
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.phone}
          touched={formik.touched.phone}
        />
        <div className="flex justify-end  space-x-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 border rounded-md"
          >
            Discard changes
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-500 text-white"
          >
            {formik.values.id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

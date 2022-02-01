import { Field, Form, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { toast } from "react-toastify";

import { supabase } from "../../utils/supabase";
import { ResourceSchema } from "../../utils/yupValidation";
import { ToggleModalProps } from "../navbar/types";
import { FormValues } from "./interface";

export default function ResourceModal(props: ToggleModalProps) {
  const initialValues: FormValues = { name: "", link: "", tag: "" };

  const submitResource = async (values: FormValues) => {
    const { error } = await supabase
      .from("suggested_resources")
      .insert([values]);
    if (error) {
      toast.error("oops! an error occured, kindly try again");
    }
    toast.success("yay 💃, resource has been successfully submitted");
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center bg-black-brand-smoke items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black-brand-08 outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 my-3">
                  <h3 className="text-xl self-center font-medium text-white">
                    Suggest a Resource
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white float-right text-3xl leading-none font-normal outline-none focus:outline-none"
                    onClick={() => props.setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={ResourceSchema}
                  onSubmit={async (
                    values: FormValues,
                    { setSubmitting }: FormikHelpers<FormValues>
                  ) => {
                    await submitResource(values);
                    setSubmitting(false);
                    props.setShowModal(false);
                  }}
                >
                  {({ isSubmitting, errors, touched }) => (
                    <Form className="p-5">
                      <div className="mb-6">
                        <label
                          htmlFor="name"
                          className="block text-white mb-4 text-base font-normal"
                        >
                          Resource Name
                        </label>
                        <Field
                          id="name"
                          name="name"
                          className="form-input mt-1 block w-full bg-black-brand-01 text-white rounded-lg p-2 "
                          placeholder="w3 schools"
                        />
                        {errors.name && touched.name ? (
                          <div className="text-red-700">{errors.name}</div>
                        ) : null}
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="link"
                          className="block mb-4 text-white text-base font-normal"
                        >
                          Resource Link
                        </label>

                        <Field
                          id="link"
                          name="link"
                          className="form-input mt-1 block w-full bg-black-brand-01 text-white rounded-lg p-2 "
                          placeholder="https://www.smilebox.com"
                        />
                        {errors.link && touched.link ? (
                          <div className="text-red-700">{errors.link}</div>
                        ) : null}
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="tag"
                          className="block mb-4 text-base text-white font-normal"
                        >
                          Category
                        </label>

                        <Field
                          id="tag"
                          name="tag"
                          as="select"
                          className="form-select mt-1 block w-full border-0 rounded-lg bg-black-brand-01 text-white"
                        >
                          <option value="">Choose a category</option>
                          <option value="fonts">Fonts</option>
                          <option value="javascript">Javascript</option>
                          <option value="css">CSS</option>
                          <option value="pictures">Pictures</option>
                          <option value="docs">Docs</option>
                          <option value="playground">Playground</option>
                        </Field>
                        {errors.tag && touched.tag ? (
                          <div className="text-red-700">{errors.tag}</div>
                        ) : null}
                      </div>

                      <div className="mb-6 text-center">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="text-black-brand-01 bg-green-brand-01 font-normal uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  my-3 ease-linear transition-all duration-150"
                        >
                          {isSubmitting
                            ? "Submitting Resource"
                            : "Submit Resource"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

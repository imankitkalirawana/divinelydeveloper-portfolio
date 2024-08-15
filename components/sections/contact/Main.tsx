"use client";
import React from "react";
import { Avatar, Button, Image, Input, Textarea } from "@nextui-org/react";
import WorkButton from "@/components/animata/button/work-button";
import { useFormik } from "formik";
import * as Yup from "yup";

const Main = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().notRequired(),
    message: Yup.string().required("Message is required").min(10).max(2000),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          alert("Message sent successfully");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <section className="relative pb-8 flex gap-12 font-ppneuemachinaregular">
        <div className="relative w-[40%] overflow-hidden rounded-3xl">
          <Image src={"/imankitkalirawana.jpg"} alt="" className="shadow-lg" />
          <div className="absolute z-10 bg-gradient-to-t from-black to-transparent w-full h-1/2 bottom-0 left-0 flex">
            <div className="flex flex-col gap-2 justify-end items-start w-full p-8">
              <Avatar src="/logo.png" className="p-1 bg-white" />
              <h3 className="text-white text-xl">Contact Us</h3>
              <p className="text-white text-[12px] md:max-w-xs">
                Ask about our platform, pricing, implementation or anything
                else. Our highly trained reps are standing by. Ready to help
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-[60%] flex-col gap-8">
          <Input
            placeholder="John Doe"
            size="lg"
            label="Name"
            labelPlacement="outside"
            className="group"
            classNames={{
              inputWrapper: ["group-hover:bg-default"],
            }}
            autoComplete="given-name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            isInvalid={formik.touched.name && formik.errors.name ? true : false}
            errorMessage={formik.errors.name}
          />

          <Input
            placeholder="johndoe@example.com"
            size="lg"
            label="Email Address"
            labelPlacement="outside"
            isRequired
            className="group"
            classNames={{
              inputWrapper: ["group-hover:bg-default"],
            }}
            autoComplete="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            isInvalid={
              formik.touched.email && formik.errors.email ? true : false
            }
            errorMessage={formik.errors.email}
          />
          <Input
            placeholder="+91 1234567890"
            size="lg"
            label="Phone Number"
            labelPlacement="outside"
            className="group"
            classNames={{
              inputWrapper: ["group-hover:bg-default"],
            }}
            autoComplete="tel"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            isInvalid={
              formik.touched.phone && formik.errors.phone ? true : false
            }
            errorMessage={formik.errors.phone}
          />
          <Textarea
            placeholder="Your message here"
            size="lg"
            label="Message"
            labelPlacement="outside"
            className="group"
            classNames={{
              inputWrapper: ["group-hover:bg-default"],
            }}
            isRequired
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            isInvalid={
              formik.touched.message && formik.errors.message ? true : false
            }
          />
          <Button
            onPress={() => {
              formik.handleSubmit();
            }}
          >
            Submit
          </Button>
          <WorkButton className="w-full" onClick={formik.handleSubmit} />
        </div>
      </section>
    </>
  );
};

export default Main;

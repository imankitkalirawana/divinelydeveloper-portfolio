"use client";
import React from "react";
import {
  Avatar,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import WorkButton from "@/components/animata/button/work-button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Main = () => {
  const submittedModal = useDisclosure();
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
          formik.resetForm();
          submittedModal.onOpenChange();
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <section className="relative pb-8 flex flex-col md:flex-row gap-12 font-ppneuemachinaregular">
        <div className="relative md:w-[40%] hidden md:block w-full overflow-hidden rounded-3xl">
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
        <div className="flex justify-center md:w-[60%] flex-col gap-8">
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
            isRequired
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

          <WorkButton
            className="w-full"
            onClick={() => formik.handleSubmit()}
            isLoading={formik.isSubmitting}
          />
        </div>
      </section>
      <Modal
        isOpen={submittedModal.isOpen}
        onOpenChange={submittedModal.onOpenChange}
        backdrop="blur"
        radius="lg"
        className="rounded-3xl"
      >
        <ModalContent className="font-ppneuemachinaregular px-4">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col mt-8 items-center gap-1">
                <Icon
                  fontSize={50}
                  icon="tabler:circle-check-filled"
                  className="text-success mb-4"
                />
                <h2 className="text-xl leading-[20px]">Congratulations</h2>
                <p className="text-center text-[12px] font-sans text-foreground-500">
                  Your message has been sent successfully.
                </p>
              </ModalHeader>
              <ModalBody className="bg-default rounded-2xl mb-4 p-4">
                <h3 className="uppercase text-sm">What&apos;s next?</h3>
                <p className="text-sm text-foreground-500">
                  Our team will get back to you within 24 hours. In the
                  meantime, you can check our{" "}
                  <a href="#" className="text-primary">
                    FAQ
                  </a>{" "}
                  or{" "}
                  <a href="#" className="text-primary">
                    Documentation
                  </a>{" "}
                  to get more information.
                </p>
                <Button
                  variant="bordered"
                  as={Link}
                  href="/"
                  color="primary"
                  size="lg"
                >
                  Go to Home
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Main;

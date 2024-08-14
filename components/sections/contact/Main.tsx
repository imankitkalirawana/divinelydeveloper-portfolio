"use client";
import React from "react";
import { Avatar, Image, Input, Textarea } from "@nextui-org/react";
import WorkButton from "@/components/animata/button/work-button";

const Main = () => {
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
          <div className="flex gap-8">
            <Input
              placeholder="John"
              size="lg"
              label="First Name"
              labelPlacement="outside"
              className="group w-1/2"
              classNames={{
                inputWrapper: ["group-hover:bg-default"],
              }}
              autoComplete="given-name"
            />
            <Input
              placeholder="Doe"
              size="lg"
              label="Last Name"
              labelPlacement="outside"
              className="group w-1/2"
              classNames={{
                inputWrapper: ["group-hover:bg-default"],
              }}
              autoComplete="family-name"
            />
          </div>
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
          />
          <WorkButton className="w-full" />
        </div>
      </section>
    </>
  );
};

export default Main;

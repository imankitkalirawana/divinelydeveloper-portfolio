import React from "react";

const Header = () => {
  return (
    <>
      <section className="relative h-56 md:h-96">
        <div className="absolute top-0 left-[50%] mt-12 translate-x-[-50%] text-[50px] leading-[60px] md:text-[80px] md:leading-[80px] text-center">
          <img
            src="/sparkle.svg"
            width={60}
            className="text-primary absolute left-[-10%] md:left-[10%] top-[40%]"
          />
          <img
            src="/sparkle.svg"
            width={60}
            className="text-primary absolute left-[40%] md:left-[45%] top-[80%] rotate-45"
          />
          <img
            src="/sparkle-filled.svg"
            width={70}
            className="text-primary absolute left-[90%] md:left-[72%] top-[0%]"
          />
          <div className="font-extrabold">Let&apos;s</div>
          <div className="flex gap-2">
            <span className="font-extrabold italic font-pp-migra text-secondary -rotate-12 block">
              Collaborate!
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

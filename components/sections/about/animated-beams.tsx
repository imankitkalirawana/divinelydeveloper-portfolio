"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-20 md:size-36 items-center overflow-hidden justify-center rounded-full",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full items-center justify-center rounded-lg md:p-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-12 md:gap-28">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.nextJs />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.gitHub />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.tailwind />
          </Circle>
          <Circle ref={div4Ref} className="md:size-56">
            <Icons.web />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.mongoDb />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.framerMotion />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.php />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        // curvature={0}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        // curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        // curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        // curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  tailwind: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 256 256"
      className="rounded-full"
    >
      <g fill="none">
        <rect width="256" height="256" fill="#242938" rx="60" />
        <path
          fill="url(#skillIconsTailwindcssDark0)"
          fillRule="evenodd"
          d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient
            id="skillIconsTailwindcssDark0"
            x1="86.5"
            x2="163.5"
            y1="74"
            y2="185.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#32b1c1" />
            <stop offset="1" stop-color="#14c6b7" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  ),
  web: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      className="rounded-full bg-black p-4"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
      />
    </svg>
  ),
  nextJs: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 256 256"
      className="rounded-full"
    >
      <defs>
        <linearGradient
          id="logosNextjsIcon0"
          x1="55.633%"
          x2="83.228%"
          y1="56.385%"
          y2="96.08%"
        >
          <stop offset="0%" stop-color="#fff" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="logosNextjsIcon1"
          x1="50%"
          x2="49.953%"
          y1="0%"
          y2="73.438%"
        >
          <stop offset="0%" stop-color="#fff" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
      </defs>
      <mask id="logosNextjsIcon3" fill="#fff">
        <use href="#logosNextjsIcon2" />
      </mask>
      <g mask="url(#logosNextjsIcon3)">
        <circle cx="128" cy="128" r="128" />
        <path
          fill="url(#logosNextjsIcon0)"
          d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
        />
        <path
          fill="url(#logosNextjsIcon1)"
          d="M163.556 76.8h17.067v102.4h-17.067z"
        />
      </g>
    </svg>
  ),
  framerMotion: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 256 256"
      className="rounded-full bg-black p-4"
    >
      <path
        fill="currentColor"
        d="M200 112h-51l56.27 50a8 8 0 0 1-5.27 14h-64v64a8 8 0 0 1-13.66 5.66l-72-72A8 8 0 0 1 48 168v-64a8 8 0 0 1 8-8h51L50.69 46A8 8 0 0 1 56 32h144a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8"
      />
    </svg>
  ),
  gitHub: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      className="rounded-full bg-black"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
      />
    </svg>
  ),
  mongoDb: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 256 256"
      className="rounded-full"
    >
      <g fill="none">
        <rect width="256" height="256" fill="#023430" rx="60" />
        <path
          fill="#10aa50"
          d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
        />
        <path
          fill="#b8c4c2"
          d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"
        />
        <path
          fill="#12924f"
          d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684"
        />
      </g>
    </svg>
  ),
  php: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 256 256"
      className="rounded-full"
    >
      <g fill="none">
        <rect width="256" height="256" fill="#f4f2ed" rx="60" />
        <path
          fill="#000"
          d="M49.158 100.246h28.408q12.507.106 18.126 7.208q5.618 7.101 3.71 19.398q-.742 5.618-3.286 11.024q-2.438 5.406-6.784 9.752q-5.3 5.511-11.342 6.996q-6.043 1.484-12.508 1.484h-12.72l-4.028 20.14H34zM61.56 112.33l-6.36 31.8q.636.106 1.272.106h1.484q10.177.106 16.96-2.014q6.784-2.226 9.116-15.476q1.908-11.13-3.816-12.826q-5.618-1.695-14.098-1.59q-1.271.106-2.438.106h-2.226zM116.186 80h14.628l-4.134 20.246h13.144q10.811.213 16.112 4.452q5.406 4.24 3.18 16.112l-7.102 35.298h-14.84l6.784-33.708q1.059-5.3-.636-7.526t-7.314-2.226l-11.766-.106l-8.692 43.566h-14.628zm58.638 20.246h28.408q12.507.106 18.126 7.208q5.618 7.101 3.71 19.398q-.742 5.618-3.286 11.024q-2.438 5.406-6.784 9.752q-5.3 5.511-11.342 6.996q-6.043 1.484-12.508 1.484h-12.72l-4.028 20.14h-14.734zm12.402 12.084l-6.36 31.8q.636.106 1.272.106h1.484q10.177.106 16.96-2.014q6.784-2.226 9.116-15.476q1.908-11.13-3.816-12.826q-5.618-1.695-14.098-1.59q-1.272.106-2.438.106h-2.226z"
        />
      </g>
    </svg>
  ),
};

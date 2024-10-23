"use client";

import { isImage } from "@/functions/utility";
import { useState } from "react";
import Image from "next/image";
import { cn, Skeleton } from "@nextui-org/react";

export default function Thumbnail({ src }: { src: string }) {
  const [hasError, setHasError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <>
      <div className="relative rounded-3xl overflow-hidden w-full h-fit">
        {isImage(src) ? (
          <Image
            src={src}
            objectFit="cover"
            alt="thumbnail"
            className="object-cover bg-default group-hover:opacity-30 transition-all w-full pointer-events-none"
            width={1200}
            height={1200}
          />
        ) : (
          <div className="relative w-full">
            {!videoLoaded && (
              <Skeleton className="object-cover before:!duration-1000 bg-default group-hover:opacity-30 transition-all w-full pointer-events-none"></Skeleton>
            )}

            {!hasError && (
              <video
                autoPlay
                loop
                muted
                className={cn(
                  "object-cover bg-default group-hover:opacity-30 transition-all w-full pointer-events-none",
                  videoLoaded ? "flex" : "hidden",
                )}
                playsInline
                width={1200}
                height={1200}
                controls={false}
                preload="auto"
                src={src}
                onError={() => {
                  setHasError(true);
                  setVideoLoaded(true);
                }}
                onLoadedData={() => setVideoLoaded(true)}
              />
            )}

            {hasError && (
              <Image
                src="/project.gif"
                objectFit="cover"
                alt="thumbnail"
                className="object-cover bg-default group-hover:opacity-30 transition-all w-full pointer-events-none"
                width={1200}
                height={1200}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

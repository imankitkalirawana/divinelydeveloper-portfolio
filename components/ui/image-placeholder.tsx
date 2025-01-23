interface Props {
  code?: number;
  title?: string;
  subtitle?: string;
  message?: string;
  link?: React.ReactNode;
}

export default function ImagePlaceholder({
  code = 404,
  title = "Insur Hotels",
  subtitle = "www.insurhotels.com",
  message = "Page not found",
  link,
}: Props) {
  return (
    <>
      <div className=" relative flex items-center justify-center aspect-video w-full">
        <p className="text-[min(10vw,7rem)] text-secondary-300 font-bold">
          {code}
        </p>
        <div className="w-full h-full absolute p-4 text-center text-secondary bg-background/50 left-0 top-0 backdrop-blur-[6px] flex items-center flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h3 className="text-2xl line-clamp-1 uppercase font-pp-migra italic font-bold">
                {title}
              </h3>
              <h6 className="text-sm font-extralight line-clamp-1">
                {subtitle}
              </h6>
            </div>
            <div className="flex gap-4">
              <span className="size-4 translate-y-2 border-l border-b border-secondary"></span>
              <span className="italic font-pp-migra font-bold">{message}</span>
              <span className="size-4 translate-y-2 border-r border-b border-secondary"></span>
            </div>
          </div>
          {link && link}
        </div>
      </div>
    </>
  );
}

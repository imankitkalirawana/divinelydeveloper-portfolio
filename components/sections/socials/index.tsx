"use client";
import { Social } from "@/lib/interface";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Card, Input, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Socials() {
  const [links, setLinks] = useState<Social[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const groupedItems = groupBy(
    links.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    ),
    "category",
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/socials");
        const data = res.data;
        setLinks(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen bg-background w-screen relative flex justify-between items-center -mt-24">
      <div className="py-24 w-full h-full">
        <div className="w-full overflow-y-scroll no-scrollbar relative flex flex-col pt-20 overflow-hidden rounded-[40px] m-auto bg-default h-full max-w-[556px]">
          <motion.div
            initial={{ y: 150 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="bg-primary rounded-full left-[-20%] w-[140%] aspect-square absolute -top-[125%]"
          ></motion.div>
          <div className="relative">
            <div className="flex gap-3 flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Image
                  alt=""
                  src="/logo.png"
                  className="bg-white border-4 border-default w-20 p-2 rounded-full"
                  width={100}
                  height={100}
                />
              </motion.div>
              <h2>Divinely Developer</h2>
              <p className="text-default-800 text-center max-w-sm font-ppneuemachinaregular">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, expedita!
              </p>
            </div>
            <div></div>
            <div className="max-w-sm pb-8 mx-auto font-ppneuemachinaregular gap-4 px-4 mt-4 flex flex-col">
              <Input
                label="Search"
                placeholder="eg. Github, Portfolio, etc."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />

              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <Card
                    className="w-full items-center justify-between flex-row p-4"
                    radius="lg"
                  >
                    <div className="flex items-center gap-2">
                      <Skeleton className="rounded-full before:!duration-1000 h-12 w-12 " />
                      <Skeleton className="rounded-md before:!duration-1000 h-6 w-36 " />
                    </div>
                    <Skeleton className="rounded-md before:!duration-1000 h-8 w-8 " />
                  </Card>
                ))
              ) : links.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase()),
                ).length < 1 ? (
                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/socials/not-found.svg"
                    width={200}
                    height={200}
                    alt="Not Found"
                  />
                  <h3 className="text-2xl text-primary font-semibold">
                    No Results Found
                  </h3>
                  <p className="text-center text-default-700">
                    We couldn't find what you searched for. Try searching again.
                  </p>
                </div>
              ) : (
                Object.entries(groupedItems).map(
                  ([category, categoryItems], index) => (
                    <div key={category}>
                      <h3 className="text-lg  font-semibold mb-4">
                        {getCategoryTitle(category)}
                      </h3>
                      <div className="flex flex-col gap-4">
                        {categoryItems
                          .sort((a, b) => {
                            if (a.priority === b.priority) {
                              return a.name.localeCompare(b.name);
                            }
                            return a.priority - b.priority;
                          })
                          .map((item) => (
                            <motion.a
                              initial={{ x: -100, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100,
                              }}
                              viewport={{ once: true }}
                              key={item._id}
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className="flex gap-2 items-center hover:bg-default-300 justify-between py-3 p-4 group hover:border-primary rounded-xl border border-default-500"
                            >
                              <div className="flex items-center gap-4 font-ppneuemachinaregular">
                                {item.icon ? (
                                  item.icon.includes(".") ? (
                                    <div
                                      className="flex items-center justify-center rounded-full w-[44px] h-[44px]"
                                      style={{ backgroundColor: item.color }}
                                    >
                                      <img
                                        src={item.icon}
                                        width={48}
                                        height={48}
                                      />
                                    </div>
                                  ) : (
                                    <div
                                      className="flex items-center justify-center rounded-full bg-background w-12 h-12"
                                      style={{ backgroundColor: item.color }}
                                    >
                                      <Icon
                                        icon={`${item.icon}`}
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                  )
                                ) : (
                                  <Avatar
                                    src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=64`}
                                  />
                                )}
                                <h3>{item.name}</h3>
                              </div>
                              <div className="group-hover:text-primary">
                                <Icon
                                  icon="akar-icons:arrow-right"
                                  strokeWidth={4}
                                />
                              </div>
                            </motion.a>
                          ))}
                      </div>
                    </div>
                  ),
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Utility function to group items by a given key
function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce(
    (result, currentValue) => {
      const groupKey = currentValue[key] as unknown as string;
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentValue);
      return result;
    },
    {} as Record<string, T[]>,
  );
}

// Function to map category values to display titles
function getCategoryTitle(category: string): string {
  const categoryMap: Record<string, string> = {
    featured: "Featured",
    byme: "By Me",
    social: "Socials",
    resource: "Resources",
    other: "Other",
  };
  return categoryMap[category] || category;
}

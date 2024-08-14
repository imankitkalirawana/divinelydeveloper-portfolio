import Counter from "@/components/animata/text/counter";
import React from "react";

const Stats = () => {
  return (
    <>
      <section className="flex justify-between flex-col md:flex-row gap-24 max-w-7xl px-8 mx-auto mt-24 md:mt-48 text-[70px] leading-[70px]">
        {stats.map((stat, index) => (
          <Card key={index} stat={stat} />
        ))}
      </section>
    </>
  );
};

const Card = ({ stat }: { stat: StatType }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <i className="font-ppneuemachinaregular text-primary">
        <Counter
          targetValue={parseInt(stat.value)}
          className="text-[90px] leading-[90px] text-primary"
        />
        +
      </i>
      <div className="text-[28px] font-clashdisplaymedium leading-[30px] text-center">
        {stat.title}
      </div>
    </div>
  );
};

interface StatType {
  title: React.ReactNode;
  value: string;
}

const stats: StatType[] = [
  {
    title: (
      <>
        Completed <br />
        Projects
      </>
    ),
    value: "100",
  },
  {
    title: (
      <>
        Great <br />
        Clients
      </>
    ),
    value: "50",
  },
  {
    title: (
      <>
        Years of <br />
        Experience
      </>
    ),
    value: "5",
  },
];

export default Stats;

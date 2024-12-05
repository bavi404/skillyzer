"use client";

import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Content, QuickStatistics } from "@/components/Content";
import { Analysis } from "@/components/Analysis";
import { Graph } from "@/components/Graph";
import { QuestionAnalysis } from "@/components/QuestionAnalysis";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    rank: 1,
    percentile: 90,
    currentScore: 10,
  });

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex ">
        <Sidebar />

        <main className="pl-10 flex md:flex-row flex-col w-full gap-10 p-4">
          <div className="flex flex-col w-full">
            <Content data={data} setData={setData} />
            <div className=" pt-4">
              <QuickStatistics data={data} />
            </div>
            <div>
              <Graph />
            </div>
          </div>

          <div className="flex flex-col">
            <Analysis />         
          <QuestionAnalysis percent={data.percentile} currentScore={data.currentScore} />
          </div>
        </main>
      </div>
    </div>
  );
}

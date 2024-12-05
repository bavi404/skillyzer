import { Button } from "@/components/ui/button";
import htmll from "@/public/htmll.png";
import tick from "@/public/tick.jpeg";
import trophy from "@/public/trophy.jpeg";
import notes from "@/public/notes.jpeg";
import { Dispatch, SetStateAction } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Content = ({
  data,
  setData,
}: {
  data: dataTypes;
  setData: Dispatch<
    SetStateAction<{
      rank: number;
      percentile: number;
      currentScore: number;
    }>
  >;
}) => {
  return (
    <>
      <div className="w-full">
        <h1 className="p-4">Skill Test</h1>
        <div className="border rounded-md p-4 flex sm:flex-row sm:gap-0 gap-10 flex-col sm:items-center space-x-4  bg-white">
          <img src={htmll.src} alt="HTML Logo" className="h-16 w-16" />
          <div className="flex-1">
            <h1 className="font-bold text-lg">Hyper Text Markup Language</h1>
            <p className="text-sm font-medium text-gray-600">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
          <Dialog>
            <DialogTrigger className="bg-blue-900 text-white px-6 py-2 rounded-xl">
              Update
            </DialogTrigger>
            <DialogContent className=" w-[600px]">
              <DialogHeader>
                <DialogTitle className="font-bold">Update scores</DialogTitle>
                <div className="flex items-center justify-between">
                  <p className="flex gap-3 text-sm">
                    <div className="flex justify-center items-center w-6 h-6 bg-blue-700 text-white rounded-full text-md ">
                      1
                    </div>
                    Update your<span className="font-bold">Rank</span>
                  </p>
                  <input
                    value={data.rank}
                    onChange={(e) =>
                      setData({ ...data, rank: parseInt(e.target.value) })
                    }
                    type="number"
                    placeholder="Rank"
                    className="border p-2 rounded-md w-40 mt-4"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="flex gap-3 text-sm">
                    <div className="flex justify-center items-center w-6 h-6   bg-blue-700 text-white rounded-full text-md ">
                      2
                    </div>
                    Update your<span className="font-bold">Percentile</span>
                  </p>
                  <input
                    value={data.percentile}
                    onChange={(e) =>
                      setData({
                        ...data,
                        percentile: parseFloat(e.target.value),
                      })
                    }
                    type="number"
                    placeholder="Percentile"
                    className="border p-2 rounded-md w-40 mt-4"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="flex gap-3 text-sm">
                    <div className="flex justify-center items-center w-6 h-6   bg-blue-700 text-white rounded-full text-md ">
                      3
                    </div>
                    Update your<span className="font-bold">Current Score</span>
                    (out of 15)
                  </p>
                  <input
                    value={data.currentScore}
                    type="number"
                    onChange={(e) =>
                      setData({
                        ...data,
                        currentScore: parseInt(e.target.value),
                      })
                    }
                    placeholder="Current Score"
                    className="border p-2 rounded-md w-40 mt-4"
                  />
                </div>
                <Button className="rounded-md w-20 border-blue-600 bg-white hover:bg-white border text-blue-600">Cancel</Button>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export interface dataTypes {
  rank: number;
  percentile: number;
  currentScore: number;
}

export const QuickStatistics = ({ data }: { data: dataTypes }) => {
  return (
    <div className="border rounded-md w-full p-4 ">
      <h2 className="font-bold text-lg mb-4">Quick Statistics</h2>
      <div className="flex justify-between sm:items-center sm:flex-row flex-col ">
        <div className="flex items-center space-x-4">
          <img src={trophy.src} className="h-20 w-14" />
          <div>
            <h3 className="text-lg font-bold">{data.rank}</h3>
            <p className="text-sm text-gray-600">YOUR RANK</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img src={notes.src} className="h-20 w-14" />
          <div>
            <h3 className="text-lg font-bold">{data.percentile}%</h3>
            <p className="text-sm text-gray-600">PERCENTILE</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 ">
          <img src={tick.src} className="h-10 w-10 " />
          <div>
            <h3 className="text-lg font-bold">{data.currentScore} / 15</h3>
            <p className="text-sm text-gray-600">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

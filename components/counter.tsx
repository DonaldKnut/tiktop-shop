import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store/store";
import { decrement, increment } from "@/app/store/slice";
import { Button } from "./ui/button";
import { PiArrowCircleRightDuotone } from "react-icons/pi";
import { GoInfo } from "react-icons/go";

export function Counter(): React.ReactNode {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <div>
        <div className="w-2/3 m-auto">
          <Button
            size="lg"
            variant="secondary"
            className="flex gap-2 w-full mt-8"
            onClick={() => dispatch(increment())}
          >
            Increment{" "}
            <PiArrowCircleRightDuotone className="text-2xl text-green-700" />
          </Button>
          <span className="text-white font-bold text-2xl text-center">
            {count}
          </span>
          {/* <button
          aria-label="Decrement value"
         
        >
          Decrement
        </button> */}
          <Button
            size="lg"
            variant="secondary"
            className="flex gap-2 w-full"
            onClick={() => dispatch(decrement())}
          >
            Decrement{" "}
            <PiArrowCircleRightDuotone className="text-2xl text-orange-700" />
          </Button>
          <div className="flex items-baseline gap-4 justify-center mt-3">
            <GoInfo className="text-8xl text-white" />
            <p className="text-xl text-white">
              adjust figure based on the number of expenses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

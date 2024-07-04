import React from "react";
import { Spinner } from "@material-tailwind/react";

export function CustomSpinner() {
  return (
    <div className="flex justify-center items-center mt-8">
      <Spinner className="h-16 w-16 text-primary-normal" />
    </div>
  );
}
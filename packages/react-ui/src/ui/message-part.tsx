"use client";

import { FC } from "react";
import { MessagePartPrimitive } from "@assistant-ui/react";
import { INTERNAL } from "@assistant-ui/react";
import classNames from "classnames";

const { useSmoothStatus, withSmoothContextProvider } = INTERNAL;

export const Text: FC = () => {
  const status = useSmoothStatus();
  return (
    <MessagePartPrimitive.Text
      className={classNames(
        "aui-text",
        status.type === "running" && "aui-text-running",
      )}
      component="p"
    />
  );
};

const exports = { Text: withSmoothContextProvider(Text) };

export default exports;

"use client";

import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
interface IProgressBar {
  background?: "light" | "gray" | "white";
  color?: "primary" | "warning" | "danger";
  circular?: boolean;
  animation?: boolean;
  duration?: number;
  children?: ReactNode;
  percentage: number;
  ease?:
    | "linear"
    | "easeIn"
    | "easeInOut"
    | "circIn"
    | "circOut"
    | "circInOut"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "anticipate";
}
const ProgressBar = (props: IProgressBar) => {
  const {
    ease = "easeOut",
    percentage,
    animation = true,
    background = "light",
    children,
    circular = false,
    color = "primary",
    duration = 0.7,
  } = props;

  const radius = circular ? "50%" : "";

  const controls = useAnimation();

  return (
    <>
      {animation ? (
        <div
          className={`w-100 rounded bg-${background} overflow-hidden`}
          style={{ height: "8px", borderRadius: radius }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: duration, ease: "easeOut" }}
            style={{ height: "8px" }}
            className={`bg-${color} rounded`}
          >
            {circular && children}
          </motion.div>
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "5px solid white",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              transformOrigin: " center",
              background: "#3498db",
            }}
            animate={controls}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "100%",
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ProgressBar;

import React from "react";
import "./menu-button.css";
import { motion } from "framer-motion";

const variants = {
  open: {
    width: 333,
    height: 590,
    top: "40px",
    right: "24px",
  },
  closed: {
    width: 100,
    height: 40,
    top: "53px",
    right: "39px",
  },
};

type Props = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuButton = ({ isActive, setIsActive }: Props) => {
  return (
    <>
      <div>
        <motion.div
          className="menu"
          variants={variants}
          animate={isActive ? "open" : "closed"}
        ></motion.div>
        <div
          className="button"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <motion.div
            className="slider"
            animate={{ top: isActive ? "-100%" : "0" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="el">
              <PerspectiveText label="Menu" />
            </div>
            <div className="el">
              <PerspectiveText label="Close" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

type PerspectiveTextProps = {
  label: string;
};

function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className="perspective_text">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

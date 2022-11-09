import "./src/styles/global.css";
import "./src/styles/reset.css";

import React from "react";
import { AnimatePresence } from "framer-motion";

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);

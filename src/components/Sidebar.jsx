import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(({ icon, name }, index) => (
        <button
          key={index}
          className="category-btn"
          onClick={() => setSelectedCategory(name)}
          style={{
            background: name === selectedCategory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {icon}
          </span>
          <span
            style={{
              opacity: name === selectedCategory ? "1" : "0.8",
            }}
          >
            {name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;

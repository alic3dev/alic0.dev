import type { grouping_project } from "@data/projects/types";

import react from "react";

export const projects_ios: grouping_project = {
  items: [
    {
      description: <p>recol:loop</p>,
      source_code_link: "https://github.com/alic0dev/recol",
      technologies: ["objc", "metal", "c"],
      title: "recol",
    },
    {
      description: <p>ios:sound:generation|synthesis</p>,
      source_code_link: "https://github.com/alic0dev/edat",
      technologies: ["swift"],
      title: "edat",
    },
  ],
  title: "ios",
};

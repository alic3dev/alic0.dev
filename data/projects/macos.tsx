import type { grouping_project } from "@data/projects/types";

import react from "react";

export const projects_macos: grouping_project = {
  items: [
    {
      description: <p>platform|navigte|building</p>,
      source_code_link: "https://github.com/alic0dev/c938",
      technologies: ["c", "obj-c", "metal"],
      title: "c938",
    },
    {
      description: <code>&#39;\0&#39; - (void*)0;</code>,
      source_code_link: "https://github.com/alic0dev/zoe",
      technologies: ["c", "obj-c", "metal"],
      title: "zoe",
    },
    {
      description: <p>[3d]:rendering_framework.utilizing(apple::metal);</p>,
      source_code_link: "https://github.com/alic0dev/metil",
      technologies: ["c", "obj-c", "metal"],
      title: "metil",
    },
  ],
  title: "macos",
};

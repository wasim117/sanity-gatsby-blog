export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61acf619cefb111c210f2f7b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-cdjr57mu",
                  apiId: "9bce30c7-a4dc-417a-9b9d-ce182a2e6d4b",
                },
                {
                  buildHookId: "61acf619e2710727d94bf17d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-z1fwj6hd",
                  apiId: "46c73993-ea79-4a79-9c0e-ac1f69ba8bf9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/wasim117/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-z1fwj6hd.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

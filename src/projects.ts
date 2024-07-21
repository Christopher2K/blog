import { getCollection } from "astro:content";

export async function getProjectsCollection(lang: string) {
  const projectsCollection = await getCollection("projects", ({ id }) => {
    return id.startsWith(lang);
  }).then((data) =>
    data.toSorted((a, b) => {
      if (a.data.publishingDate > b.data.publishingDate) {
        return -1;
      } else if (a.data.publishingDate < b.data.publishingDate) {
        return 1;
      } else {
        return 0;
      }
    }),
  );

  return projectsCollection.map((project) => {
    return {
      ...project,
      data: {
        ...project.data,
        publishingDate: new Date(project.data.publishingDate),
      },
    };
  });
}

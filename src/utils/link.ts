export const twitch = "https://twitch.tv/LLCoolChris_";
export const twitter = "https://x.com/LLCoolChris_";
export const linkedin = "https://www.linkedin.com/in/christopherkatoyi";
export const github = "https://github.com/christopher2k";
export const youtube =
  "https://www.youtube.com/channel/UC7U3QRobzF_tQfDGGQ2Izkw";

export function getArticleUrl(id: string, slug: string) {
  const [lang] = id.split("/");
  const url =
    "/" +
    [lang, "blog", slug].filter((fragment) => fragment !== "fr").join("/");
  return url;
}

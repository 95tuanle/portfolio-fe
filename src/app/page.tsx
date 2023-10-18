import {BACKEND_URL, fetchApi} from "@/utilities";
import {Metadata} from "next";
import GitHubUser from "@/components/github-user";
import GithubUserRepos from "@/components/github-user-repos";

export const generateMetadata = async (): Promise<Metadata> => {
  const gitHubUser = await fetchApi(`${BACKEND_URL}/github/user`);
  return {
    title: `Portfolio - ${gitHubUser["name"]}`,
    description: `Welcome to the portfolio of ${gitHubUser["name"]}, a ${gitHubUser["bio"]} based in ${gitHubUser["location"]}. Explore my projects and skills.`,
    metadataBase: new URL(gitHubUser["avatar_url"]),
    icons: {
      icon: {url: gitHubUser["avatar_url"]},
      shortcut: {url: gitHubUser["avatar_url"]},
      apple: {url: gitHubUser["avatar_url"]},
      other: {url: gitHubUser["avatar_url"]}
    },
    openGraph: {
      title: `Portfolio - ${gitHubUser["name"]}`,
      description: `Welcome to the portfolio of ${gitHubUser["name"]}, a ${gitHubUser["bio"]} based in ${gitHubUser["location"]}. Explore my projects and skills.`,
      images: [{url: gitHubUser["avatar_url"]}]
    },
    twitter: {
      title: `Portfolio - ${gitHubUser["name"]}`,
      description: `Welcome to the portfolio of ${gitHubUser["name"]}, a ${gitHubUser["bio"]} based in ${gitHubUser["location"]}. Explore my projects and skills.`,
      creator: `@${gitHubUser["twitter_username"]}`,
      images: [{url: gitHubUser["avatar_url"]}]
    }
  }
};

const Page = async () => {
  const gitHubUser = await fetchApi(`${BACKEND_URL}/github/user`);

  const gitHubUserRepos = await fetchApi(`${BACKEND_URL}/github/user/repos`);

  return (
    <>
      <GitHubUser gitHubUser={gitHubUser}/>
      <GithubUserRepos gitHubUserRepos={gitHubUserRepos}/>
    </>
  )
};

export default Page;

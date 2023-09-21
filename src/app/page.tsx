import {BACKEND_URL, fetchApi} from "@/utilities";
import {Metadata} from "next";

export const generateMetadata = async (): Promise<Metadata> => {
    const gitHubUser = await fetchApi(`${BACKEND_URL}/github/user`);
    return {
        title: `Portfolio - ${gitHubUser["name"]}`,
        description: `Welcome to the portfolio of ${gitHubUser["name"]}, a ${gitHubUser["bio"]} based in ${gitHubUser["location"]}. Explore my projects and skills.`,
    }
};

const Home = async () => {
    const gitHubUser = await fetchApi(`${BACKEND_URL}/github/user`);
    console.log(gitHubUser);

    const gitHubUserRepos = await fetchApi(`${BACKEND_URL}/github/user/repos`);
    console.log(gitHubUserRepos);

    return (
        <>
            <p>{gitHubUser["name"]}</p>
            <p>{gitHubUser["bio"] + gitHubUser["company"]}</p>
            <p>Based in {gitHubUser["location"]}</p>
            <p>GitHub User: {gitHubUser["login"]}</p>
        </>
    )
};

export default Home;

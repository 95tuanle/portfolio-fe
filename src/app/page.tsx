import Head from "next/head";
import {BACKEND_URL, fetchApi} from "@/utilities";

const Home = async () => {
    const gitHubUser = await fetchApi(`${BACKEND_URL}/github/user`);
    console.log(gitHubUser);

    const gitHubUserRepos = await fetchApi(`${BACKEND_URL}/github/user/repos`);
    console.log(gitHubUserRepos);

    return (
        <>
            <Head>
                <title>xPortfolio - Nguyen Anh Tuan Le</title>
                <meta name="description"
                      content="xWelcome to the portfolio of Nguyen Anh Tuan Le, a Software Developer based in Toronto, Ontario, Canada. Explore my projects and skills."/>
            </Head>
            <p>{gitHubUser["name"]}</p>
            <p>{gitHubUser["bio"] + gitHubUser["company"]}</p>
            <p>Based in {gitHubUser["location"]}</p>
            <p>GitHub User: {gitHubUser["login"]}</p>
        </>
    )
};

export default Home;

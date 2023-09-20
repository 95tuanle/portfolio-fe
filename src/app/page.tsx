import {ResolvingMetadata} from "next";

const getGitHubUser = async () => {
    const response = await fetch('https://portfolio-be.adaptable.app/github/user');
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};

const getGitHubUserRepos = async () => {
    const response = await fetch('https://portfolio-be.adaptable.app/github/user/repos');
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

const Home = async () => {
    const gitHubUser = await getGitHubUser();
    console.log(gitHubUser);

    const gitHubUserRepos = await getGitHubUserRepos();
    console.log(gitHubUserRepos);

    return (
        <div>
            <p>{gitHubUser["name"]}</p>
            <p>{gitHubUser["bio"] + gitHubUser["company"]}</p>
            <p>Based in {gitHubUser["location"]}</p>
            <p>GitHub User: {gitHubUser["login"]}</p>
        </div>
    )
};

export default Home;

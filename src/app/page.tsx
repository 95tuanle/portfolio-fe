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


export default async () => {
    const gitHubUser = await getGitHubUser();
    console.log(gitHubUser);

    const gitHubUserRepos = await getGitHubUserRepos();
    console.log(gitHubUserRepos);

    return (
        <div>
            <p>Nguyen Anh Tuan Le</p>
            <p>Software Developer</p>
            <p>Based in Toronto, Ontario, Canada</p>
            <p>Explore my projects and skills.</p>
            <p>GitHub User: {gitHubUser["login"]}</p>
        </div>
    )
}

import GitHubUserRepo from "@/components/github-user-repo";

const GitHubUserRepos = ({gitHubUserRepos}: any) => {
  return (<>{gitHubUserRepos.map((gitHubUserRepo: any) => (
    <GitHubUserRepo gitHubUserRepo={gitHubUserRepo} key={gitHubUserRepo["id"]}/>))}</>);
};

export default GitHubUserRepos;
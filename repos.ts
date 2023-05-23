import axios from 'axios';

const organization = 'Your Azure Organization Name';
const personalAccessToken = 'Basic:Your Azure Personal Access Token'; // Personal Access Token a.k.a PAT
const project = "Your Azure Project Name";

async function fetchRepositories() {
  try {
    const base64PAT = Buffer.from(personalAccessToken).toString("base64");
    const url = `https://dev.azure.com/${organization}/${project}/_apis/git/repositories?api-version=7.0`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Basic ${base64PAT}`,
      },
    });

    console.log(response.data);
    const repositories = response.data.value;
    
    repositories.forEach((repository: any) => {
      console.log(repository.name);
    });
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
}

fetchRepositories();
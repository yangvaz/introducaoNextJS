import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"

type Repo = {
  name: string;
  description: string;
}

type RepositoriesProps = {
  repos: Repo[];
}

export default function Repositories({ repos }: RepositoriesProps) {
  return (
    <div>
      <h1> Repositórios:  47:18</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.name}> {repo.name} </li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/yangvaz/repos')
  const data = await response.json();

  //console.log(data);

  return {
    props: {
      repos: data
    }
  }
}
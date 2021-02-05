import { useEffect, useState } from "react"

type Repo = {
  name: string;
  description: string;
}

export default function Repositories() {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/yangvaz/repos')
      .then(response => response.json())
      .then((data) => setRepos(data))
  }, [])

  return (
    <div>
      <h1> Repositórios: </h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.name}> {repo.name} </li>
        ))}
      </ul>
    </div>
  )
}
import { GetStaticProps } from "next"

type Profile = {
  name: string;
  bio: string;
}

type ProfileProps = {
  profile: Profile;
}

export default function Profile({ profile }: ProfileProps) {
  return (
    <div>
      <h1> Perfil: </h1>
      <p> Nome: {profile.name} </p> 
      <p> Bio: {profile.bio} </p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => { // funciona em Build
  const response = await fetch('https://api.github.com/users/yangvaz')
  const data = await response.json();

  return {
    props: {
      profile: data
    },
    revalidate: 10,
  }
}
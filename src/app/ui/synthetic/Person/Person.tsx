import "./Person.scss"

interface PersonProps {
  name: string
  bio: string
  avatar: string
}

function Person(props: PersonProps) {
  return (
    <div className="person">
      <img className="person__avatar" src={props.avatar} alt="someone's avatar" />
      <div className="person__info">
        <div className="person__name">{props.name}</div>
        <div className="person__bio">{props.bio}</div>
      </div>
    </div>
  )
}

export default Person

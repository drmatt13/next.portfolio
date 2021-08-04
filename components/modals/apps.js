import Link from '../Link'

const index = ({apps, toggleModal}) => {
  return (
    <div className="fade-in">
      {apps.map((app, i) => (
        <Link 
          key={i} 
          href={`/apps/${app.split(".")[0]}`}
          toggleModal={toggleModal}
        >
          {app.split(".")[0]}
        </Link> 
      ))}
    </div>
  )
}

export default index
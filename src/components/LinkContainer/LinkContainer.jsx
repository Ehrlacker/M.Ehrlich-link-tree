import Links from "../Links/Links"
import "./LinkContainer.css"

const LinkContainer = () => {
  return (
    <div className="link-container">
      {Links.map((link) => {
        return (
          
          
            <a href={link.link} target="_blank" rel="noreferrer" key={link.id}>{link.title}</a>
          
        )
      })}
    </div>
  )
}
export default LinkContainer

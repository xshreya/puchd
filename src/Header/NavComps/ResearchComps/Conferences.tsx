import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Conferences() {
  const heading = "conferences"

  const list = [
    {
      class: 'conferences',
      href: '#',
      text: "University Conferences"
    }
  ]

  return (
    <div className={heading + ' nav-drop-list-container'}>
      <button>
        <Heading3 heading={heading} />
      </button>
      <div className={heading+'-list nav-drop-list-content'}>
        <Links links={list} />
      </div>
    </div>
  )

}
import {Links} from "../comps/Links";

export function Right(){
  const links = [
    {
      type: 'text',
      class: "jobs",
      href: "#",
      text: "jobs"
    },
    {
      type: 'text',
      class: "tenders",
      href: "#",
      text: "tenders"
    },
    {
      type: 'text',
      class: "accounts",
      href: "#",
      text: "accounts"
    },
    {
      type: 'text',
      class: "calendar",
      href: "#",
      text: "calendar"
    },
    {
      type: 'text',
      class: "publications",
      href: "#",
      text: "publications"
    },
    {
      type: 'text',
      class: "pu_mail",
      href: "#",
      text: "PU@MAIL"
    }
  ]
  return(
    <Links links={links} />
  )
}
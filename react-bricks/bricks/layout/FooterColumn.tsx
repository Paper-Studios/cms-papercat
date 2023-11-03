import React from "react"
import { Repeater, types } from "react-bricks/frontend"
import styles from "../../../css/Footer.module.css"

interface FooterColumnProps {}

const FooterColumn: types.Brick<FooterColumnProps> = () => {
  return (
    <div className={styles.footerSection}>
      <Repeater propName='links' />
      <Repeater propName='buttons' />
    </div>
  )
}

FooterColumn.schema = {
  name: "footer-column",
  label: "Column",
  category: "layout",
  hideFromAddMenu: true,
  repeaterItems: [
    {
      name: "links",
      itemType: "footer-link",
      min: 1,
      max: 3,
    },
    {
      name: 'buttons',
      itemType: 'button',
      min: 0,
      max: 3
    },
  ]
}

export default FooterColumn
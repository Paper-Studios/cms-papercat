import React from "react"
import { Text, Repeater, types, useAdminContext } from "react-bricks/frontend"

import styles from "../../../css/Footer.module.css"

interface FooterProps {}

const Footer: types.Brick<FooterProps> = ({}) => {
  const { isAdmin, previewMode } = useAdminContext();
  return (
    <footer className={styles.footer}>
      <section className={isAdmin && !previewMode ? `${styles.adminText} ${styles.footerSectionTitle}` : styles.footerSectionTitle}>
        <Text
          propName="title"
          placeholder=""
          renderBlock={({ children }) => (
            <h3 className={styles.footerTitle}>{children}</h3>
          )}
        />
        <Text
          propName="copyright"
          placeholder=""
          renderBlock={({ children }) => (
            <span>{children}</span>
          )}
        />
      </section>
      <Repeater propName="columns" />
    </footer>
  )
}

Footer.schema = {
  name: "footer",
  label: "Footer",
  category: "layout",
  tags: ["footer"],
  repeaterItems: [
    {
      name: "columns",
      itemType: "footer-column",
      max: 3,
    },
  ],
  getDefaultProps: () => ({
    title: "Paper Cat Games",
    copyright: "©2023 CA, USA",
    columns: [
      {
        links: [
          {
            linkText: "About the Team",
            linkPath: "/team",
          },
          {
            linkText: "Released Games",
            linkPath: "/games",
          },
          {
            linkText: "Blog and Updates",
            linkPath: "/blog",
          },
        ],
      },
      {
        links: [
          {
            linkText: "Contact Info",
          },
          {
            linkText: "officialemail@email.com",
          },
          {
            linkText: "(123) 456-7890",
          },
        ],
      },
      {
        links: [
          {
            linkText: "Download our latest",
          },
        ],
        buttons: [
          {
            buttonType: 'download',
            text: 'Press Kit',
            icon: 'download',
            size: 'normal',
            className: 'footerBtn'
          }
        ]
      }
    ],
  }),
  sideEditProps: [],
}

export default Footer
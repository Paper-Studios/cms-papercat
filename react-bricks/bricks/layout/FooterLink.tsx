import React from "react"
import { RichText, types, useAdminContext } from "react-bricks/frontend"

import styles from "../../../css/Footer.module.css"

interface FooterLinkProps {}

const FooterLink: types.Brick<FooterLinkProps> = () => {
  const { isAdmin, previewMode } = useAdminContext();

  return (
    <RichText
      propName='linkText'
      placeholder='Text...'
      renderBlock={({ children }) => (
        <span className={isAdmin && !previewMode ? `${styles.adminText} ${styles.text}` : styles.text}>{children}</span>
      )}
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Highlight,
        types.RichTextFeatures.Link
      ]}
      renderHighlight={({ children }) => (
        <span style={{ color: '#F5647F' }}>{children}</span>
      )}
    />
  );
}

FooterLink.schema = {
  name: "footer-link",
  label: "Link",
  category: "layout",
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    linkText: "Text or Link!",
  })
}

export default FooterLink

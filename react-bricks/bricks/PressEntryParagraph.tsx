import React from 'react'
import { types, RichText } from 'react-bricks/frontend'

import styles from '../../css/Presskit.module.css'

interface PressEntryParagraphProps {

}

const PressEntryParagraph: types.Brick<PressEntryParagraphProps> = () => {
  return (
    <RichText
      propName='paragraph'
      placeholder=''
      renderBlock={({ children }) => (
        <p className={styles.p}>{children}</p>
      )}
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Italic,
        types.RichTextFeatures.Highlight,
        types.RichTextFeatures.Link
      ]}
      renderHighlight={({ children }) => (
        <span style={{ color: '#F5647F' }}>{children}</span>
      )}
    />
  )
}

PressEntryParagraph.schema = {
  name: 'PresskitEntryParagraph',
  label: 'Presskit Entry Paragraph',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    paragraph: 'Write your paragraph or description here.'
  }),
}

export default PressEntryParagraph
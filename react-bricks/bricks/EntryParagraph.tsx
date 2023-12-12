import React from 'react';
import { types, RichText } from 'react-bricks/frontend';

import styles from '../../css/Presskit.module.css';

const EntryParagraph: types.Brick = () => {
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
  );
}

EntryParagraph.schema = {
  name: 'EntryParagraph',
  label: 'Entry Paragraph',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    paragraph: 'Write your paragraph or description here.'
  }),
}

export default EntryParagraph;
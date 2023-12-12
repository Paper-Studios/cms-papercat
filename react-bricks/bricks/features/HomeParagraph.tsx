import React from 'react';
import { types, RichText } from 'react-bricks/frontend';

import styles from '../../../css/Home.module.css';

const HomeParagraph: types.Brick = () => {
  return (
    <RichText
      renderBlock={({ children }) => (
        <p className={styles.abstract}>{children}</p>
      )}
      placeholder='Type an abstract...'
      propName='abstract'
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Italic,
        types.RichTextFeatures.Highlight
      ]}
      renderHighlight={({ children }) => (
        <span style={{ color: '#F5647F' }}>{children}</span>
      )}
    />
  );
}

HomeParagraph.schema = {
  name: 'HomeParagraph',
  label: 'Home Page Paragraph',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    abstract: "Type your summary, paragraph, or description here!",
  }),
}

export default HomeParagraph;
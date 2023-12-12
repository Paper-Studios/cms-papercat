import React from 'react';
import { types, Text } from 'react-bricks/frontend';

import styles from '../../../css/Home.module.css';

const HomeTitle: types.Brick = () => {
  return (
    <div className={styles.blurb}>
      <Text
        renderBlock={({ children }) => (
          <span>{children}</span>
        )}
        propName='blurb'
        placeholder=''
      />
    </div>
  )
}

HomeTitle.schema = {
  name: 'HomeTitle',
  label: 'Title Blurb',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    blurb: "Add a stand-out title!"
  }),
}

export default HomeTitle;
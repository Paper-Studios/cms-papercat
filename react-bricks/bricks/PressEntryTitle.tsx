import React from 'react'
import { types, Text } from 'react-bricks/frontend'

import styles from '../../css/Presskit.module.css'

interface PressEntryTitleProps {

}

const PressEntryTitle: types.Brick<PressEntryTitleProps> = () => {
  return (
    <Text
      propName='title'
      placeholder=''
      renderBlock={({ children }) => (
        <h2 className={styles.h2}>{children}</h2>
      )}
    />
  )
}

PressEntryTitle.schema = {
  name: 'PresskitEntryTitle',
  label: 'Presskit Entry Title',
  hideFromAddMenu: true,
}

export default PressEntryTitle
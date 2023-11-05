import React from 'react'
import { types, Image, useAdminContext } from 'react-bricks/frontend'

import styles from '../../css/Presskit.module.css'

interface PressEntryImageProps {

}
const PressEntryImage: types.Brick<PressEntryImageProps> = () => {
  const { isAdmin, previewMode } = useAdminContext()
  return (
    <Image
       propName='pressImage'
       alt='Gameplay'
       imageClassName={styles.screenshot}
       renderWrapper={({ children }) => {
          // extract url from this particular image stored in react bricks repo (webp format)
          const url = isAdmin && !previewMode ? '' : Object.values(Object.values(Object.values(children)[4].children[0])[4])[0];
          return isAdmin && !previewMode ? (
              <div className={styles.imgWrapper}>{children}</div>
            ) : (
              <a href={url} download className={styles.imgWrapper}>{children}</a>
            );
       }}
    />
  )
}

PressEntryImage.schema = {
  name: 'PressEntryImage',
  label: 'Press Entry Image',
  hideFromAddMenu: true,
}

export default PressEntryImage;
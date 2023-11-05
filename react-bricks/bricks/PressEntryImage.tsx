import React from 'react'
import { types, Image } from 'react-bricks/frontend'

import styles from '../../css/Presskit.module.css'

interface PressEntryImageProps {

}
const PressEntryImage: types.Brick<PressEntryImageProps> = () => {
  return (
    <Image
       propName='pressImage'
       alt='Gameplay'
       imageClassName={styles.screenshot}
       renderWrapper={({ children }) => {
          // extract url from this particular image stored in react bricks repo
          const url = Object.values(Object.values(Object.values(children)[4].children[0])[4])[0];
          return (
            <div className={styles.imgWrapper} onClick={() => {console.log('CLICK!', url)}}>{children}</div>
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
import React from 'react'
import { types, Image } from 'react-bricks/frontend'

import styles from '../../../css/Home.module.css'

const ImagePair: types.Brick = () => {
  return (
    <div className={styles.imagePair}>
      <Image
        propName='screenshot1'
        alt='Gameplay'
        aspectRatio={1.78}
        maxWidth={600}
      />
      <Image
        propName='screenshot2'
        alt='Gameplay'
        aspectRatio={1.78}
        maxWidth={600}
      />
    </div>
  )
}

ImagePair.schema = {
  name: 'ImagePair',
  label: 'Image Pair',
  hideFromAddMenu: true,
}

export default ImagePair
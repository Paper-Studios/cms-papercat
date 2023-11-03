import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

import styles from '../../css/Presskit.module.css'

interface PresskitEntryProps {

}

const PresskitEntry: types.Brick<PresskitEntryProps> = () => {
  return (
    <div className={styles.mainbarEntry}>
      <Repeater propName='PresskitEntryTitle' />
    </div>
  )
}

PresskitEntry.schema = {
  name: 'PresskitEntry',
  label: 'Presskit Entry',
  repeaterItems: [
    {
      name: 'PresskitEntryTitle',
      itemType: 'PresskitEntryTitle',
      itemLabel: 'Entry Title',
      max: 1
    }
  ],
  getDefaultProps: () => ({
    PresskitEntryTitle: [{
      title: 'Title Goes Here'
    }],
  }),
}

export default PresskitEntry
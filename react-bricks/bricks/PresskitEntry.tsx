import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

import styles from '../../css/Presskit.module.css'

interface PresskitEntryProps {

}

const PresskitEntry: types.Brick<PresskitEntryProps> = () => {
  return (
    <div className={styles.mainbarEntry}>
      <Repeater propName='PresskitEntryTitle' />
      <Repeater propName='PresskitEntryParagraph' />
      <div className={styles.gameImages}>
        <Repeater propName='PressEntryImage' />
      </div>
    </div>
  )
}

PresskitEntry.schema = {
  name: 'PresskitEntry',
  label: 'Presskit Entry',
  hideFromAddMenu: true,
  repeaterItems: [
    {
      name: 'PresskitEntryTitle',
      itemType: 'PresskitEntryTitle',
      itemLabel: 'Entry Title',
      max: 1
    },
    {
      name: 'PresskitEntryParagraph',
      itemType: 'PresskitEntryParagraph',
      itemLabel: 'Entry Paragraph',
    },
    {
      name: 'PressEntryImage',
      itemType: 'PressEntryImage',
      itemLabel: 'Game Image',
    }
  ],
  getDefaultProps: () => ({
    PresskitEntryTitle: [{
      title: 'Title Goes Here'
    }],
  }),
}

export default PresskitEntry
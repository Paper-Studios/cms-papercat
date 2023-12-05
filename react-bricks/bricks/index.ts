import { types } from 'react-bricks/frontend'
import layout from './layout'
import Home from './Home'
import HomeTitle from './features/HomeTitle'
import ImagePair from './features/ImagePair'
import Team from './Team'
import TeamMember from './TeamMember'
import Presskit from './Presskit'
import PresskitEntry from './PresskitEntry'
import PressEntryTitle from './PressEntryTitle'
import EntryParagraph from './EntryParagraph'
import PressEntryImage from './PressEntryImage'
import BigImage from './features/BigImage'
import Title from './features/Title'
import Paragraph from './features/Paragraph'

const bricks: types.Theme[] = [
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Base Layout',
        bricks: [...layout]
      },
      {
        categoryName: 'Hero Section',
        bricks: [Home, HomeTitle, ImagePair]
      },
      {
        categoryName: 'Team Section',
        bricks: [Team, TeamMember]
      },
      {
        categoryName: 'Presskit Section',
        bricks: [Presskit, PresskitEntry, PressEntryTitle, EntryParagraph, PressEntryImage]
      },
      {
        categoryName: 'Single column / Blog',
        bricks: [Title, Paragraph, BigImage],
      },
    ],
  },
]

export default bricks

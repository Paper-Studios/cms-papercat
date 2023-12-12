import { types } from 'react-bricks/frontend';
import layout from './layout';
import Home from './Home';
import HomeEntry from './HomeEntry';
import HomeTitle from './features/HomeTitle';
import ImagePair from './features/ImagePair';
import HomeParagraph from './features/HomeParagraph';
import SteamBox from './features/SteamBox';
import Team from './Team';
import TeamMember from './TeamMember';
import Presskit from './Presskit';
import PresskitEntry from './PresskitEntry';
import PressEntryTitle from './PressEntryTitle';
import EntryParagraph from './EntryParagraph';
import PressEntryImage from './PressEntryImage';
import BigImage from './features/BigImage';
import Title from './features/Title';
import Paragraph from './features/Paragraph';
import Games from './Games';
import GameCard from './GameCard';

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
        bricks: [Home, HomeEntry, HomeTitle, ImagePair, HomeParagraph, SteamBox]
      },
      {
        categoryName: 'Team Section',
        bricks: [Team, TeamMember]
      },
      {
        categoryName: 'Games Section',
        bricks: [Games, GameCard]
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

export default bricks;

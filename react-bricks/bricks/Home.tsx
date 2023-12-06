import React from 'react'
import IFramePlayer from './features/IFramePlayer'
import { Text, RichText, Image, types, Repeater } from 'react-bricks/frontend'
import styles from '../../css/Home.module.css'

interface HomeProps {
  videoLink: string;
}

const Home: types.Brick<HomeProps> = ({ videoLink }) => {
  return (
    <div className={styles.Home}>
      <div className={styles.bannerContainer}>
        <Image
          propName='header'
          alt='Paper Perjury Banner'
          imageClassName={styles.headerimg}
          aspectRatio={2.21}
        />
        <IFramePlayer videoLink={videoLink} classname={styles.bannerVideo}/>
      </div>
      <Repeater propName="HomeEntry" />
    </div>
  );
};

Home.schema = {
  name: 'home',
  label: 'Home Page',
  category: 'layout',
  repeaterItems: [
    {
      name: 'HomeEntry',
      itemType: 'HomeEntry',
      itemLabel: 'Section Entry',
    },
  ],
  getDefaultProps: () => ({
    videoLink: "https://www.youtube.com/embed/mvKB5AkDQko?si=jSEgbFWovtSaBkjB",
    HomeEntry: [
      {
        HomeTitle: [
          {
            blurb: "Solve Crimes, Outsmart Criminals",
          },
        ],
      },
      {
        HomeTitle: [
          {
            blurb: "Coming Early 2024",
          },
        ],
        HomeParagraph: [
          {
            abstract: "Paper Perjury is an engaging point-and-click detective game available on Steam. Developed by James Acosta and his team, Paper Perjury garnered recognition by winning the Tiny Team Selections award in 2023. In Paper Perjury, players step into the shoes of Justina, a hired police clerk with a knack for discovering the truth. With a total of 5 cases to investigate, players must put their detective skills to the test by interviewing suspects and collecting evidence. The game's pixel art style adds a charming and nostalgic touch, making Paper Perjury a must-play for fans of classic detective adventures like Ace Attorney.",
          },
        ],
        SteamBox: [
          {
            steamTitle: "Paper Perjury",
            steamDesc: "It all started with a simple robbery. When that thread was pulled, a tapestry of mysteries was revealed. Solve cases and outsmart criminals in a detective story full or lies, confessions, and maybe even a murder or two.",
            tinyTeam: true,
            windowsIcon: true,
            appleIcon: true,
            blackSteamBtn: "$0.00",
            greenSteamBtn: "Add to Wishlist",
            greenSteamBtnLink: "https://store.steampowered.com/app/1919600/Paper_Perjury/"
          }
        ]
      },
    ],
  }),
  sideEditProps: [
    {
      groupName: 'Hero Banner',
      defaultOpen: true,
      props: [
        {
          name: 'videoLink',
          label: 'Trailer Url',
          helperText: 'On YouTube, click on Share, then Embed, then copy the src url without quotations',
          type: types.SideEditPropType.Text,
        }
      ]
    },
  ],
};

export default Home;
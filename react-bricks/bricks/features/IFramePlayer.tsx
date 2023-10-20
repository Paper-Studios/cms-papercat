import React from 'react';
import { types } from 'react-bricks/frontend';
import styles from "../../../css/Home.module.css";

interface IFramePlayerProps {
  videoLink: string;
}
const IFramePlayer: types.Brick<IFramePlayerProps> =({ videoLink }) => (
  <iframe
    src={videoLink}
    title="YouTube video player"
    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    className={styles.bannerVideo}
  />
);

IFramePlayer.schema = {
  name: 'IFramePlayer',
  label: 'Video Player',
  category: 'features',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    videoLink: "https://www.youtube.com/embed/mvKB5AkDQko?si=jSEgbFWovtSaBkjB",
  }),
  sideEditProps: [
    {
      groupName: 'Hero Banner',
      defaultOpen: true,
      props: [
        {
          name: 'videoLink',
          label: 'Trailer Url',
          type: types.SideEditPropType.Text,
        }
      ]
    }
  ],
}
export default IFramePlayer;
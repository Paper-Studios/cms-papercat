import React from 'react';
import { types } from 'react-bricks/frontend';

interface IFramePlayerProps {
  videoLink: string;
  classname: string;
}
const IFramePlayer: types.Brick<IFramePlayerProps> =({ videoLink, classname }) => (
  <iframe
    src={videoLink}
    title="YouTube video player"
    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    className={classname}
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
      groupName: 'Video Player',
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
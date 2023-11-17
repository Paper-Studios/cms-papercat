import Router from 'next/router'
import { types } from 'react-bricks/frontend'

import bricks from './bricks'
import pageTypes from './pageTypes'
import NextLink from './NextLink'

const config: types.ReactBricksConfig = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
  apiKey: process.env.API_KEY,
  bricks,
  pageTypes,
  customFields: [],
  logo: "/logo.png",
  loginUI: {
    sideImage: "/assets/pcLoginSide.png",
    logo: "/logo.png",
    logoWidth: 75,
    logoHeight: 75,
    welcomeText: "Welcome back, Paper Cat!",
  },
  contentClassName: "",
  renderLocalLink: NextLink,
  navigate: (path: string) => Router.push(path),
  loginPath: "/admin",
  editorPath: "/admin/editor",
  playgroundPath: "/admin/playground",
  appSettingsPath: "/admin/app-settings",
  previewPath: "/preview",
  useCssInJs: false,
  appRootElement: "#__next",
  clickToEditSide: types.ClickToEditSide.BottomRight,
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
  blockIconsPosition: types.BlockIconsPosition.OutsideBlock,
  enableUnsplash: true,
  unsplashApiKey: "",
  enablePreviewImage: true,
  enableDefaultEmbedBrick: true,
}

export default config
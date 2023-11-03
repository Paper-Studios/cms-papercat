import { types } from "react-bricks/frontend"
import layout from "./layout"
import Home from "./Home"
import Team from "./Team"
import TeamMember from "./TeamMember"
import Presskit from "./Presskit"
import features from "./features"

// const bricks: types.Brick[] = [HeroUnit, ...layout, ...features]

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
        bricks: [Home]
      },
      {
        categoryName: 'Team Section',
        bricks: [Team, TeamMember]
      },
      {
        categoryName: 'Presskit Section',
        bricks: [Presskit]
      },
    ],
  },
]

export {
  TeamMember,
}

export default bricks

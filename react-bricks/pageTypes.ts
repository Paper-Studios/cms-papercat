import { types } from "react-bricks/frontend"

const pageTypes: types.IPageType[] = [
  {
    name: "page",
    pluralName: "pages",
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
  {
    name: "layout",
    pluralName: "layout",
    defaultLocked: true,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => ['navbar', 'footer'],
    isEntity: true,
  },
  {
    name: "team",
    pluralName: "teams",
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
]

export default pageTypes

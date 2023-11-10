import { types } from 'react-bricks/frontend'
import { Padding, Size } from './components/Container'
import { Border } from './components/Section'

export const containerSizeEditProps: types.ISideEditProp = {
  name: 'width',
  label: 'Width',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      { value: 'medium', label: 'Medium' },
      { value: 'small', label: 'Small' },
    ],
  },
}

export const containerWidthSideGroup: types.ISideGroup = {
  groupName: 'Container width',
  defaultOpen: false,
  props: [containerSizeEditProps],
}

export const sectionPaddingsEditProps: types.ISideEditProp[] = [
  {
    name: 'paddingTop',
    label: 'Padding Top',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Select,
      options: [
        { value: '20', label: '20' },
        { value: '16', label: '16' },
        { value: '12', label: '12' },
        { value: '10', label: '10' },
        { value: '8', label: '8' },
        { value: '6', label: '6' },
        { value: '0', label: 'None' },
      ],
    },
  },
  {
    name: 'paddingBottom',
    label: 'Padding Bottom',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Select,
      options: [
        { value: '20', label: '20' },
        { value: '16', label: '16' },
        { value: '12', label: '12' },
        { value: '10', label: '10' },
        { value: '8', label: '8' },
        { value: '6', label: '6' },
        { value: '0', label: 'None' },
      ],
    },
  },
]

export const borderTopEditProp: types.ISideEditProp = {
  name: 'borderTop',
  label: 'Border Top',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      { value: 'none', label: 'None' },
      { value: 'full', label: 'Full-width' },
      { value: 'boxed', label: 'Boxed' },
    ],
  },
}

export const borderBottomEditProp: types.ISideEditProp = {
  name: 'borderBottom',
  label: 'Border Bottom',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      { value: 'none', label: 'None' },
      { value: 'full', label: 'Full-width' },
      { value: 'boxed', label: 'Boxed' },
    ],
  },
}

export const sectionBordersEditProps: types.ISideEditProp[] = [
  borderTopEditProp,
  borderBottomEditProp,
]

export const paddingBordersSideGroup: types.ISideGroup = {
  groupName: 'Padding & Borders',
  defaultOpen: false,
  props: [...sectionPaddingsEditProps, ...sectionBordersEditProps],
}
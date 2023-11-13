import React from 'react'
import { types } from 'react-bricks/frontend'
import Container, { Padding, Size } from '../../components/Container'
import Section, { Border, sectionDefaults } from '../../components/Section'
import { containerWidthSideGroup, paddingBordersSideGroup } from '../../SideEditProps'
import TitleSubtitle from '../../components/TitleSubtitle'

interface TitleProps {
  backgroundColor: string
  paddingTop: Padding
  paddingBottom: Padding
  borderTop: Border
  borderBottom: Border
  width: Size
  bigCentered: boolean
}

const Title: types.Brick<TitleProps> = ({
  bigCentered,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <TitleSubtitle
          bigCentered={bigCentered}
          backgroundIsWhite={backgroundColor === '#ffffff'}
        />
      </Container>
    </Section>
  )
}

Title.schema = {
  name: 'title',
  label: 'Title',
  category: 'single column / blog',
  tags: ['title'],
  previewImageUrl: `/bricks-preview-images/title.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    paddingTop: '0',
    paddingBottom: '0',
    title: 'Thick as a brick',
    subtitle: "All in all you're just another brick in the page",
    bigCentered: true,
  }),
  sideEditProps: [
    {
      name: 'backgroundColor',
      label: 'Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#402278', label: 'Dark Purple' },
          { value: '#884CF5', label: 'Bright Purple' },
          { value: '#ffffff', label: 'White' },
          { value: '#F5647F', label: 'Red' },
        ],
      },
    },
    paddingBordersSideGroup,
    containerWidthSideGroup,
    {
      groupName: 'Text',
      defaultOpen: true,
      props: [
        {
          name: 'bigCentered',
          label: 'Big centered',
          type: types.SideEditPropType.Boolean,
        }
      ],
    },
  ],
}

export default Title
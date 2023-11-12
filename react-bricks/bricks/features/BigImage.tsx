import React from 'react'
import { Image, types } from 'react-bricks/frontend'
import Container, { Padding, Size } from '../../components/Container'
import Section, { Border, sectionDefaults } from '../../components/Section'
import { containerWidthSideGroup, paddingBordersSideGroup } from '../../SideEditProps'

const photo = {
  fallbackSrc:
    'https://images.reactbricks.com/original/71fd29e5-d54d-4c99-a2da-681bd8d888d1.jpg',
  fallbackSrcSet:
    'https://images.reactbricks.com/src_set/71fd29e5-d54d-4c99-a2da-681bd8d888d1-1080.jpg 1080w,\nhttps://images.reactbricks.com/src_set/71fd29e5-d54d-4c99-a2da-681bd8d888d1-600.jpg 600w,\nhttps://images.reactbricks.com/src_set/71fd29e5-d54d-4c99-a2da-681bd8d888d1-300.jpg 300w',
  fallbackType: 'image/jpeg',
  src: 'https://images.reactbricks.com/original/71fd29e5-d54d-4c99-a2da-681bd8d888d1.webp',
  placeholderSrc:
    'https://images.reactbricks.com/placeholder/71fd29e5-d54d-4c99-a2da-681bd8d888d1.jpg',
  srcSet:
    'https://images.reactbricks.com/src_set/71fd29e5-d54d-4c99-a2da-681bd8d888d1-1080.webp 1080w,\nhttps://images.reactbricks.com/src_set/71fd29e5-d54d-4c99-a2da-681bd8d888d1-600.webp 600w,\nhttps://images.reactbricks.com/src_set/71fd29e5-d54d-4c99-a2da-681bd8d888d1-300.webp 300w',
  width: 1080,
  height: 606,
  alt: 'aerial photography of islands during daytime',
  seoName: 'seaside',
};

interface BigImageProps {
  backgroundColor?: string
  borderTop?: Border
  borderBottom?: Border
  paddingTop?: Padding
  paddingBottom?: Padding
  width?: Size
}

const BigImage: types.Brick<BigImageProps> = ({
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
        <Image propName="image3" alt="Image" imageStyle={{ width: '100%', height: 'auto' }}/>
      </Container>
    </Section>
  )
}

BigImage.schema = {
  name: 'big-image',
  label: 'Image',
  category: 'single column / blog',
  tags: ['blog', 'image', 'single image'],
  previewImageUrl: '/bricks-preview-images/big-image.png',
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'medium',
    paddingTop: '6',
    paddingBottom: '6',
    image3: photo,
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
  ],
}

export default BigImage
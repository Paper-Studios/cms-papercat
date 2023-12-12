import React from 'react';
import { RichText, types } from 'react-bricks/frontend';
import Container, { Padding, Size } from '../../components/Container';
import Section, { Border, sectionDefaults } from '../../components/Section';
import { containerWidthSideGroup, paddingBordersSideGroup } from '../../SideEditProps';

interface ParagraphProps {
  backgroundColor: string
  borderTop: Border
  borderBottom: Border
  paddingTop: Padding
  paddingBottom: Padding
  width: Size
}

const Paragraph: types.Brick<ParagraphProps> = ({
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
        <RichText
          propName="text"
          placeholder=""
          renderBlock={({ children }) => (
            <p style={{
              fontFamily: '"Source Sans 3", sans-serif',
              margin: '1.5rem 0',
              lineHeight: '1.75rem',
              fontSize: '1.125rem',
              color: backgroundColor === '#ffffff' ? '#000' : '#fff',
            }}>
              {children}
            </p>
          )}
          allowedFeatures={[
            types.RichTextFeatures.Heading2,
            types.RichTextFeatures.Heading3,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Link,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.UnorderedList,
            types.RichTextFeatures.OrderedList,
          ]}
          renderH2={({ children }) => {
            return (
              <h2 style={{
                fontFamily: '"Bubblegum Sans", cursive',
                fontSize: '2rem',
                lineHeight: '1.75rem',
                color: backgroundColor === '#ffffff' ? '#000' : '#fff',
              }}>
                {children}
              </h2>
            )
          }}
          renderH3={({ children }) => {
            return (
              <h3 style={{
                fontFamily: '"Courier Prime", monospace',
                fontSize: '1.75rem',
                lineHeight: '1.75rem',
                color: backgroundColor === '#ffffff' ? '#000' : '#fff',
              }}>
                {children}
              </h3>
            )
          }}
          renderHighlight={({ children }) => (
            <span style={{ color: '#F5647F' }}>{children}</span>
          )}
          renderUL={({ children }) => (
            <ul style={{
              listStyle: 'disc',
              listStylePosition: 'outside',
              marginLeft: '1.25rem',
              marginTop: '1rem',
              color: backgroundColor === '#ffffff' ? '#000' : '#fff',
              lineHeight: '1.75rem'
            }}>
              {children}
            </ul>
          )}
          renderOL={({ children }) => (
            <ol style={{
              listStyle: 'decimal',
              listStylePosition: 'outside',
              marginLeft: '1.25rem',
              marginTop: '1rem',
              color: backgroundColor === '#ffffff' ? '#000' : '#fff',
              lineHeight: '1.75rem'
            }}>
              {children}
            </ol>
          )}
        />
      </Container>
    </Section>
  );
}

Paragraph.schema = {
  name: 'paragraph',
  label: 'Paragraph',
  category: 'single column / blog',
  tags: ['blog', 'paragraph', 'text'],
  previewImageUrl: `/bricks-preview-images/paragraph.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    paddingTop: '0',
    paddingBottom: '0',
    text: [
      {
        type: 'h2',
        children: [
          {
            text: 'Lorem ipsum dolor sit title',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sagittis faucibus.',
          },
        ],
      },
    ],
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

export default Paragraph;
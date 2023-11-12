import React from 'react'
import Container, { Padding } from './Container'
export type Border = 'full' | 'boxed' | 'none'

interface SectionDefaults {
  backgroundColor: string
  paddingTop: Padding
  paddingBottom: Padding
  borderTop: Border
  borderBottom: Border
}

export const sectionDefaults: SectionDefaults = {
  backgroundColor: '#4E229C',
  paddingTop: '16',
  paddingBottom: '16',
  borderTop: 'none',
  borderBottom: 'none',
}

interface SectionProps {
  backgroundColor?: string
  borderTop?: Border
  borderBottom?: Border
  className?: string
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  backgroundColor,
  borderTop = 'none',
  borderBottom = 'none',
  className = '',
  children,
}) => {
  return (
    <section className={className} style={{ backgroundColor, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {borderTop !== 'none' && (
        <Container
          size={borderTop === 'boxed' ? 'medium' : 'full'}
          paddingBottom="0"
          paddingTop="0"
        >
        <hr style={{ border: '1px solid red' }} />
        </Container>
      )}
      {children}
      {borderBottom !== 'none' && (
        <Container
          size={borderBottom === 'boxed' ? 'medium' : 'full'}
          paddingBottom="0"
          paddingTop="0"
        >
        <hr style={{ border: '1px solid red', width: '100%' }} />
        </Container>
      )}
    </section>
  )
}

export default Section
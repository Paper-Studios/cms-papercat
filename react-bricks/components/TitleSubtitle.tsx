import classNames from 'classnames'
import React from 'react'
import { Text } from 'react-bricks/frontend'

interface TitleSubtitleProps {
  bigCentered?: boolean
  backgroundIsWhite?: boolean
  className?: string
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  bigCentered = false,
  backgroundIsWhite = false,
  className = '',
}) => {
  return (
    <div className={className}>
      <Text
        propName="title"
        placeholder=""
        renderBlock={({ children }) => (
          <h2
            style={{
              color: backgroundIsWhite ? '#000' : '#fff',
              fontSize: bigCentered ? '2.25rem' : '1.5rem',
              textAlign: bigCentered ? 'center' : 'left',
              lineHeight: '28px',
            }}
          >
            {children}
          </h2>
        )}
      />
      <Text
        propName="subtitle"
        placeholder="Subtitle..."
        renderBlock={({ children }) => (
          <p
            style={{
              color: backgroundIsWhite ? '#000' : '#fff',
              fontFamily: '"Source Sans 3", sans-serif',
              marginTop: '0.5rem',
              textAlign: bigCentered ? 'center' : 'left',
              lineHeight: '28px',
            }}
          >
            {children}
          </p>
        )}
      />
    </div>
  )
}

export default TitleSubtitle
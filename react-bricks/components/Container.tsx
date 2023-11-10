import * as React from 'react'

export type Size = 'medium' | 'small' | 'full'
export type Padding = '0' | '6' | '8' | '10' | '12' | '16' | '20'

const getPadding = (padding: Padding): string => {
  switch (padding) {
    case '20':
      return '400px'
    case '16':
      return '320px'
    case '12':
      return '240px'
    case '10':
      return '200px'
    case '8':
      return '160px'
    case '6':
      return '120px'
    case '0':
      return '0'
    default:
      return '0'
  }
}


const getMargin = (size: Size) => {
  switch (size) {
    case 'medium': {
      return '0 8%'
    }
    case 'small': {
      return '0 19%'
    }
    case 'full': {
      return '0'
    }
  }
}

export interface ContainerProps {
  size?: Size
  paddingTop?: Padding
  paddingBottom?: Padding
  className?: string
  children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
  size = 'medium',
  paddingTop = '16',
  paddingBottom = '16',
  className,
  children,
}) => {
  return (
    <div
      className={className}
      style={{
        paddingTop: getPadding(paddingTop),
        paddingBottom: getPadding(paddingBottom),
        margin: getMargin(size),
      }}
    >
      {children}
    </div>
  )
}

export default Container
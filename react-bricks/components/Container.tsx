import * as React from 'react'

export type Size = 'medium' | 'small' | 'full'
export type Padding = '0' | '6' | '8' | '10' | '12' | '16' | '20'

const getPadding = (padding: Padding): string => {
  switch (padding) {
    case '20':
      return '128px'
    case '16':
      return '102px'
    case '12':
      return '82px'
    case '10':
      return '65px'
    case '8':
      return '52px'
    case '6':
      return '42px'
    case '0':
      return '0'
    default:
      return '0'
  }
}


const getMargin = (size: Size) => {
  switch (size) {
    case 'medium': {
      // return '0 8%'
      return '84%'
    }
    case 'small': {
      // return '0 19%'
      return '62%'
    }
    case 'full': {
      return '100%'
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
  size = 'small',
  paddingTop = '8',
  paddingBottom = '8',
  className,
  children,
}) => {
  return (
    <div
      className={className}
      style={{
        paddingTop: getPadding(paddingTop),
        paddingBottom: getPadding(paddingBottom),
        width: getMargin(size),
      }}
    >
      {children}
    </div>
  )
}

export default Container
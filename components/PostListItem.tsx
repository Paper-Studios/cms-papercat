import React from 'react'
import Link from 'next/link'
import ButtonX from '../react-bricks/bricks/layout/ButtonX'
import dayjs from 'dayjs'
import styles from '../css/Blog.module.css'

interface PostListItemProps {
  title: string
  href: string
  content: string
  date: string
  featuredImg?: string
}

const PostListItem: React.FC<PostListItemProps> = ({
  title,
  href,
  content,
  date,
  featuredImg,
}) => {
  return (
    <Link
      href={`/blog/post/${href}`}
      className={styles.blogEntry}
    >
      <img src={featuredImg} className={styles.blogImg} />

      <div className={styles.contentContainer}>
        <h2>{title}</h2>
        <p>
          {content.length + title.length > 250 ?
            `${content.slice(0, (content.indexOf(' ', 225) - title.length))}...`
            :
            content
          }
        </p>
      </div>

      <div className={styles.moreInfoContainer}>
        <span>{dayjs(date).format('MMM DD YYYY')}</span>
        <ButtonX type="button" buttonType="button" size="small" form={false} text="Read more"/>
      </div>
    </Link>
  )
}

export default PostListItem
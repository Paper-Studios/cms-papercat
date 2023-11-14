import { GetStaticProps } from 'next'
import Head from 'next/head'
import {
  PageViewer,
  cleanPage,
  fetchPage,
  fetchPages,
  types,
  useReactBricksContext,
} from 'react-bricks/frontend'

import PostListItem from '../../components/PostListItem'
import ErrorNoFooter from '../../components/errorNoFooter'
import ErrorNoKeys from '../../components/errorNoKeys'
import config from '../../react-bricks/config'
import styles from '../../css/Blog.module.css'

interface HomeProps {
  errorNoKeys: string
  errorFooter: string
  posts: types.Page[]
  header: types.Page
  footer: types.Page
}

const BlogList: React.FC<HomeProps> = ({
  posts,
  errorNoKeys,
  errorFooter,
  header,
  footer,
}) => {
  const { pageTypes, bricks } = useReactBricksContext()
  const footerOk = footer ? cleanPage(footer, pageTypes, bricks) : null

  return (
    <>
      {!errorNoKeys && (
        <div style={{width: '100%'}}>
          <Head>
            <title>Posts</title>
            <meta name="description" content="Paper Cat Blog" />
          </Head>
          <div className={styles.blogContent} style={{ width: '100%' }}>
            <h2 className={styles.blogHeader}>Our latest articles</h2>
            <div className={styles.blogEntryRow}>
              {posts?.map((post) => {
                return (
                  <PostListItem
                    key={post.id}
                    title={post.meta.title}
                    href={post.slug}
                    content={post.meta.description}
                    date={post.publishedAt}
                    featuredImg={post.meta.featuredImage || ''}
                  />
                )
              })}
            </div>
          </div>
          {footerOk && !errorFooter ? (
            <PageViewer page={footerOk} showClickToEdit={false}/>
          ) : (
            <ErrorNoFooter />
          )}
        </div>
      )}
      {errorNoKeys && <ErrorNoKeys />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let header: {} | types.Page
  let footer: {} | types.Page
  let errorNoKeys: boolean = false
  let errorHeader: boolean = false
  let errorFooter: boolean = false

  if (!config.apiKey) {
    errorNoKeys = true
    return { props: { errorNoKeys } }
  }
  try {
    const posts = await fetchPages(process.env.API_KEY, {
      type: 'blog',
      pageSize: 1000,
      sort: '-publishedAt',
    })

    header = await fetchPage('header', config.apiKey, context.locale).catch(() => {
        return {}
      }
    )

    footer = await fetchPage('footer', config.apiKey, context.locale).catch(() => {
        errorFooter = true
        return {}
      }
    )

    return { props: { posts, header, footer, errorFooter } }
  } catch {
    return { props: { header, footer, errorFooter } }
  }
}

export default BlogList
import React from 'react'
import fetch from '~/service/fetch'
import './index.less'

interface Props {
  data: NewsItem[]
}
interface NewsItem {
  _id: string,
  href: string
}

const Page: SFC<Props> = (props: Props): JSX.Element => {
  return (
    <div className='normal'>
      <div className='welcome' />
      <ul className='list'>
        {
          props.data && props.data.map((item: NewsItem, index: number) => (
            <li key={index}>
              <div>list文章标题: {item.href}</div>
              <div className='toDetail'><a href={`/news/${item._id}`}>点击查看详情</a></div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

Page.getInitialProps = async (ctx) => {
  // ssr渲染模式只在服务端通过Node获取数据，csr渲染模式只在客户端通过http请求获取数据，getInitialProps方法在整个页面生命周期只会执行一次
  let props: any = { data: [] }
  if (__isBrowser__) {
    const data = await fetch({ url: '/api/getIndexData' })
    props = {
      data: data.data
    }
  } else {
    props = ctx.apiService()
  }
  return props
}

export default Page

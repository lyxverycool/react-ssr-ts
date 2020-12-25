import React from 'react'
import './index.less'

interface Props {
  news: NewsItem[]
}
interface NewsItem {
  id: string,
  title: string
}

const List: SFC<Props> = (props: Props): JSX.Element => {
  return (
    <div className='normal'>
      <div className='welcome' />
      <ul className='list'>
        {
          props.news && props.news.map((item: NewsItem) => (
            <li key={item.id}>
              <div>list标题: {item.title}</div>
              <div className='toDetail'><a href={`/news/${item.id}`}>点击查看详情</a></div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

List.getInitialProps = async (ctx) => {
  // ssr渲染模式只在服务端通过Node获取数据，csr渲染模式只在客户端通过http请求获取数据，getInitialProps方法在整个页面生命周期只会执行一次
  return __isBrowser__ ? (await window.fetch('/api/getIndexData')).json() : ctx.apiService()
}
export default List
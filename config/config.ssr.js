const resolvePath = (path) => require('path').resolve(__dirname, path)
const loadable = require('react-loadable')

module.exports = {
  type: 'csr', // 指定运行类型可设置为csr切换为客户端渲染
  routes: [
    {
      path: '/',
      exact: true,
      Component: () => (require('@/page/index').default), // 这里使用一个function包裹为了让它延迟require
      controller: 'page',
      handler: 'index'
    },
    {
      path: '/list',
      exact: true,
      Component: () => (__isBrowser__ ? loadable({
        loader: () => import(/* webpackChunkName: "list" */ '@/page/list'),
        loading: function Loading() {
          return React.createElement('div')
        }
      }) : require('@/page/list').default // 通过这种方式来让服务端bundle不要分块打包
      ),
      controller: 'list',
      handler: 'index'
    },
    {
      path: '/news/:id',
      exact: true,
      Component: () => (__isBrowser__ ? loadable({
        loader: () => import(/* webpackChunkName: "news" */ '@/page/news'),
        loading: function Loading() {
          return React.createElement('div')
        }
      }) : require('@/page/news').default // 通过这种方式来让服务端bundle不要分块打包
      ),
      controller: 'page',
      handler: 'index'
    }
  ],
  baseDir: resolvePath('../'),
  injectCss: [
    `/static/css/Page.chunk.css`
  ], // 客户端需要加载的静态样式表
  injectScript: [
    `<script src='/static/js/runtime~Page.js'></script>`,
    `<script src='/static/js/vendor.chunk.js'></script>`,
    `<script src='/static/js/Page.chunk.js'></script>`
  ], // 客户端需要加载的静态资源文件表
  serverJs: resolvePath(`../output/Page.server.js`),
  layout: resolvePath(`../output/Layout.server.js`),
  useCDN: false
}

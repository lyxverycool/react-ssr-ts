export default () => {
  return async (ctx: any, next: () => any) => {
    ctx.set('Access-Control-Max-Age', '31536000')
    ctx.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    )
    ctx.set('Access-Control-Allow-Credentials', true)
    ctx.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,HEAD,OPTIONS')
    await next()
  };
};
const sendMiddleware = () => {
  // 处理请求成功方法
  const render = (ctx: any) => {
    return (data: any, msg = '请求成功') => {
      ctx.set('Content-Type', 'application/json');
      ctx.body = {
        status: '1',
        data,
        msg
      }
    }
  }

  // 处理请求失败方法
  const renderError = (ctx: any) => {
    return (msg = '请求失败') => {
      ctx.set('Content-Type', 'application/json');
      ctx.body = {
        status: '0',
        data: null,
        msg
      }
    }
  }

  return async (ctx: any, next: () => any) => {
    ctx.send = render(ctx);
    ctx.sendError = renderError(ctx);
    await next();
  }
}

export default sendMiddleware
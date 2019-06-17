function ajax(options) {
  // 选项
  let method = options.method || 'GET',
    params = options.params,
    data = options.data,
    url =
      options.url +
      (params
        ? '?' +
          Object.keys(params)
            .map(key => key + '=' + params[key])
            .join('&')
        : ''),
    async = options.async === false ? false : true,
    success = options.success,
    headers = options.headers;

  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject('Microsoft.XMLHTTP');
  }

  //设置请求头
  if (headers) {
    Object.keys(headers).forEach(e => {
      request.setRequestHeaders(e, headers[e]);
    });
  }

  request.open(method, url, async);

  request.send(method === 'GET' ? '' : data);

  request.onstatechange = function() {
    /**
    readyState:
      0: 请求未初始化
      1: 服务器连接已建立
      2: 请求已接收
      3: 请求处理中
      4: 请求已完成，且响应已就绪

    status: HTTP 状态码
    **/
    if (request.ReadyState === 4 && request.status === 200) {
      success && success(request.responseText);
    }
  };
}
// ajax请求 先要new XMLHttpRequest
//request.open(method,url,async)
//request.send()
//request.onstatechange  readystate ===4 requset.status ===200 获取到request.responseText

/* @flow */
type Fetch = (url: string, options: ?any) => Promise<any>;

type Options = {
  baseUrl: string,
  cookie?: string
};

function createFetch(fetch: Fetch, { baseUrl, cookie }: Options) {
  const defaults = {
    method: "POST",
    mode: baseUrl ? "cors" : "same-origin",
    // credentials: baseUrl ? "include" : "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(cookie ? { Cookie: cookie } : null)
    }
  };
  return (url: string, options: any) =>
    fetch(`${baseUrl}${url}`, {
      ...defaults,
      ...options,
      headers: {
        ...defaults.headers,
        ...(options && options.headers)
      }
    })
      .then(resp => {
        if (resp.status >= 200 && resp.status < 300) {
          //判断响应的状态码是否正常
          return resp; //正常返回原响应对象
        } else {
          var error = new Error(resp.statusText); //不正常则抛出一个响应错误状态信息
          error.response = resp;
          throw error;
        }
      })
      .then(resp => {
        return resp.json();
      })
      .catch(error => {
        return error;
      });

  // url.startsWith("/graphql") || url.startsWith("/api")
  //   ? fetch(`${baseUrl}${url}`, {
  //       ...defaults,
  //       ...options,
  //       headers: {
  //         ...defaults.headers,
  //         ...(options && options.headers)
  //       }
  //     })
  //   : fetch(url, options);
}

export default createFetch;

export function buildSDKApiUrl<T = string>(
  baseUrl: string,
  sdkPath: T,
  queryParams?: Record<string, any>,
) {
  const apiPath: string = sdkPath.toString().startsWith('/')
    ? sdkPath.toString().slice(1)
    : sdkPath.toString();

  let url = baseUrl.endsWith('/')
    ? `${baseUrl}${apiPath}`
    : `${baseUrl}/${apiPath}`;

  if (queryParams && Object.keys(queryParams).length) {
    const params = [];
    Object.keys(queryParams).forEach((k: string) => {
      params.push(
        `${k}=${queryParams[k]?.toString ? queryParams[k].toString() : queryParams[k]}`,
      );
    });
    const hasQuery = url.indexOf('?') > 0;

    url = hasQuery
      ? `${url}&${params.join('&')}`
      : `${url}?${params.join('&')}`;
  }
  return url;
}

/**
 * pick
 * @param url
 * @param query
 * @returns
 */
export function getQueryParams<
  R extends
    | Record<string, string | number | Array<string | number>>
    | string
    | number,
>(url: string = '', query?: string): R | undefined {
  if (!url?.length || url.indexOf('?') < 0) return;
  const queryStr = url.slice(url.indexOf('?') + 1);
  const arr = queryStr.split('&');
  const queryParams: { [k: string]: any } = {};
  arr.forEach((item) => {
    const [name, value] = item.split('=');
    if (typeof name === 'string' && value !== undefined) {
      if (queryParams[name] !== undefined) {
        if (Array.isArray(queryParams[name])) {
          queryParams[name].push(value);
        } else {
          queryParams[name] = [queryParams[name], value];
        }
      }
    }
  });

  if (!Object.keys(queryParams).length) return;
  return query?.length ? (queryParams[query] as R) : (queryParams as R);
}

/**
 * url like : tsai.com/api?code=1&name=&has=true
 * replace query param or pending
 * not support url has href like: xxx?a=1&b=4#some
 * @param url
 * @param name
 * @param value
 * @returns url
 */
export function setQueryParam(
  url: string = '',
  name: string,
  value: string | number | boolean = '',
): string {
  if (!name?.length) return url;
  if (url?.indexOf('?') < 0) return `${url}?${name}=${value.toString()}`;

  const base = url.slice(0, url.indexOf('?'));
  let queryParams = getQueryParams<Record<string, string>>(url);
  if (!queryParams) {
    queryParams = {
      [name]: value.toString(),
    };
  } else {
    queryParams[name] = value.toString();
  }
  const searchStr = Object.keys(queryParams)
    .reduce((prev, curr) => {
      const paramStr = `${curr}=${queryParams[curr]}`;
      prev.push(paramStr);
      return prev;
    }, [] as string[])
    .join('&');

  return `${base}?${searchStr}`;
}

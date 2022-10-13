// axios API LIBRARY

export const HTTP_METHODS = {
  get: "GET",
  put: "PUT",
  post: "POST",
  patch: "PATCH",
  delete: "DELETE",
};

const defaultConfig = {
  method: HTTP_METHODS.get,
  body: null,
  mode: "cors",
  cache: "default",
  redirect: "follow",
  referrerPolicy: "no-referrer-when-downgrade",
  credentials: "same-origin",
};

export const heb = async (options) => {
  const { url, ...restConfig } = {
    ...defaultConfig,
    ...options,
    headers: {
      ...(defaultConfig.headers ?? {}),
      ...(options.headers ?? {}),
    },
  };

  const response = await fetch(url, restConfig);

  return response.ok ? await response.json() : await response.error();

  // return await response[response.ok ? "json" : "error"]();   => 줄여쓰기 방법
};

heb.get = async (url, options) => {
  return await heb({ url, ...options });
};

heb.post = async (url, body, options) => {
  return await heb({
    url,
    method: HTTP_METHODS.post,
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    ...options,
  });
};

heb.put = async (url, body, options) => {
  return await heb({
    url,
    method: HTTP_METHODS.put,
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    ...options,
  });
};

heb.patch = async (url, body, options) => {
  return await heb({
    url,
    method: HTTP_METHODS.patch,
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    ...options,
  });
};

heb.delete = async (url, options) => {
  return await heb({
    url,
    method: HTTP_METHODS.delete,
    ...options,
  });
};

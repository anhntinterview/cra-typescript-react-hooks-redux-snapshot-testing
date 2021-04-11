export const getApi = (url: string, params?: string) => {
  return fetch(url)
};

export const postApi = (url: string, bodyData: string) => {
  return fetch(url, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  })
};

export const putApi = (url: string, params: string) => {
  return fetch(url, {
    method: "PUT",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
};

export const deleteApi = (url: string) => {
  return fetch(url, {
    method: "DELETE",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  })
};

export const getNewsData = (url) => {
  return fetch(`${url}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(`There was an error`);
};

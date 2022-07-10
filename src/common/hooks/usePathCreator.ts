type Props = {
  [key: string]: any;
};

export const usePathCreator = (endpoint: string, params?: Props) => {
  if (!params) {
    return endpoint;
  }

  let path = "";
  const keys = Object.keys(params);

  keys.forEach(
    (key, i) =>
      (path += `${key}=${params[key]}${keys.length - 1 !== i ? "&" : ""}`)
  );

  return `${endpoint}?${path}`;
};

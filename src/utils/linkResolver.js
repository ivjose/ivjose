// eslint-disable-next-line import/prefer-default-export
export const linkResolver = doc => {
  if (doc.type === 'blog') {
    return `/blog/${doc.uid}`;
  }

  return '/';
};

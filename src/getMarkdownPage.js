/**
 * Get page from markdownRemark
 * @param {*} options default options + user options
 * @param {*} postPage path.resolve(options.markdownRemark.postPage)
 * @param {*} edge allMarkdownRemark.edges
 * @return {*} page
 */
const getMarkdownPage = (options, postPage) => edge => {
  const slug = edge.node.fields.slug;
  const path = edge.node.fields.customPath || slug;
  const langKey = edge.node.fields.langKey;

  return {
    path, // required
    component: postPage,
    context: {
      path, // For backward compatibility only...
      slug,
      langKey
    },
    layout: options.useLangKeyLayout ? langKey : null
  };
};

export default getMarkdownPage;

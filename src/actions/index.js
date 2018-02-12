
export const addArticle = ({ publisher, title, description, link }) => {
  return {
    type: 'ADD_ARTICLE',
    publisher,
    title,
    description,
    link
  }
};
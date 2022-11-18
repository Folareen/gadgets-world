const formatImageUrl = (rawUrl) => {
  return `${process.env.BASE_URL}${rawUrl}`;
};
export default formatImageUrl;

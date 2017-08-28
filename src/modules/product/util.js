/**
 * Get base url
 * @param ctx
 */
export const getBaseUrl = ({request}) => `${request.origin}`;

/**
 * Generate link for self
 * @param ctx
 */
export const getSingleUrl = (ctx) => (dataset, prod) => `${getBaseUrl(ctx)}${ctx.route.path}/${prod.productId}`;

/**
 * Get current url
 * @param ctx
 */
export const getCurrentUrl = ({request}) => `${getBaseUrl({request})}${request.originalUrl}`;

/**
 * Generate paginated url
 * @param ctx
 * @param page
 */
export const generatePaginatedUrl = (ctx, page) => `${getBaseUrl(ctx)}${ctx.route.path}${stringifyQuery(Object.assign(ctx.query, {page}))}`;

/**
 * Get JSON-API toplevel links
 * @param ctx
 * @param page
 * @param pages
 * @returns {{self, prev: *, next: *, last: *, base: string}}
 */
export const getToplevelLinks = (ctx, {page, pages}) => {
  const prevPage = parseInt(page) !== 1 ? parseInt(page) - 1 : undefined;
  const nextPage = parseInt(page) !== pages ? parseInt(page) + 1 : undefined;
  const lastPage = nextPage ? parseInt(pages) : undefined;

  return {
    self: getCurrentUrl(ctx),
    prev: prevPage && generatePaginatedUrl(ctx, prevPage),
    next: nextPage && generatePaginatedUrl(ctx, nextPage),
    last: lastPage && generatePaginatedUrl(ctx, lastPage),
  }
};

/**
 * Return image-urls
 * @param productId
 * @returns {{thumbnail: string, full: string}}
 */
export const getImages = (productId) => {
  return {
    thumbnail: `http://cdn.alko.fi/ProductImages/Scaled/${productId}/thumbnail.jpg`,
    full: `http://cdn.alko.fi/ProductImages/Scaled/${productId}/zoom.jpg`,
  }
};

/**
 * Stringify query-obj
 * @param query
 * @returns {string}
 */
export const stringifyQuery = (query) => {
  const pairs = Object.keys(query).map((key) => [key, query[key]].join('='));

  return pairs.length ? `?${pairs.join('&')}` : '';
};

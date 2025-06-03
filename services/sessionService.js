const activeAccessTokens = new Set();
const activeRefreshTokens = new Set();

const addAccessToken = (token) => activeAccessTokens.add(token);
const removeAccessToken = (token) => activeAccessTokens.delete(token);
const isAccessTokenActive = (token) => activeAccessTokens.has(token);

const addRefreshToken = (token) => activeRefreshTokens.add(token);
const removeRefreshToken = (token) => activeRefreshTokens.delete(token);
const isRefreshTokenActive = (token) => activeRefreshTokens.has(token);

module.exports = {
  addAccessToken,
  removeAccessToken,
  isAccessTokenActive,
  addRefreshToken,
  removeRefreshToken,
  isRefreshTokenActive,
};

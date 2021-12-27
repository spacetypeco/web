/**
 * @file Routes to various pages in the website are defined here rather than being
 * hard-coded into different files.
 *
 * If a route is dynamic, it's defined as a function instead of as a string.
 */

const NFT_BASE_IMG_URL =
  "https://ipfs.io/ipfs/QmdNadv9CdVeZwtDfK6LDUJk9PcZgYyhsnve6ekLscVViw/";

const routes = {
  nftItem: (id: string) => `/nft/${id}`,
  nftImageUrl: (id: string) =>
    [NFT_BASE_IMG_URL, parseInt(id), ".png"].join(""),
};

export default routes;

const NFT_BASE_IMG_URL =
  "https://ipfs.io/ipfs/QmdNadv9CdVeZwtDfK6LDUJk9PcZgYyhsnve6ekLscVViw/";

const routes = {
  nftItem: (id: string) => `/nft/${id}`,
  nftImageUrl: (id: string) =>
    [NFT_BASE_IMG_URL, parseInt(id), ".png"].join(""),
};

export default routes;

/**
 * @file This is a dynamic page based on the id provided in the URL.
 */

import routes from "../../routes";
import { useRouter } from "next/router";

/**
 * Shows the NFT image along with related information.
 */
function NftItem() {
  const router = useRouter();
  const id = router.query.id as string;
  return <img src={routes.nftImageUrl(id)} />;
}

export default NftItem;

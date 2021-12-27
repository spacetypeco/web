import routes from "../../routes";
import { useRouter } from "next/router";

function NftItem() {
  const router = useRouter();
  const id = router.query.id as string;
  return <img src={routes.nftImageUrl(id)} />;
}

export default NftItem;

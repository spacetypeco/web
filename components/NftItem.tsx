import routes from "../routes";
import styles from "./_NftItem.module.css";

interface NftItemProps {
  itemId: string;
}

/**
 * Represents an individual NFT item within a collection page.
 */
function NftItem(props: NftItemProps) {
  return (
    <a href={routes.nftItem(props.itemId)}>
      <div className={styles.item}>
        <div className="itemInfo">
          <div className={styles.itemTitle}>{props.itemId}</div>
        </div>
        <img
          className={styles.itemImage}
          src={routes.nftImageUrl(props.itemId)}
        />
      </div>
    </a>
  );
}

export default NftItem;

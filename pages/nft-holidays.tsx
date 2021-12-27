import BackNav from "../components/BackNav";
import Head from "next/head";
import NftItem from "../components/NftItem";

const NUM_NFTS = 30;

/**
 * Displays the holiday 2021/22 NFTs.
 */
function NftHolidays() {
  const itemRows = [];
  for (let i = 0; i < NUM_NFTS; i++) {
    const idStr = i.toString().padStart(2, "0");
    itemRows.push(<NftItem itemId={idStr}></NftItem>);
  }

  return (
    <div>
      <div id="container" className="full-w full-h position-rel">
        <BackNav />
        <div className="content">
          <div className="items-grid">{itemRows}</div>
        </div>
      </div>
    </div>
  );
}

export default NftHolidays;

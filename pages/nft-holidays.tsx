import BackNav from "../components/BackNav";
import Head from "next/head";
import NftItem from "../components/NftItem";

function NftHolidays() {
  const itemRows = [];
  for (let i = 0; i < 30; i++) {
    const idStr = i.toString().padStart(2, "0");
    itemRows.push(<NftItem itemId={idStr}></NftItem>);
  }

  return (
    <div>
      <Head>
        <script src="js/fade.js"></script>
      </Head>

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

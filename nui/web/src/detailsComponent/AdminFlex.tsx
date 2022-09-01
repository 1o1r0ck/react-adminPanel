import React from "react";
import Blocks from "./Blocks";

const AdminFlex = () => {
  return (
    <div className="blockSide">
      <Blocks svg={"none"} text={"Whitelist"} />
      <Blocks svg={"none"} text={"Ban"} />
      <Blocks svg={"none"} text={"Kick"} />
      <Blocks svg={"none"} text={"Tiket"} />
      <Blocks svg={"none"} text={"Unwhitelist"} />
      <Blocks svg={"none"} text={"Unban"} />
    </div>
  );
};

export default AdminFlex;

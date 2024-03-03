import React from "react";
import GameItem from "./GameItem";

export default function Game() {
  return (
    <div
      class="grid grid-cols-1 gap-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:max-w-7xl xl:mx-auto"
      style={{ opacity: 1 }}
    >
      <GameItem
        image={"https://images.zap.gg/file/zap-assets/bloxfruits.webp"}
        title={"Blox Fruits"}
        description={
          "Pirate adventure with special abilities from mysterious fruits."
        }
        isNew={false}
      />
      <GameItem
        image={"https://images.zap.gg/file/zap-assets/ps99.webp"}
        title={"Pet Simulator 99"}
        description={"Earn coins, open eggs, and collect pets!"}
        isNew={true}
      />
      <GameItem
        image={"https://images.zap.gg/file/zap-assets/ttd.webp"}
        title={"Toilet Tower Defense"}
        description={"Fight off toilet heads or something."}
        isNew={true}
      />
      <GameItem
        image={"https://images.zap.gg/file/zap-assets/adoptme.webp"}
        title={"Adopt Me"}
        description={
          "Pirate adventure with special abilities from mysterious fruits."
        }
        isNew={false}
      />
      <GameItem
        image={"https://images.zap.gg/file/zap-assets/mm2.webp"}
        title={"Murder Mystery 2"}
        description={
          "Social deduction game with murderers, sheriffs, and innocents."
        }
        isNew={false}
      />
      <GameItem
        image={"https://images.zap.gg/file/zap-assets/royalehigh.webp"}
        title={"Royale High"}
        description={
          "Roleplay game with virtual pet adoption and home customization."
        }
        isNew={false}
      />
      <GameItem
        image={"https://images.zap.gg/file/zap-assets/dahood.webp"}
        title={"Da Hood"}
        description={
          "PRoblox's urban showdown: choose between cop life or criminal heists."
        }
        isNew={false}
      />
      <GameItem
        image={"https://images.zap.gg/file/zap-assets/psx.webp"}
        title={"Pet Simulator X"}
        description={"Collect pets to earn money and unlock new worlds."}
        isNew={false}
      />
    </div>
  );
}

"use client";

import { NFTMintFlow } from "~/components/nft-mint-flow";

export default function App() {
  return (
    <div className="w-[400px] mx-auto py-8 px-4 min-h-screen flex flex-col items-center justify-center">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <div className="space-y-6 flex flex-col items-center">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Mint NFT
          </h1>
          <p className="text-sm text-muted-foreground">
            Connect your wallet and mint in just two clicks
          </p>
        </div>
        
        <NFTMintFlow
          contractAddress="0xf94e98916c78C3CfFb22dF6E68654a1ddAe320dC"
          tokenId="1"
          network="celo"
          buttonText="Mint NFT"
        />
      </div>
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}

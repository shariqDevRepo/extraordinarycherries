import { http, createConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [goerli],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "ZenVentures" }),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [goerli.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

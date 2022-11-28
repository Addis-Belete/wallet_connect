import WalletConnectProvider from "@walletconnect/web3-provider";
import { useState } from "react"
import { ethers } from "ethers"

export default function home() {
	const [web3Provider, setWeb3Provider] = useState(undefined);
	const connect = async () => {

		const provider = new WalletConnectProvider({

			rpc: {
				250: "https://rpc.ftm.tools/s",
				80001: "https://rpc-mumbai.maticvigil.com"
			},
			infuraId: "b8eb81a4d5a641959e281924bf72905e",
			qrcodeModalOptions: {
				desktopLinks: [
					'ledger',
					'tokenary',
					'wallet',
					'wallet 3',
					'secuX',
					'ambire',
					'wallet3',
					'apolloX',
					'zerion',
					'sequence',
					'punkWallet',
					'kryptoGO',
					'nft',
					'riceWallet',
					'vision',
					'keyring'
				],
				mobileLinks: [
					"rainbow",
					"metamask",
					"argent",
					"trust",
					"imtoken",
					"pillar",
				]
			}
		});
		await provider.enable()
		const prov = new ethers.providers.Web3Provider(provider);

		setWeb3Provider(prov);
	}

	console.log(web3Provider);
	return (<button onClick={() => connect()}>Connect Wallet</button>)

}
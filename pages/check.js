import SignClient from "@walletconnect/sign-client";
import { Web3Modal } from "@web3modal/standalone";

export default function () {

	const connect = async () => {

		const web3Modal = new Web3Modal({
			projectId: "7fd42875a6445e555539546b550b6fc9",
			standaloneChains: ["eip155:1"],
		});
		const signClient = await SignClient.init({ projectId: "7fd42875a6445e555539546b550b6fc9" });

		const { uri, approval } = await signClient.connect({
			requiredNamespaces: {
				eip155: {
					methods: ["eth_sign"],
					chains: ["eip155:1"],
					events: ["accountsChanged"],
				},
			},
		});

		if (uri) {
			web3Modal.openModal({ uri, standaloneChains: ["eip155:1"] });
			await approval();
			web3Modal.closeModal();
		}

	}
	return (
		<>
			<button onClick={() => connect()}>Wallet Connect</button>
		</>
	)


}
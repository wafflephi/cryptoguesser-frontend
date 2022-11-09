import { callApi } from "../../lib/dummyAPI";
import React from "react";

const sendState = async (coin, price, action) => {
	const apiBase = "http://localhost:8000";

	const requestContent = {
		coin: coin,
		price: price,
		action: action,
	};

	const requestOptions = {
		method: "POST",
		mode: "no-cors",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*", // this is for CORS
		},
		body: JSON.stringify(requestContent),
	};
	const apiUrl = apiBase + "/upload_result";

	const response = await fetch(apiUrl, requestOptions);
	const data = await response.json();
	console.log(data);
};

const VoteForm = (props) => {
	return (
		<div className="block bg-slate-800 text-slate-50 rounded-lg font-bold text-xl sm:justify-center">
			<div className="flex items-center mt-4">
				<div className="flex-1 w-full text-center">
					<p>
						{props.coin.name}: {props.coin.price} USD
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 grid-flow-col gap-2 mt-2 mb-4">
				<div className="flex justify-center">
					<button
						type="button"
						onClick={() =>
							sendState(props.coin.name, props.coin.price, "buy")
						}
					>
						<p className={"text-lg rounded-md px-3 py-2 bg-green-800"}>
							Buy/Long
						</p>
					</button>
				</div>
				<div className="flex justify-center">
					<button
						type="button"
						onClick={() =>
							sendState(props.coin.name, props.coin.price, "sell")
						}
					>
						<p className={"text-lg rounded-md px-3 py-2 bg-red-800"}>
							Sell/Short
						</p>
					</button>
				</div>
			</div>
		</div>
	);
};

const Vote = () => {
	var prices = callApi(); // dummy call

	var Forms = prices.map((coin) => <VoteForm key={coin.name} coin={coin} />);

	return <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-4 sm:grid-rows-1 grid-flow-col gap-5">{Forms}</div>;
};

export default Vote;

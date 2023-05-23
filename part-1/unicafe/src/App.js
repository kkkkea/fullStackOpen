import { useState } from "react";

const StatisticsLine = ({ text, num }) => (
	<>
		<tr>
			<td>{text}</td>
			<td>{text === "positive" ? num.toString(10) + "%" : num}</td>
		</tr>
	</>
);

const Statistics = (props) => {
	if (props.good + props.neutral + props.bad === 0) {
		return (
			<>
				<p>No feedback given</p>
			</>
		);
	}

	return (
		<table>
			<tbody>
				<StatisticsLine text="good" num={props.good} />
				<StatisticsLine text="neutral" num={props.neutral} />
				<StatisticsLine text="bad" num={props.bad} />
				<StatisticsLine
					text="all"
					num={props.good + props.neutral + props.bad}
				/>
				<StatisticsLine
					text="average"
					num={
						Math.trunc(
							((props.good - props.bad) /
								(props.good + props.neutral + props.bad)) *
								10
						) / 10
					}
				/>
				<StatisticsLine
					text="positive"
					num={
						Math.trunc(
							(props.good /
								(props.good + props.neutral + props.bad)) *
								100 *
								10
						) / 10
					}
				/>
			</tbody>
		</table>
	);
};

const Button = ({ onClick, text }) => {
	return (
		<>
			<button onClick={onClick}>{text}</button>
		</>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<h1>give feedback</h1>
			<Button onClick={() => setGood(good + 1)} text="good" />
			<Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button onClick={() => setBad(bad + 1)} text="bad" />
			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
};

export default App;

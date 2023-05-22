const Header = (props) => {
	return (
		<>
			<h1>{props.courseName}</h1>
		</>
	);
};

const Part = (props) => {
	return (
		<>
			<p>
				{props.part} {props.exercise}
			</p>
		</>
	);
};

const Content = (props) => {
	return (
		<>
			<Part
				part={props.parts[0].name}
				exercise={props.parts[0].exercise}
			/>
			<Part
				part={props.parts[1].name}
				exercise={props.parts[1].exercise}
			/>
			<Part
				part={props.parts[2].name}
				exercise={props.parts[2].exercise}
			/>
		</>
	);
};

const Total = (props) => {
	return (
		<>
			<p>
				Number of exercise{" "}
				{props.exercise.reduce((acc, v) => acc + v, 0)}
			</p>
		</>
	);
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of react",
				exercise: 10,
			},
			{
				name: "Using props to pass data",
				exercise: 7,
			},
			{
				name: "State of a component",
				exercise: 14,
			},
		],
	};

	return (
		<>
			<Header courseName={course.name} />
			<Content parts={course.parts} />
			<Total exercise={course.parts.map((p) => p.exercise)} />
		</>
	);
};

export default App;

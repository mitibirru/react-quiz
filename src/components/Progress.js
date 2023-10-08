const Progress = ({ index, numQuestions, points, totalPoints }) => {
	return (
		<header className="progress">
            <progress max={numQuestions} value={index} />
			<p>
				Question <strong>{index+1}</strong> / {numQuestions}
			</p>
			<p>
				<string>{points}</string> / {totalPoints}
			</p>
		</header>
	);
};

export default Progress;

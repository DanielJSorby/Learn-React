interface Props {
	type: string;
	onClick: () => void;
}

const button = ({ type, onClick }: Props) => {
	return (
		<button type="button" className={"btn btn-" + type} onClick={onClick}>
			{type}
		</button>
	);
};

export default button;

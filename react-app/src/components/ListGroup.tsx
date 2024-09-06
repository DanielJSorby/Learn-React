import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
}

function ListGroup({ items, heading }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && "There are no items in the list"}

			<ul className="list-group">
				{items.map((item, index) => (
					<li
						key={item}
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						onClick={() => {
							setSelectedIndex(index);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;

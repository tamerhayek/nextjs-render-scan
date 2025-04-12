import ComponentC from './ComponentC';

export default function ComponentB({ value }: { value: string }) {
	return (
		<div className="component">
			<ComponentC value={value} />
		</div>
	);
}


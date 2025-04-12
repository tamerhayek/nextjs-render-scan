import ComponentB from './ComponentB';

export default function ComponentA({ value }: { value: string }) {
	return (
		<div className="component">
			<ComponentB value={value} />
		</div>
	);
}


import ComponentD from './ComponentD';

export default function ComponentC({ value }: { value: string }) {
	return (
		<div className="component">
			<ComponentD value={value} />
		</div>
	);
}


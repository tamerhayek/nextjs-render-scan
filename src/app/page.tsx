'use client';

import { useState } from 'react';
import ComponentA from './ComponentA';
import './globals.css';
import Link from 'next/link';

export default function Home() {
	const [value, setValue] = useState('nextjs');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div className="container">
			<h1>Nextjs render scan</h1>

			<p>Working only in dev mode. Clone this repository and run "npm run dev"</p>

			<Link
				href="https://github.com/tamerhayek/nextjs-render-scan"
				target="_blank"
				rel="noreferrer"
			>
				Github repository
			</Link>

			<div className="form">
				<label htmlFor="value">Modifica il testo:</label>
				<input
					id="value"
					type="text"
					value={value}
					onChange={handleChange}
				/>
			</div>

			<div className="component">
				<ComponentA value={value} />
			</div>
		</div>
	);
}


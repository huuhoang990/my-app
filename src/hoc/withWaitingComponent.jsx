import React from 'react'

export default function WaitingComponent(Component) {
	return props => (
	<React.Suspense fallback={<div>Loading...</div>}>
		<Component {...props} />
	</React.Suspense>
	);
}
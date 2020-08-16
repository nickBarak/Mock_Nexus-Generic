import Layout from '../../layouts';
import About from '../../components/About';

function LegalNotices() {
	return (
		<Layout>
			<About heading="Legal Notices">
				<div>
					Copyright 2000-2015. All rights reserved. All content,
					including articles, photographs, graphics and design, is
					owned by the{' '}
					<span style={{ fontStyle: 'italic' }}>Daily Nexus</span> at
					the University of California, Santa Barbara. No part of
					these documents may be reproduced, in part or in full, in
					print format or digital format, without express written
					permission from the{' '}
					<span style={{ fontStyle: 'italic' }}>Daily Nexus</span>.
				</div>
			</About>
		</Layout>
	);
}

export default LegalNotices;

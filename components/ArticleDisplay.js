import ArticlePreview from './ArticlePreview';
import { uuid } from 'uuidv4';

function ArticleDisplay({ type, heading, articles, searchData, searchData: { loadingSearchResults, queryTime, resultCount, searchError, setSortBy } }) {
	return (
		<>
			<div
				className={type}
				style={{ marginRight: '2rem', marginLeft: '1rem' }}>
				<div
					className="category-heading"
					style={{
						fontSize: '2.5rem',
						textTransform: 'uppercase',
						marginTop: '.75rem',
					}}>
					{heading}
				</div>

				{searchData &&
					<div className="search-results-header" style={{ marginTop: '.8rem' }}>
						<span style={{ fontFamily: 'Arial, sans-serif', fontSize: '.85rem' }}>
						{/* Show loading, query time or error */}
						{!searchError ?
							!loadingSearchResults
								? `${resultCount} result${resultCount === 1 ? '' : 's'} (${queryTime} second${queryTime === 1 ? '' : 's'})`
								: 'Loading articles...'
							: <span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.1rem' }}>{searchError}</span>}</span>
						<span>
							<span style={{ fontSize: '.85rem', marginRight: '.25rem' }}>Sort by: </span>
							<select className="search-results-select" onChange={e => {
								setSortBy(e.target.selectedIndex);
							}} style={{ fontFamily: 'Arial, sans-serif' }}>
								<option key="0">Relevance</option>
								<option key="1">Date</option>
							</select>
						</span>
					</div>
				}

				<ul>
					{articles.map((article, i) => (
						/* Alternates which side of preview displays image */
						<li key={uuid()}>
							{' '}
							<ArticlePreview
								article={article}
								imageLeft={!(i % 2)}
							/>{' '}
						</li>
					))}
				</ul>
			</div>

			<style jsx>{`
				.category-heading {
					position: relative;
				}

				.category-heading::before,
				.category-heading::after {
					content: '';
					width: 100%;
					height: 2px;
					background-color: #ddd;
					position: absolute;
					left: 0;
				}

				.category-heading::before {
					top: -5px;
				}

				.category-heading::after {
					bottom: -5px;
				}
			`}</style>
		</>
	);
}

export default ArticleDisplay;

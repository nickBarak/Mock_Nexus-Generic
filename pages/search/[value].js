import { useRouter } from 'next/router';
import ArticleDisplay from '../../components/ArticleDisplay';
import Layout from '../../layouts';
import { convertFromPath } from '../../Functions';
import { useState, useEffect, useRef } from 'react';
import 'isomorphic-unfetch';
import { client } from '../../URLs';

function Search() {
    const router = useRouter();
    const [searchResults, setSearchResults] = useState([[], []]);
    const [sortBy, setSortBy] = useState(0);
    const [loadingSearchResults, setLoadingSearchResults] = useState(false);
    const [queryTime, setQueryTime] = useState(0);
    const [searchError, setSearchError] = useState(null);
    const [footerData, setFooterData] = useState({});
    const mounted = useRef(false);

    useEffect(_=> {
        if (!mounted.current) { mounted.current = true; return }
        if (sessionStorage.getItem('s__EA__Rc_H_' + router.query.value)) {
            let { ssSearchResults, ssQueryTime } = JSON.parse(sessionStorage.getItem('s__EA__Rc_H_' + router.query.value));
            setSearchResults(ssSearchResults);
            setQueryTime(ssQueryTime);
            setFooterData({
                page: 1,
                highestPage: ssSearchResults[0] ? Math.ceil(ssSearchResults[0].length/15) : 1,
                route: '/search/'+router.query.value
            });
        } else {
            let now = Date.now();
            setLoadingSearchResults(true);
            fetch(client + '/api/search?value=' + router.query.value)
                .then(res => res.json())
                .then(rows => {
                    /* First index for sorting by relevance, second index for sorting by date. Need separate values to avoid overwrite and only sort once */
                    const rowsByRelevanceAndDate = [
                        rows,
                        [...rows].sort(({publish_date: a}, {publish_date: b}) => new Date(b) - new Date(a))
                    ],
                        queryDuration = ((Date.now() - now) / 1000).toFixed(2);
                    setSearchResults(rowsByRelevanceAndDate);
                    setLoadingSearchResults(false);
                    setQueryTime(queryDuration);
                    setFooterData({
                        page: 1,
                        highestPage: rows ? Math.ceil(rows.length/15) : 1,
                        route: '/search/'+router.query.value
                    });
                    sessionStorage.setItem('s__EA__Rc_H_' + router.query.value, JSON.stringify({
                        ssQueryTime: queryDuration,
                        ssSearchResults: rowsByRelevanceAndDate
                    }));
                })
                .catch(e => console.log(e) || setSearchError('Error fetching results'));
        }
    }, [mounted.current]);

    return (
        <Layout footerData={footerData}>
			<ArticleDisplay
				type="author-page"
				heading={`"${router.query.value ? convertFromPath(router.query.value) : ''}"`}
                articles={searchResults[sortBy].slice(0, 15)}
                searchData={{
                    loadingSearchResults,
                    queryTime,
                    resultCount: searchResults[0].length,
                    searchError,
                    setSortBy
                }}
			/>
		</Layout>
    )
}

export default Search
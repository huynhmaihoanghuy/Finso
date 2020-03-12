export const SET_TOP_HEADLINES = 'SET_TOP_HEADLINES';
export const SET_TOP_HEADLINES_LOADING = 'SET_TOP_HEADLINES_LOADING';
export const SET_TOP_HEADLINES_KEYWORD = 'SET_TOP_HEADLINES_KEYWORD';

export const setTopHeadlines = ({ articles }) => ({
    type: SET_TOP_HEADLINES,
    payload: articles
});

export const setTopHeadlinesLoading = (isLoading = false) => ({
    type: SET_TOP_HEADLINES_LOADING,
    payload: isLoading
})

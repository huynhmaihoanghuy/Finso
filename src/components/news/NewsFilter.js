import React from 'react';
import { Dropdown } from "react-bootstrap";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { SET_TOP_HEADLINES_KEYWORD, SET_TOP_HEADLINES_LOADING, SET_TOP_HEADLINES } from '../../store/actions/topHeadLine';
import Axios from 'axios';
import { API_URL, API_KEY } from '../../enviroment';

export const NewsFilter = ({ options }) => {
    const state = useSelector(state => state.topHeadlines);
    const dispatch = useDispatch();

    const setKeyword = (keyword) => {
        const { value } = keyword;
        dispatch({
            type: SET_TOP_HEADLINES_KEYWORD,
            payload: keyword
        })

        dispatch({
            type: SET_TOP_HEADLINES_LOADING,
            payload: true
        })

        let url = `${API_URL}/top-headlines?country=us&apiKey=${API_KEY}`
        if (value)
            url = `${API_URL}/top-headlines?country=us&q=${value}&apiKey=${API_KEY}`;

        Axios.get(url).then(res => {
            const data = res.data;
            const { status, articles } = data;

            if (status === 'ok') {
                dispatch({
                    type: SET_TOP_HEADLINES,
                    payload: articles
                })

                dispatch({
                    type: SET_TOP_HEADLINES_LOADING
                })
            }
        })
    }

    return (
        <DropdownSection>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter: { state.keyword ? state.keyword.label : '- NONE -' }
            </Dropdown.Toggle>

            <Dropdown.Menu>
                
                {
                    options.map(key => <Dropdown.Item onClick={() => setKeyword(key)} key={key.value}>{ key.label }</Dropdown.Item>)
                }
                
            </Dropdown.Menu>
        </DropdownSection>
    )
}

const DropdownSection = styled(Dropdown) `
    margin-bottom: 20px;
    text-align: right;
`;

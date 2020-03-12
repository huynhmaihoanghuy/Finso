import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from 'react-bootstrap';
import * as moment from 'moment';

export const NewsDetailContext = React.createContext(null);

export const NewsDetail = () => {
    const data = useContext(NewsDetailContext);

    hiddenScrollBody(false);
    if (!data.article) return <></>;

    const { article } = data;
    hiddenScrollBody(true);

    return (
        <Wrapper>
            <Container>
                <Back onClick={() => data.onClose()}>&#8592; Back</Back>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleAuthorSection>
                    <div className="author-published">{article.author ? article.author : 'Anonymous'} &#8226; {formatDate(article.publishedAt)}</div>
                    <a href={article.url} target="_blank">Goto Original News</a>
                </ArticleAuthorSection>
                <Image src={article.urlToImage} />
                <strong dangerouslySetInnerHTML={{ __html: article.description }}></strong>
                <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                <Back onClick={() => data.onClose()}>&#8592; Back</Back>
            </Container>
        </Wrapper>
    )
}

function formatDate(date) {
    return moment(date).format('YYYY-MM-DD HH:MM');
}

function hiddenScrollBody(isHide) {
    document.getElementsByTagName('body')[0].style.overflow = isHide ? 'hidden' : 'visible';
}

const animation = keyframes`
    0% {
        left: 100vw;
    }

    100% {
        left: 0;
    }
`;

const Wrapper = styled.div`
    overflow: auto;
    position: fixed;
    top: 0;
    left: 100vw;
    width: 100vw;
    height: 100vh;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    animation: ${animation} 0.3s ease-in-out forwards;
`;

const Image = styled.img `
    max-width: 100%;
    margin: 0 auto 30px auto;
    display: block;
`;

const Back = styled.div `
    cursor: pointer;
    margin: 20px 0;
    color: #545454;
`; 

const ArticleTitle = styled.h1 `
    margin: 0 0 10px 0;
    color: #2f2f2f;
`;

const ArticleAuthorSection = styled.section `
    display: flex;
    justify-content: space-between;
    margin: 0 0 30px;

    .author-published {
        color: #8a8a8a;
    }

    a {
        color: #4160ff;
        text-decoration: none;
    }
`;

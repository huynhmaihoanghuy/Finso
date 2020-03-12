import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const NewsItem = ({ article, openNewsDetail }) => {
    const { urlToImage, title, description } = article;
    return (
        <>
            <CardSection>
                <Card.Img className="cursor-pointer zoom" variant="top" src={urlToImage} onClick={() => openNewsDetail(article)}/>
                <Card.Body>
                    <Card.Title className="cursor-pointer" onClick={() => openNewsDetail(article)}>{ title }</Card.Title>
                    <Card.Text dangerouslySetInnerHTML={{__html: description}}></Card.Text>
                    <a className="go-to-original-news" href={article.url} target="_blank">Go to Original News</a>
                </Card.Body>
            </CardSection>
        </>
    )
}

const CardSection = styled(Card) `
    box-shadow: 0 4px 2px -2px #BFBFB9;
    margin-bottom: 20px !important;
    overflow: hidden;

    .zoom {
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        .zoom {
            transform: scale(1.03);
        }
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .go-to-original-news {
        color: #4160ff;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-align: center;
        display: block;
    }
`;

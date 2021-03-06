import React, { Component } from 'react';
import { NewsItem } from '../../components/news/NewsItem';
import axios from 'axios';
import { API_URL, API_KEY } from '../../enviroment';
import { CardColumns, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTopHeadlines, setTopHeadlinesLoading, setTopHeadlinesKeyword } from '../../store/actions/topHeadLine';
import { NewsDetail } from '../../components/news/NewsDetail';
import { NewsDetailContext } from '../../components/news/NewsDetail';
import { NewsFilter } from '../../components/news/NewsFilter';

const KEYWORDS_FILTER = [
    {
        value: null,
        label: '- NONE -'
    },
    {
        value: 'bitcoin',
        label: 'Bitcoin'
    },
    {
        value: 'apple',
        label: 'Apple'
    },
    {
        value: 'earthquake',
        label: 'Earthquake'
    },
    {
        value: 'animal',
        label: 'Animal'
    }
]

class Home extends Component {
    constructor() {
        super();

        this.state = {
            article: null,
            options: KEYWORDS_FILTER
        }

        this.openNewsDetail = this.openNewsDetail.bind(this);
        this.closeNewsDetail = this.closeNewsDetail.bind(this);
    }

    componentDidMount() {
        const { keyword } = this.props.topHeadlines;
        let url = `${API_URL}/everything?q=null&apiKey=${API_KEY}`

        axios.get(url).then(res => {
            const data = res.data;
            const { status, articles } = data;

            if (status === 'ok') {
                this.props.setTopHeadlines({ articles });
                this.props.setTopHeadlinesLoading();
            }
        })
    }

    openNewsDetail(article) {
        this.setState({
            article
        })
    }

    closeNewsDetail() {
        this.setState({
            article: null
        })
    }

    componentWillUnmount() {
        this.props.setTopHeadlinesKeyword();
    }

    render() {
        const { list, isLoading } = this.props.topHeadlines;

        return (
            <section style={{ marginTop: '30px' }}>
                <NewsFilter options={this.state.options} url="everything" params={[]} />

                {
                    isLoading && <div>Loading...</div>
                }

                {
                    !isLoading && !list.length && <Alert variant="warning"> Empty </Alert>
                }

                <CardColumns>
                    {
                        !isLoading && list.map(article => (
                            <NewsItem article={article} key={article.title} openNewsDetail={this.openNewsDetail}></NewsItem>
                        ))
                    }
                </CardColumns>

                <NewsDetailContext.Provider value={{ article: this.state.article, onClose: this.closeNewsDetail }}>
                    <NewsDetail />
                </NewsDetailContext.Provider>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {
    setTopHeadlines,
    setTopHeadlinesLoading,
    setTopHeadlinesKeyword
})(Home)

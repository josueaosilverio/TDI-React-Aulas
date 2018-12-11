import React, {Component} from "react";
import {connect} from "react-redux";
import {FETCH_ARTICLES} from "../constants/action-types";
import {fetchArticles} from "../actions/articles";

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
    };
};

const mapStateToProps = state => {
    return {articles: state.articles};
}

class ConnectedDetail extends Component {

    constructor(match) {
        super(match);
    }

    componentDidMount() {
        if (this.props.articles.length === 0) {
            this.props.fetchArticles({type: FETCH_ARTICLES});
        }
    }


    render() {
        let article_id = [parseInt(this.props.match.params.id)];
        let article = this.props.articles.filter(article => article.id == article_id);
        console.log(article);

        if (article.length > 0) {
            return (
                <div className="justify-content-center row align-self-center" style={{padding: 30, width: 1250}}>
                    <div className="col-md-4"><p><img src={article[0].image} alt="" height="250px"/></p>
                    </div>
                    <div className="col-md-4">
                        <h2>{article[0].title} </h2>
                        <p><ion-icon name="person"></ion-icon> {article[0].author.name} </p>
                        <h6 className="text-muted">{article[0].description} </h6>
                    </div>
                </div>

            );
        } else {
            return (
                <div>
                    <p>Article not found</p>
                </div>
            );
        }
    }
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(ConnectedDetail);

export default Detail;

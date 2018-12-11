import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteArticle, fetchArticles} from "../actions/articles";
import {Link} from 'react-router-dom'


const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        fetchArticles: () => dispatch(fetchArticles()),
    };
};

const mapStateToProps = state => {
    console.log('state articles: ', state);
    return {articles: state.articles};
};

class ConnectedList extends Component {
    constructor() {
        super();
        this.clickAction = this.clickAction.bind(this);
    }

    clickAction(article) {
        this.props.deleteArticle(article);
    }

    componentDidMount() {
        if (this.props.articles.length < 1) {
            this.props.fetchArticles({type: 'FETCH_ARTICLES'});
        }
    }


    render() {
        const articles = this.props.articles;

        return (
            <div className="row align-self-center">
                {articles.map((el, index) => (
                    < div key={index} className="card form-group offset-sm-1" style={{width: 250}}>
                        <img className="card-img-top" src={el.image} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{el.title}</h5>
                            <h6 className="card-title text-muted">{el.description.substr(0,80)+"..."}</h6>
                            <p><Link className="btn btn-info" to={`/detail/${el.id}`}>Read More</Link></p>
                        </div>
                    </div>

                ))}
            </div>
        );
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
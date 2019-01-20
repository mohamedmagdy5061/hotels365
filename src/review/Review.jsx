import React, { Component } from "react";
import "./Review.css";

class Review extends Component {
  state = {
    counter: 0,
    min: 0,
    max: 0,
    data: [],
    pageView: [],
    numberNeedToShow: 3,
    numberOfPages: "",
    sorted: false
  };

  componentDidMount() {
    this.setState({ max: this.props.reviews.length });
    this.setState({ data: this.props.reviews});
    this.getNumberOfPages();
  }

  getNumberOfPages = () => {
    const num = Math.ceil(this.props.reviews.length / 3);
    this.setState({ numberOfPages: num });
  };

  range = (from, to, step = 1) => {
    let i = from;
    const range = [];
    while (i <= to) {
      range.push(i);
      i += step;
    }
    return range;
  };

  listView = num => {
    
    const { data,numberNeedToShow } = this.state;
    const itemTo= num * numberNeedToShow + numberNeedToShow
    const view = [...data].slice(numberNeedToShow * num,itemTo >= data.length ?  data.length :itemTo);
    this.setState({ pageView: view, sorted: false });

  };

  sortReviewDown = (e)=>{
    const {pageView} = this.state;
    (pageView > 0 ? pageView : this.props.reviews).sort((a, b) => {
        a = a.score;
        b = b.score;
        if(e === "up"){
          return a > b ? -1 : a < b ? 1 : 0;
        }else{
          return a < b ? -1 : a > b ? 1 : 0;
        }
    });
      this.props.reviews.map((review, index) => {
      review._index = index
      return review
    } )
    this.setState({pageView:pageView, sorted: true})
  }

  render() {
    const {numberOfPages, pageView,numberNeedToShow} = this.state;
    return (
      <div className="review">
        <h2 className="review-action-sort">
          Reviews
          <span className="review-action-sort-down" onClick={this.sortReviewDown.bind(null,"up")}>
            <i className="fas fa-angle-down" />
          </span>
          <span
            className="review-action-sort-up"
            onClick={this.sortReviewDown.bind(null,"down")}
          >
            <i className="fas fa-angle-up" />
          </span>
        </h2>
        <div className="review__data">
          {((pageView.length > 0 && !this.state.sorted) ? pageView : this.props.reviews).map(
            (item, index) =>
              (index < numberNeedToShow)  && (
                <div className="review__body" key={`item-index-${index}`}>
                  <div className="review__body_numbers">
                    <span>{item._index+1}</span>
                  </div>
                  <div className="review__body_rev">
                    <p>{item.review}</p>
                  </div>
                </div>
              )
          )}

          <div className="review__pagination">
            <nav>
              <ul className="pagination">
              {this.props.reviews.map((ele,index)=>(
                 (index < numberOfPages) && (
                  <li className="page-item" key={`pagination-index-${index}`}>
                  <button onClick={() => this.listView(index)}>
                    {index+1 }
                  </button>
                </li>
                 )
              ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;

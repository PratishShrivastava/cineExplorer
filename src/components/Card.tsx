import React, { Component } from "react";

interface CardProps {
  index: any;
  title: string;
  imageUrl: string;
  rating: any;
}

export default class Card extends Component<CardProps> {
  render() {
    const { title, imageUrl, rating, index } = this.props;

    return (
      <div className="main-card">
        <div>
          <div className="img-card">
            <img src={imageUrl} />
          </div>
          <div className="title-card">
            <p>{index}. {title}</p>
            <div className="rating-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#f5c518"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              {rating}
            </div>
          </div>
        </div>
        <div className="info-card">
          <div className="view-card">
            <button>View more</button>
          </div>
        </div>
      </div>
    );
  }
}

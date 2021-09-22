// Code MovieReviews Here
import React from 'react';

// class MovieReviews extends Component {
//     constructor(props){
//         super(props);
    
//         this.state = {
//             movies: []
//         }
//     }
// }

const Review = ({
    headline, 
    byline,
    link, 
    summary
    }) => {
        return (
            <div key={headline} className='review'>
                <header>
                    <a
                    className="review-link"
                    href={link.url}
                    >
                        {headline}
                    </a>
                <span className="author">{byline}</span>
                </header>
                <p>{summary}</p>

            </div>
        )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>


MovieReviews.defaultProps = {
    reviews: []
};
export default MovieReviews;
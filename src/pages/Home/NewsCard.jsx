import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {image_url,title,details,_id}=news
    return (
        <div className="card bg-base-100 shadow-xl mb-16">
        <figure><img src={image_url} /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {
            details.length>200
            ? <p>{details.slice(0,200)}  <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read more...</Link></p>
            :
            <p>{details}</p>
          }
          
        </div>
      </div>
    );
};

export default NewsCard;
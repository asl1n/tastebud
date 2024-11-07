import React from 'react';
import starImage from '../../assets/rating.png';

function ReviewItem({ rating, date, content }) {
  return (
    <article className="flex flex-col md:flex-row gap-4 items-start mt-3 rounded-md border border-solid border-zinc-300 p-4 w-full md:max-w-[800px] mx-auto">
    
      <div className="flex flex-col grow pb-3 w-full md:w-3/4">
        <div className="flex items-center gap-3 mb-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/362beaedc6f2e44dd6552ec55ec5729908094c461dbcab681d3396139cb82706?placeholderIfAbsent=true&apiKey=ca89be398a334777b23d4571f98eea67"
            alt="User avatar"
            className="object-cover w-10 h-10 rounded-full"
          />
          <div>
            <div className="text-sm font-semibold">User</div>
            <div className="flex items-center mt-1">
              {[...Array(rating)].map((_, i) => (
                <img
                  key={i}
                  src={starImage}
                  alt={`${rating} star rating`}
                  className="w-4 h-4"
                />
              ))}
            </div>
          </div>
          <span className="ml-auto text-xs text-gray-500">{date}</span>
        </div>
        <div className="text-sm text-gray-600 leading-5">
          <p>{content}</p>
        </div>
      </div>
    
      <div className="flex justify-center items-center w-full md:w-1/4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6441152aabeb86c907d355878f86028b67afe99e74cd9bf30081b70d5ed27266?placeholderIfAbsent=true&apiKey=ca89be398a334777b23d4571f98eea67"
          alt="Review image"
          className="object-cover rounded-md w-full md:w-auto h-auto md:h-[120px] aspect-square md:aspect-[16/9]"
        />
      </div>
    </article>
  );
}

export default ReviewItem;

import React from 'react';
import ReviewItem from './ReviewItem';

const reviews = [
  { rating: 5, date: '8 Aug 2024', content: 'Exceptional service and atmosphere. A great place to unwind!' },
  { rating: 4, date: '7 Aug 2024', content: 'Very good experience overall, just a bit crowded.' },
  { rating: 3, date: '6 Aug 2024', content: 'Average experience, could be improved.' },
  { rating: 2, date: '5 Aug 2024', content: 'Below average, the service was slow.' },
  { rating: 1, date: '4 Aug 2024', content: 'Disappointed. The atmosphere was not as expected.' },
  { rating: 5, date: '3 Aug 2024', content: 'A perfect experience. Will definitely come again!' },
  { rating: 4, date: '2 Aug 2024', content: 'Lovely ambiance and good food, but the music was too loud.' },
  { rating: 3, date: '1 Aug 2024', content: 'Decent place, nothing extraordinary.' },
  { rating: 5, date: '31 Jul 2024', content: 'One of the best places I have visited recently.' },
  { rating: 2, date: '30 Jul 2024', content: 'The food was underwhelming, though service was friendly.' },
  { rating: 1, date: '29 Jul 2024', content: 'Did not meet my expectations at all.' },
  { rating: 5, date: '28 Jul 2024', content: 'Highly recommended! Excellent all around.' },
  { rating: 4, date: '27 Jul 2024', content: 'Good experience, though I wish the service was faster.' },
  { rating: 3, date: '26 Jul 2024', content: 'An okay experience, but a bit pricey.' },
  { rating: 2, date: '25 Jul 2024', content: 'Average at best, I expected more based on reviews.' },
  { rating: 1, date: '24 Jul 2024', content: 'Not impressed. The food was cold when served.' },
  { rating: 5, date: '23 Jul 2024', content: 'Fantastic! Will recommend to all my friends.' },
  { rating: 4, date: '22 Jul 2024', content: 'Great food, but the seating was uncomfortable.' },
  { rating: 2, date: '21 Jul 2024', content: 'Underwhelming experience, service needs improvement.' },
  { rating: 1, date: '20 Jul 2024', content: 'Would not recommend, unfortunately.' },
  { rating: 5, date: '19 Jul 2024', content: 'Amazing experience! I loved every bit of it.' },
  { rating: 3, date: '18 Jul 2024', content: 'It was okay, nothing too special.' },
  { rating: 2, date: '17 Jul 2024', content: 'Could be better, the waiting time was too long.' },
  { rating: 4, date: '16 Jul 2024', content: 'Good spot, would go again.' },
  { rating: 3, date: '15 Jul 2024', content: 'Average place, food was just alright.' }
];	

// Utility function to parse and compare dates
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split(' ');
  return new Date(`${month} ${day}, ${year}`);
};

function ReviewList({ sortOrder, selectedRating, fromDate, toDate }) {
  // Filter reviews by rating and date range
  const filteredReviews = reviews.filter((review) => {
    const reviewDate = parseDate(review.date);

    // Filter by rating if selectedRating is set
    const matchesRating = selectedRating ? review.rating === selectedRating : true;

    // Filter by date range if fromDate and toDate are set
    const matchesDateRange =
      (!fromDate || reviewDate >= fromDate) && (!toDate || reviewDate <= toDate);

    return matchesRating && matchesDateRange;
  });

  // Sort reviews by date based on sortOrder
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return sortOrder === 'Latest to Oldest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <section className="flex flex-col w-[70%] max-md:w-full max-md:order-last">
      <div className="flex flex-col mt-3 max-md:mt-4">
        {sortedReviews.length > 0 ? (
          sortedReviews.map((review, index) => (
            <ReviewItem key={index} {...review} />
          ))
        ) : (
          <div className="flex justify-center items-center h-[300px]">
            <p className="text-2xl font-bold text-black">No reviews yet</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ReviewList;
import React from 'react';
import Layout from '../Layout';
import MainContent from './MainContent';

function Review() {
  return (
    <Layout>
    <div className="pt-2 pr-2 pl-6 bg-white flex flex-col min-h-screen rounded-lg shadow-lg">
      <MainContent />
    </div>
    </Layout>
  );
}

export default Review;

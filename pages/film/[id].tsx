import React from 'react';
// import Layout from '../components/layout';
import Header from 'components/Header';
import Film from 'containers/Film';
import Body from 'containers/Body';
import Footer from 'components/Footer';

const SearchPage = () => {
  // return <Layout />;

  return (
    <>
      <Header>
        <Film />
      </Header>
      <Body />
      <Footer />
    </>
  );
};

export default SearchPage;

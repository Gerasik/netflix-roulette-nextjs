import React from 'react';
import Header from 'components/Header';
import Search from 'containers/Search';
import Body from 'containers/Body';
import Footer from 'components/Footer';

const SearchPage = () => {
  return (
    <>
      <Header>
        <Search />
      </Header>
      <Body />
      <Footer />
    </>
  );
};

export default SearchPage;

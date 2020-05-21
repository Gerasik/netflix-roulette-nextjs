import React from 'react';
// import Layout from '../components/layout';
import Header from '../components/Header';
import Search from '../containers/Search';
import Body from '../containers/Body';

const SearchPage = () => {
  // return <Layout />;
  return (
    <>
      <Header>
        <Search />
      </Header>
      <Body />
    </>
  );
};

export default SearchPage;

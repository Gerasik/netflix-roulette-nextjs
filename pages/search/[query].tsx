import React from 'react';
// import Layout from '../components/layout';
import Header from 'components/Header';
import Search from 'containers/Search';
import Body from 'containers/Body';
import Footer from 'components/Footer';

const SearchPage = () => {
  // return <Layout />;

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

// export async function getStaticPaths(ss) {
//   console.log(ss);
//   return {
//     paths: [
//       // String variant:
//       '/search/Zoo',
//       // Object variant:
//       { params: { slug: 'second-post' } },
//     ],
//     fallback: false,
//   };
// }

// export const getStaticProps = async ({ params }) => {
//   console.log(params);
//   return {
//     props: {
//       params,
//     },
//   };
// };

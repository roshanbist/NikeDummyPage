import {
  Hero,
  CustomerReview,
  Footer,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from './sections';

import Nav from './components/Nav';

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <Hero />
      {/* <section className='xl:padding-l wide:padding-r padding-b'>
      </section> */}
      {/* <section className='padding'>
      </section> */}
      <PopularProducts />
      <SuperQuality />
      {/* <section className='padding'>
      </section> */}
      <Services />
      {/* <section className='padding-x padding-y'>
      </section> */}
      <SpecialOffers />
      {/* <section className='padding'>
      </section> */}
      <section className='bg-pale-blue'>
        <CustomerReview />
      </section>
      <Subscribe />
      {/* <section className='padding-x sm:py-32 py-16'>
      </section> */}
      <section className='bg-black'>
        <Footer />
      </section>
    </main>
  );
};

export default App;

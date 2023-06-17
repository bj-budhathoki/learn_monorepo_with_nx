import { Hero, SearchBar } from '../components';

export default async function PageOne() {
  return (
    <main>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p className="">Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            {/* <CSFilter title={'fuel'} />
            <CSFilter title={'year'} /> */}
          </div>
        </div>
      </div>
    </main>
  );
}

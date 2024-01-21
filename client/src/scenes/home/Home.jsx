import ShoppingList from "./ShoppingList";
import MainCarousel from "./MainCarousel";
import BrowseCollection from "./BrowseCollection";

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <BrowseCollection />
      <ShoppingList />
    </div>
  );
}

export default Home;

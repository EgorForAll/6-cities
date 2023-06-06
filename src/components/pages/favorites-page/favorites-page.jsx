import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "../../layout/footer/footer";
import FavoriteList from "../../blocks/favorite-list/favorite-list";
import {offerValid} from "/src/prop-types/offer";

const FavoritesPage = () => {

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList />
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default FavoritesPage;

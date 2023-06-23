import React, {useEffect} from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import FavoriteList from "../../blocks/favorite-list/favorite-list";
import {useDispatch, useSelector} from "react-redux";
import {fetchFavoritesList} from "../../../store/api-actions";
import {nameSpace} from "../../../store/root-reducer";

const FavoritesPage = () => {
  const {favorites, isPosted, isFavoritesLoaded} = useSelector((state) => state[nameSpace.FAVORITES]);
  const dispatch = useDispatch();
  const onLoadFavorites = () => dispatch(fetchFavoritesList());

  useEffect(() => {
    if(!isFavoritesLoaded) {
      onLoadFavorites();
    }
  }, [isPosted]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList favorites={favorites} />
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default FavoritesPage;

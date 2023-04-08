import React from 'react';
import { BsGridFill, BsList } from 'react-icons/bs';
import { useFilterGlobal } from '../context/FilterContext';
const Sort = () => {
  const {
    filtered_Products: products,
    grid_view,
    setGridView,
    setListView,
    upDateSort,
    sort,
  } = useFilterGlobal();

  return (
    <section className="sort">
      <div className="sort_btns">
        <button
          onClick={setGridView}
          type="button"
          className={`${
            grid_view ? 'sort_btns_btn sortactive' : 'sort_btns_btn'
          }`}
        >
          <BsGridFill />
        </button>
        <button
          onClick={setListView}
          type="button"
          className={`${
            !grid_view ? 'sort_btns_btn sortactive' : 'sort_btns_btn'
          }`}
        >
          <BsList />
        </button>

        <p>{`${products?.length} products found on store...`}</p>
        <hr className="hr" />

        <form className="sort_form">
          <label className="sort_form_label" htmlFor="sort">
            Sort by
          </label>
          <select
            name="sort"
            id="sort"
            className="sort_form_select"
            value={sort}
            onChange={upDateSort}
          >
            <option value="price-lowest">price(lowest)</option>
            <option value="price-highest">price(highest)</option>
            <option value="name-a">name(a-z)</option>
            <option value="name-z">name(z-a)</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Sort;

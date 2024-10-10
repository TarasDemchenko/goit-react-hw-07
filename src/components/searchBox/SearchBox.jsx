import { RiPhoneFindLine } from "react-icons/ri";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.search_form}>
        <p>
          Find contacts by name <RiPhoneFindLine />
        </p>
        <input
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          type="text"
          name=""
          id=""
          className={css.search_input}
        />
      </div>
    </>
  );
};

export default SearchBox;

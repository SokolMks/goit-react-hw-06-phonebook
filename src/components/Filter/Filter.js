import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/actions";
import style from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = (event) => dispatch(filterContact(event.target.value));

  return (
    <label className={style.label}>
      Find contacts by name:
      <input type="text" name="filter" onChange={onFilter} />
    </label>
  );
};

export default Filter;
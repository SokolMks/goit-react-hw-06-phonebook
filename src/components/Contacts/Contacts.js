import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";
import PropTypes from "prop-types";
import style from "./Contacts.module.css";

const Contacts = () => {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  const getContactList = (state) => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const contacts = useSelector(getContactList);

  return (
    <div className={style.container}>
      <h2 className={style.title}>Contacts</h2>
        <ul className={style.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.listElement}>
              <p>
                {name}: {number}
              </p>
              <button className={style.btn} onClick={() => onDeleteContact(id)}>
                Delete contact
              </button>
            </li>
          ))}
        </ul>

    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
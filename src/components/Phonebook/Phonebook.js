import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";
import style from "./Phonebook.module.css";

function PhoneBook({ submitForm }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeInput = (e) => {
    const { value } = e.currentTarget;

    if (e.target.name === "name") {
      setName(value);
    }
    if(e.target.name === "number") {
      setNumber(value);  
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    //submitForm({ name, number });
    dispatch(addContact({ name, number }));
    formReset();
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={style.containerForm} onSubmit={onSubmitForm}>
      <h2 className={style.title}>Phonebook</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}


export default PhoneBook;
import Section from "./components/Section/Section";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";
import PhoneBook from "./components/Phonebook/Phonebook";

function App() {
  return (
      <Section>
        <PhoneBook />
        <Contacts />
        <Filter />
      </Section>
  );
}

export default App;
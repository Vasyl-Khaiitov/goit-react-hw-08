import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../FilterContacts/FilterContacts';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import FilterContacts from '../FilterContacts/FilterContacts';
import { selectError, selectLoading } from '../../redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {error && <Error />}
      <ContactForm />
      {!loading && !error && <FilterContacts />}
      {loading && <Loader />}
      <ContactList />
    </div>
  );
}

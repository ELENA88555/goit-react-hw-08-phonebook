import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { fetchContactsThunk } from 'redux/operations';
import { useAuth } from 'hooks/useAuth';
// import { ContactList } from './ContactList/ContactList';
// import { AddContactForm } from './AddContactForm/AddContactForm';
// import { Filter } from './Filter/Filter';

// import { getContacts } from 'redux/slice';
// import { selectContacts } from 'redux/selectors';


import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';


const HomePage = lazy(() => import('../pages/Home/Home'));
const LoginPage = lazy(() => import('../pages/LogIn/LogIn'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const PhonebookListPage = lazy(() =>
  import('../pages/PhoneBookList/PhoneBookList')
);

export const App = () => {
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();


 

  useEffect(() => {
    dispatch( refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage/>}/>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<PhonebookListPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
  //   )
  //   <div>
  //     <div className={css.thumble}>
  //       <h1 className={css.title}>Phonebook</h1>

  //       <AddContactForm></AddContactForm>
  //       <h2 className={css.titleText}> Contacts</h2>

  //       {contacts.length < 1 ? (
  //         <p className={css.textApp}> You have no contacts saved</p>
  //       ) : (
  //         <>
  //           <Filter></Filter>
  //           <div className={css.containerWrapper}>
  //             <ContactList></ContactList>
  //           </div>
  //         </>
  //       )}
  //     </div>
  //   </div>
  // )
};

// export const App = () => {
//   const contacts = useSelector(getContacts);
//   // const [ contacts, setContacts] = useState(()=> JSON.parse(window.localStorage.getItem('contacts'))?? [])
//   // const [filter, setFilter] = useState('')

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   // useEffect(()=> {
//   //   window.localStorage.setItem('NewContacts', JSON.stringify(contacts))
//   //   },[contacts])

//   // useEffect(()=>{
//   //   const contactsSave = localStorage.getItem('NewContacts');
//   //   const parsedContacts = JSON.parse(contactsSave);
//   //   parsedContacts && setContacts(parsedContacts)
//   //   }, []);

//   //  const loginInputId = nanoid();

//   //  const addNewContact = ({id, name, number }) => {
//   //     const contact = {
//   //       id: nanoid(),
//   //       name,
//   //       number,
//   //     };
//   //     contacts.find(contact => contact.name === name)
//   //       ? alert(`${name} is alredy in contact`)
//   //       : setContacts(
//   //         prevContacts => [contact, ...prevContacts])
//   //   };

//   //  const filtrChangeHandler = ({target:{value}}) => {
//   //   setFilter(value);
//   //   };

//   //  const getVisibleContacts = () => {
//   //      return contacts.filter(contact =>
//   //       contact.name.toLowerCase().includes(filter.toLowerCase().trim())
//   //     );
//   //   };

//   //  const btnDeleteHandler = contactId => {
//   //   setContacts(prevState =>
//   //      prevState.filter(contact => contact.id !== contactId),
//   //     );
//   //     setFilter('')
//   //   };

//   return (
//     <div>
//       <div className={css.thumble}>
//         <h1 className={css.title}>Phonebook</h1>

//         <AddContactForm></AddContactForm>
//         <h2 className={css.titleText}> Contacts</h2>

//         {contacts.length < 1 ? (
//           <p className={css.textApp}> You have no contacts saved</p>
//         ) : (
//           <>
//             <Filter
//             // value={filter}
//             // changeFilter={filtrChangeHandler}
//             ></Filter>
//             <div className={css.containerWrapper}>
//               <ContactList
//               // title="Contacts"
//               // contacts={getVisibleContacts()}
//               // id={loginInputId}
//               // onDeleteBtn={btnDeleteHandler}
//               ></ContactList>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// .thumble{
//   display: block;
//     align-items: center;
//     justify-content: center;
//     padding: 30px;

//   }

//   .containerWrapper{
//     width: 320px;
//     margin: 0 100px;
//     padding: 50px 10px 50px 10px;

//   }

//   .title{
//     display: block;
//     font-size: 30px;
//     font-weight: bold;
//     font-style: normal;
//     color: rgb(123, 178, 223);
//   margin-left: 200px;
//   }

//   .textApp{
//     display: flex;
//     align-items: center;
//     text-align: center;
//     justify-content: center;
//     margin-top: 30px;
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 500;
//   }

//   .titleText{
//     display: flex;
//     align-items: center;
//     text-align: center;
//     justify-content: center;
//     margin-top: 30px;
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 800;
//   }

import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

const getLocalStorage = () => {
  let data = localStorage.getItem('data');
  if (data) {
    return JSON.parse(localStorage.getItem('data'));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [state, setstate] = useState(false);
  const [todoName, setTodoName] = useState('');
  const [todoTopic, setTodoTopic] = useState('');

  const [list, setlist] = useState(getLocalStorage());

  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: '',
    data: '',
  });

  //EDIT ITEMS

  const [isEditing, setisEditing] = useState(false);
  const [editID, setEditId] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setstate(false);

    //FIRST CASE: CHECKING IF VALU IS EMPTY
    if (todoName === '' || todoTopic === '') {
      AlertHandler({
        show: true,
        type: 'danger',
        msg: 'ENTER ALL VALUES PLEASE',
        data: 'ERROR',
      });
    } else if (todoName !== '' && todoTopic !== '' && isEditing) {
      setlist(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: todoName, topic: todoTopic };
          }
          return item;
        })
      );

      setTodoName('');
      setTodoTopic('');
      setEditId(null);
      setisEditing(false);
      AlertHandler({
        show: true,
        type: 'success',
        msg: 'ITEM UPDATED SUCCESSFULLY ',
        data: 'SUCCESS',
      });
    } else {
      AlertHandler({
        show: true,
        type: 'success',
        msg: 'ITEM SUCCESSFULLY ADDED TO LIST ',
        data: 'SUCCESS',
      });
      let newItem = {
        id: new Date().getTime().toString(),
        title: todoName,
        topic: todoTopic,
      };
      setlist([...list, newItem]);

      setstate(true);
      setTodoName('');
      setTodoTopic('');
    }

    // setstate(false);
  };

  //storing data on localstorage
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(list));
  }, [list]);

  //ALERT HANDLER

  const AlertHandler = ({ show = false, type = '', msg = '', data = '' }) => {
    setAlert({ show, type, msg, data });
  };

  useEffect(() => {
    let alert = setInterval(() => {
      setAlert({});
    }, 3000);
    return () => clearInterval(alert);
  }, [setAlert]);

  //REMOVE ITEMS BY ID

  const removeItemsById = (id) => {
    AlertHandler({
      show: true,
      type: 'danger',
      msg: ' ITEM REMOVED FROM TODO LIST  ',
      data: 'SUCCESS',
    });
    //THIS FN FILTERS AND DELETES ITEM BY ID

    let filterItems = list.filter((item) => item.id !== id);

    setlist(filterItems);
  };

  //REMOVE ALL ITEMS

  const removeAll = () => {
    AlertHandler({
      show: true,
      type: 'success',
      msg: 'CLEARED ALL ITEMS ',
      data: 'SUCCESS',
    });
    setlist([]);
  };

  //UPDATE ITEMS

  const UpdateItemsById = (id) => {
    const existingItem = list.find((item) => item.id === id);

    setisEditing(true);

    setEditId(id);

    setTodoName(existingItem.title);
    setTodoTopic(existingItem.topic);
    console.log(existingItem);
  };

  return (
    <AppContext.Provider
      value={{
        todoName,
        todoTopic,
        setTodoName,
        setTodoTopic,
        formSubmitHandler,
        alert,
        AlertHandler,
        list,
        state,
        setstate,
        removeAll,
        removeItemsById,
        UpdateItemsById,
        isEditing,
        setisEditing,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };

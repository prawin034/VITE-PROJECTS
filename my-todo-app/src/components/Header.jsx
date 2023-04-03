import React from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { useGlobalContext } from '../context/context';

import { Link, useNavigate } from 'react-router-dom';
import { useGlobalAuthContext } from '../context/Auth';
const Header = () => {
  const { list, removeAll, removeItemsById, UpdateItemsById } =
    useGlobalContext();

  const { user, setloading, loading } = useGlobalAuthContext();

  const HANDLER = () => {
    if (!user) {
      window.alert('PLEASE LOGIN TO ADD TODO');
    }
  };

  if (list.length === 0) {
    return (
      <div className="header">
        <div className="flex">
          <h1>EMPTY TODO </h1>

          <Link onClick={HANDLER} className="header_link" to={user && `/new`}>
            ADD TODO
          </Link>
        </div>
      </div>
    );
  }

  const navigate = useNavigate();
  return (
    <header className="header">
      {list.length > 0 && (
        <div>
          {list.map((item) => {
            const { id, title, topic } = item;
            return (
              <div key={id} className="header_box">
                <div className="header_box_1">
                  <h1 className="header_box_1_h1">{title}</h1>
                  <h3 className="header_box_1_h3">TOPIC: {topic}</h3>
                </div>
                <div className="header_box_2">
                  <button
                    onClick={() => {
                      UpdateItemsById(id);
                      navigate('/new');
                    }}
                  >
                    <AiFillEdit size={40} color="#1098ad" cursor="pointer" />
                  </button>

                  <AiOutlineDelete
                    onClick={() => removeItemsById(id)}
                    size={40}
                    color="#1098ad"
                    cursor="pointer"
                  />
                </div>
              </div>
            );
          })}
          <hr />
          <h3 className="total">NO OF ITEMS ADD TO CART:{`${list.length}`}</h3>
          <button onClick={removeAll} className="clear">
            CLEAR ALL
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

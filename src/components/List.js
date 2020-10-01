import React, { useState, useEffect } from 'react';
import { DATA }  from './Data';


const List = ({match}) => {
  useEffect(() => {
    
    console.log(match)
  }, []);

  const [lists,setLists] = useState({});
  const fetchItem = () => {
    setLists(lists);
    console.log(lists);
  }

  return (
    <div className="main">
      <h1>{lists.title}</h1>
      {/* {lists.map((list) => (
        <h1>{list.title}</h1>
      ))} */}
    </div>
  )
}
export default List;
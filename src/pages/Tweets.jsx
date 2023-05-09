import { useDispatch, useSelector } from "react-redux";

// import { UserCard } from "../components/UserCard/UserCard";
import { fetchUsers } from "../redux/operations";
import { useEffect, useState } from "react";
import { UserList } from "../components/UserList/UserList";
import { getUsers } from "../redux/selectors";
// import { getError, getUsers, isLoading } from "../../redux/selectors";

const Tweets = () => {

  const fetchedUsers = useSelector(getUsers);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

   const dispatch = useDispatch();

         useEffect(() => {
           dispatch(fetchUsers(page));
           
         }, [dispatch, page]); 
  useEffect(() => {
    setPage(1);
  }, []);
  
  useEffect(() => {
    if (page > 1) {
      setUsers(prevUsers => [...prevUsers, ...fetchedUsers]);
    } else {
      setUsers(fetchedUsers);
    }
    // eslint-disable-next-line
  }, [fetchedUsers])
  
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
    // setUsers(prevUsers=>[...prevUsers, fetchedUsers])
  }
    
    return (
      <div>
        <UserList users={users} />
        {page<5&&<button
          onClick={handleLoadMore}
        >
          Load more
        </button>}
      </div>
    );
}
export default Tweets;
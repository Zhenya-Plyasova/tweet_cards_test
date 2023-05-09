import { useDispatch } from "react-redux";

// import { UserCard } from "../components/UserCard/UserCard";
import { fetchUsers } from "../redux/operations";
import { useEffect, useState } from "react";
import { UserList } from "../components/UserList/UserList";
// import { getUsers } from "../redux/selectors";
// import { getError, getUsers, isLoading } from "../../redux/selectors";

const Tweets = () => {

  // const fetchedUsers = useSelector(getUsers);
  const [page, setPage] = useState(1);
  // const [users, setUsers] = useState(fetchedUsers);


   const dispatch = useDispatch();

         useEffect(() => {
           dispatch(fetchUsers(page));
           
         }, [dispatch, page]); 
  
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);

  }
    
    return (
      <div>
        <UserList />
        <button onClick={handleLoadMore}>Load more</button>
      </div>
    );
}
export default Tweets;
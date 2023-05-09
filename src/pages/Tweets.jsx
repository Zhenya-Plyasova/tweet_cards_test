import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/operations";
import { useEffect, useState } from "react";
import { UserList } from "../components/UserList/UserList";
import { getUsers } from "../redux/selectors";
import { LoadMoreButton } from "components/LoadMoreButton";
import { BackLink } from "components/BackLink";

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
  }
    
    return (
      <div>
        <BackLink type="button" />
        <UserList users={users} />
        {page<5&&<LoadMoreButton onClick={handleLoadMore} />}
      </div>
    );
}
export default Tweets;
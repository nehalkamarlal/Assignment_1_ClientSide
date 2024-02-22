import React, { useEffect ,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getFeedData } from '../../redux/slices/feedSlice';
function Admin() {

    
  const dispatch = useDispatch();
  // const [admin,setAdmin]=useState(false);
  const userProfile = useSelector((state) => state.postsReducer.userProfile);
console.log(userProfile,"hk");
  useEffect(() => {
    // dispatch(getFeedData());
    // if(feedData?.userType==="Admin"){
    //   setAdmin(true);
  // }
  }, [dispatch])
  return (
    
    <div><h1>Welcome Admin Here</h1>
    <table style={{width:"500px"}}>
<tr>
    <th>Name:</th>
    <th>Email</th>
    <th>User</th>
    <th>Delete</th>
    </tr>

    </table>
    </div>
  )
}

export default Admin
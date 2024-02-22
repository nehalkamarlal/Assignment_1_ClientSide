import React, { useEffect ,useState} from 'react'
import Follower from '../follower/Follower'
import Post from '../post/Post'
import './Feed.scss'
import {useSelector, useDispatch} from 'react-redux';
import { getFeedData } from '../../redux/slices/feedSlice';
import Admin from '../admin/Admin';

function Feed() {

  const dispatch = useDispatch();
  const [admin,setAdmin]=useState(false);
  const feedData = useSelector(state => state.feedDataReducer.feedData)
console.log(feedData.userType,"nk");
  useEffect(() => {
    dispatch(getFeedData());
    if(feedData?.userType==="Admin"){
      setAdmin(true);
  }
  }, [dispatch])

  return (
    <div className="Feed">
      {admin?<Admin/>: <div className="container">
          <div className="left-part">
            {feedData?.posts?.map(post => <Post key={post._id} post={post} />)}
          </div>
          <div className="right-part">
            <div className="following">
              <h3 className="title">You Are Following</h3>
              {feedData?.followings?.map(user => <Follower key={user._id} user={user}/>)}
            </div>
            <div className="suggestions">
              <h3 className="title">Suggested For You</h3>
              {feedData?.suggestions?.map(user => <Follower key={user._id} user={user}/>)}
            </div>
          </div>
        </div>}
       
    </div>
  )
}

export default Feed;
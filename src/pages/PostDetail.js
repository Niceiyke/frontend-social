import React from 'react'
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import useAuth from "../hooks/useAuth";
import Detail from '../components/Detail';

const PostDetail = () => {
    const { User, AuthToken } = useAuth();

    return (
      User?.id &&
      AuthToken && (
        <div className='flex max-w-["1300"] mr-auto ml-auto px-2.5 py-0'>
          <Sidebar />
          <Detail />
          <Widget />
        </div>
      )
    );
}

export default PostDetail

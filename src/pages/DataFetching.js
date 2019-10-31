import React, { useTransition, useState, Suspense } from "react";
import { fetchProfileData } from "../api";

const initialResource = fetchProfileData(0);

const DataFetching = () => {
  const [startTransition, isPending] = useTransition({
    timeoutMs: 10000
  });
  const [userId, setUserId] = useState(0);
  const [resource, setResource] = useState(initialResource);

  const onChangeOptions = e => {
    const { value } = e.currentTarget;
    const id = parseInt(value, 10);
    setUserId(id);
    startTransition(() => {
      setResource(fetchProfileData(id));
    });
  };

  return (
    <div>
      <div>
        <select value={userId} onChange={onChangeOptions}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
        {isPending && <span>wait...</span>}
      </div>
      <Suspense fallback={<div>waiting in Suspense</div>}>
        <User userResource={resource.user} />
        <Suspense fallback={<div>also posts are loading</div>}>
          <Post postsResource={resource.posts} />
        </Suspense>
      </Suspense>
    </div>
  );
};

const User = ({ userResource }) => {
  const user = userResource.read();
  return <h3>{user.name}</h3>;
};

const Post = ({ postsResource }) => {
  const posts = postsResource.read();
  return (
    <div>
      {posts.map(p => (
        <div key={p.id}>{p.text}</div>
      ))}
    </div>
  );
};

export default DataFetching;

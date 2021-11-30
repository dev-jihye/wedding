import styled from "styled-components";
import Opening from "components/Opening";
import Greeting from "components/Greeting";
import Contact from "components/Contact";
import Gallery from "components/Gallery";
import Location from "components/Location";
import CommentForm from "components/CommentForm";
import Comment from "components/Comment";
import { useEffect, useState } from "react";
import {
  collection,
  orderBy,
  query,
  startAfter,
  limit,
  getDocs,
} from "@firebase/firestore";
import { dbService } from "fbase";
import { ContentContainer } from "sharedStyles";

const CommentContainer = styled.div`
  padding: 30px 15px;
  background-color: #f1f1f1;
`;

const MoreBtn = styled.button`
  padding: 6px 10px;
  width: 100%;
  border: none;
  background-color: #9ea7aa;
  color: #fff;
  border-radius: 3px;
  font-size: 13px;
`;

const App = () => {
  const [lastVisible, setLastVisible] = useState([]);
  const [comments, setComments] = useState([]);
  const LIMIT = 3;

  const first = query(
    collection(dbService, "comments"),
    orderBy("createdAt", "desc"),
    limit(LIMIT)
  );

  const firstCall = async () => {
    const documentSnapshots = await getDocs(first);
    setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
    const dataArr = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setComments(dataArr);
  };

  const next = query(
    collection(dbService, "comments"),
    orderBy("createdAt", "desc"),
    startAfter(lastVisible),
    limit(LIMIT)
  );

  useEffect(async () => {
    firstCall();
  }, []);

  const moreComments = async () => {
    const documentSnapshots = await getDocs(next);
    if (documentSnapshots.docs.length > 0) {
      setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
      const dataArr = documentSnapshots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const newArr = [...comments, ...dataArr];
      setComments(newArr);
    } else {
      setLastVisible(null);
    }
  };

  return (
    <>
      <Opening />
      <Greeting />
      <Contact />
      <Gallery />
      <Location />
      <CommentContainer>
        <ContentContainer>
          <CommentForm refreshComments={firstCall} />
          <div>
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                commentObj={comment}
                refreshComments={firstCall}
              />
            ))}
          </div>
          {lastVisible ? (
            <MoreBtn onClick={moreComments}>더보기</MoreBtn>
          ) : (
            <MoreBtn disabled style={{ opacity: 0.5 }}>
              댓글이 없습니다.
            </MoreBtn>
          )}
        </ContentContainer>
      </CommentContainer>
    </>
  );
};

export default App;

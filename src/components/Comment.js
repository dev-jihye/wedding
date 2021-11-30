import styled from "styled-components";
import { deleteDoc, doc } from "@firebase/firestore";
import { dbService } from "fbase";
import bcrypt from "bcryptjs";

const CommentBox = styled.div`
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const CommentRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.p`
  font-size: 14px;
  padding: 7px;
  max-width: 150px;
`;

const Text = styled.p`
  font-size: 14px;
  padding: 7px;
  width: 100%;
`;

const DateText = styled.p`
  font-size: 14px;
  padding: 7px;
  width: 100%;
  font-size: 12px;
  color: #9ea7aa;
  text-align: end;
`;

const IconWrapper = styled.button`
  margin: 0 3px;
  border: none;
  background: none;
`;

const Comment = ({ commentObj, refreshComments }) => {
  const onDeleteClick = async () => {
    const commentTextRef = doc(dbService, "comments", `${commentObj.id}`);
    const question = prompt("글을 삭제하려면 비밀번호를 입력하세요.");
    const checkPassword = await bcrypt.compare(question, commentObj.password);
    if (checkPassword) {
      await deleteDoc(commentTextRef);
      refreshComments();
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <CommentBox>
      <CommentRow>
        <Name>{commentObj.name}</Name>
        <CommentRow>
          <DateText>
            {new Date(commentObj.createdAt).toISOString().slice(0, 10)}
          </DateText>
          <IconWrapper>
            <svg
              onClick={onDeleteClick}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconWrapper>
        </CommentRow>
      </CommentRow>
      <Text>{commentObj.comment}</Text>
    </CommentBox>
  );
};

export default Comment;

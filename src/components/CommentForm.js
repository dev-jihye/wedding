import styled from "styled-components";
import { dbService } from "../fbase";
import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { useForm } from "react-hook-form";
import bcrypt from "bcryptjs";
import { Title } from "sharedStyles";

const Form = styled.form`
  margin: 20px 0;
`;

const CommentRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 7px;
  border-radius: 3px;
  border: none;
`;

const FormTxt = styled.input`
  width: 100%;
  padding: 7px;
  margin: 10px 0;
  border-radius: 3px;
  border: none;
`;

const Input = styled.input`
  padding: 6px 10px;
  width: 100%;
  border: none;
  background-color: #ef9a9a;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
`;

const CommentForm = ({ refreshComments }) => {
  const [formError, setFormError] = useState();
  const { register, handleSubmit, setValue, formState } = useForm({
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    console.log(data);
    const { name, comment, password } = data;
    const commentObj = {
      name,
      comment,
      password: await bcrypt.hash(password, 10),
      createdAt: Date.now(),
    };
    await addDoc(collection(dbService, "comments"), commentObj);
    setValue("comment", "");
    refreshComments();
  };

  const onSubmitFailed = (data) => {
    console.log(data);
    setFormError(data);
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return (
    <>
      <Title>Guest Book</Title>
      <Form onSubmit={handleSubmit(onSubmit, onSubmitFailed)}>
        <CommentRow>
          <FormInput
            {...register("name", { required: "이름을 입력하세요." })}
            type="text"
            placeholder="Name"
            onKeyDown={clearFormError}
          />
          {formError?.name?.message && <p>{formError?.name.message}</p>}
          <FormInput
            {...register("password", {
              required: "비밀번호는 반드시 필요합니다",
              minLength: {
                value: 4,
                message: "비밀번호는 최소 4자리 입니다.",
              },
            })}
            type="password"
            placeholder="Password"
            onKeyDown={clearFormError}
          />
          {formError?.password?.message && <p>{formError?.password.message}</p>}
        </CommentRow>
        <div>
          <FormTxt
            {...register("comment", {
              required: "내용을 입력하세요.",
              maxLength: {
                value: 120,
                message: "내용은 최대 120글자 입니다.",
              },
            })}
            type="text"
            placeholder="Comment"
            onKeyDown={clearFormError}
          />
          {formError?.comment?.message && <p>{formError?.comment.message}</p>}
        </div>
        <Input type="submit" value="축하글 남기기" />
      </Form>
    </>
  );
};

export default CommentForm;

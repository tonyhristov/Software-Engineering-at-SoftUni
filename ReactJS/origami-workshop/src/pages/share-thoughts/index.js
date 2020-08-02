import React from "react";
import styled from "styled-components";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import Origamis from "../../components/origamis";

const ShareThoughtsPage = () => {
  return (
    <PageLayout>
      <Title title="Share your thoughts" />
      <Container>
        <div>
          <TextArea defaultValue="Publication..." />
        </div>
        <div>
          <SubmitButton title="Post" />
        </div>
      </Container>
      <Origamis length={3} />
    </PageLayout>
  );
};

const Container = styled.div`
  text-align: center;
`;

const TextArea = styled.textarea`
  width: 40%;
  display: block;
  margin: 0 auto;
  resize: none;
  padding: 2%;
  height: 10vh;
  font-style: italic;
  border-radius: 6px;
  border: 1px solid #234465;
  color: #234465;
`;

export default ShareThoughtsPage;

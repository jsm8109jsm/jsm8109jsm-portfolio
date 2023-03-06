import styled from "styled-components";

export const Career = styled.div`
  width: calc(50% - 10px);
  border-radius: 30px;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Title = styled.h1`
  margin: 10px auto;
  color: white;
  font-family: "Black Han Sans", sans-serif;
  font-size: 48px;
  transition: 300ms;
  @media screen and (max-width: 1000px) {
    font-size: 30px;
  }
  text-align: center;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
`;

export const Content = styled.span<{ isCertificate?: true }>`
  &:before {
    content: "${({ isCertificate }) => (isCertificate ? "📚" : "🏆")}";
    margin-right: 20px;
  }
  color: white;
  font-size: 24px;
  @media screen and (max-width: 1000px) {
    &:before {
      margin-right: 10px;
    }
    font-size: 18px;
  }
`;

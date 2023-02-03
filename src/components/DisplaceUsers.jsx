import { useSelector } from "react-redux";
import styled from "styled-components";

const DisplaceUsers = () => {
  const data = useSelector((state) => state.users);
  console.log("🚀 ~ file: DisplaceUsers.jsx:6 ~ DisplaceUsers ~ data", data);
  return (
    <Wrapper>
      {data.map((user, id) => {
        return <li key={id}>{user}</li>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }
`;

export default DisplaceUsers;

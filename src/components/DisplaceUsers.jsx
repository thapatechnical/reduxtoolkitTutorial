import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/all.js";
import { removeUser } from "../store/slices/UserSlice";

const DisplaceUsers = () => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();
  // console.log("🚀 ~ file: DisplaceUsers.jsx:6 ~ DisplaceUsers ~ data", data);
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn-delete">
              <MdDeleteForever
                className="delete-icon"
                onClick={() => deleteUser(id)}
              />
            </button>
          </li>
        );
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

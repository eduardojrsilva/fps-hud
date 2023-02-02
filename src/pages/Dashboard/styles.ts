import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  height: 100%;
`;

export const Hud = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  position: relative;

  background: #7a877f;

  > img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  > div {
    flex: 1;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  border-radius: 10px;
  padding: 10px;

  background: #202024;

  form {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #E1E1E6;

    input {
      width: 150px;
      padding: 5px 10px;
      border: 0;
      border-radius: 10px;

      background: #121214;
      color: #E1E1E6;
    }

    div {
      display: flex;
      flex-direction: column;

      svg {
        width: 40px;
        height: 20px;
        border-radius: 5px;

        :hover {
          border: 1px solid red;
        }
      }
    }
    
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #FF0000;
      border-radius: 50%;
      width: 30px;
      height: 30px;

      background: #121214;
      color: #E1E1E6;
    }
  }

  > div:first-of-type {
    display: flex;
    align-items: center;
    gap: 10px;

    > button {
      width: 100px;
      padding: 10px;
      border: 1px solid #FF0000;
      border-radius: 10px;
      background: #121214;
      color: #FF0000;
    }
  }

  > div:last-of-type {
    display: flex;
    gap: 5px;

    > button {
      padding: 0px 10px;
      border: 1px solid #FF0000;
      border-radius: 10px;

      background: transparent;

      > svg {
        width: 50px;
        height: 30px;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`;

export const KillFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 150px;
  width: 300px;
  padding: 10px;

  span {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #E1E1E6;

    svg {
      width: 50px;
      height: 30px;
    }
  }
`;

export const Map = styled.img`
  width: 150px;
  height: 150px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  padding: 10px;
  position: relative;
`;

export const AvatarInfo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;

  background: rgba(0, 0, 0, 0.5);
`;

export const WeaponInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;

  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);

  > div {
    > svg {
      width: 100px;
      height: 50px;
    }

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;

      font-weight: bold;
      font-size: 20px;

      > svg {
        width: 10px;
        height: 15px;
      }
    }
  }
`;
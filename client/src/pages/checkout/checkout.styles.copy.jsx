import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

  justify-items: center;

  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;
export const CheckoutItemsSummary = styled.div`
  width: 80%;
  display: grid;
`;

export const PaymentDetailsEntry = styled.div`
  display: flex;
`;
export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

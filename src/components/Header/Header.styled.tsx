import styled from 'styled-components';
import { MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons';

export const HeaderWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  background: #000000;
`;

export const HeaderTitle = styled.h1`
  text-align: center;
  width: 100%;
  color: #fcbd1b;
  font-weight: bold;
  margin: 0;
  user-select: none;
`;

export const BurgerIcon = styled(MenuOutlined)`
  color: #ffffff;
  font-size: large;
`;

export const BackIcon = styled(ArrowLeftOutlined)`
  color: #ffffff;
  font-size: large;
`;

declare module "react-slick";

declare module "react-collapse" {
  import { ReactNode } from "react";

  interface CollapseProps {
    isOpened: boolean;
    children?: ReactNode;
  }

  export const Collapse: React.FC<CollapseProps>;
  export default Collapse;
}

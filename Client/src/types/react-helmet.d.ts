declare module "react-helmet" {
  import * as React from "react";

  export interface HelmetProps {
    base?: any;
    bodyAttributes?: any;
    defaultTitle?: string;
    defer?: boolean;
    encodeSpecialCharacters?: boolean;
    htmlAttributes?: any;
    onChangeClientState?: (
      newState: any,
      addedTags: any,
      removedTags: any,
    ) => void;
    link?: any[];
    meta?: any[];
    noscript?: any[];
    script?: any[];
    style?: any[];
    title?: string;
    titleAttributes?: any;
    titleTemplate?: string;
  }

  export class Helmet extends React.Component<HelmetProps> {}
  export default Helmet;
}

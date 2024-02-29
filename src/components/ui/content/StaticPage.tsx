import React from "react";
interface IContentProps {
  header: string;
  body: any;
}
const StaticPage = (props: IContentProps) => {
  const { header, body } = props;
  return (
    <div>
      <div
        className="static-title"
        dangerouslySetInnerHTML={{ __html: header }}
      ></div>
      <div 
        className="static-content"
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </div>
  );
};

export default StaticPage;

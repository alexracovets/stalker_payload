import { HeaderHome } from "@organisms";

import { MainPage } from "@payload-types";

interface TemplateHomeProps {
  data: MainPage;
}

export const TemplateHome = ({ data }: TemplateHomeProps) => {
  console.log(data);
  return <HeaderHome />;
};

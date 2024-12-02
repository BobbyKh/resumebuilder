import { useParams } from "react-router-dom";
import ResumeTemplate from "./resumesection/ResumeTemplate";
import BioDataTemplate from "./biodatasection/BioDataTemplate";
import CoverTemplate from "./coverlettersection/CoverTemplate";
import CVtemplate from "./cvsection/CVtemplate";


const TemplatePage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  // Render the appropriate template based on the `id`
  switch (id) {
    case "resume":
      return <ResumeTemplate />;
    case "cv":
      return <CVtemplate />;
    case "coverletter":
      return <CoverTemplate />;
    case "biodata":
      return <BioDataTemplate />;
    default:
      return <div>Template not found</div>;
  }
};

export default TemplatePage;

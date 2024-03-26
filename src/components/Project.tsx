import ProjectCSS from "../modules/Project.module.css";

interface Props {
  imgURL: string;
  imgAlt: string;
  link: string;
  children: string;
  tech: string;
  description: string;
}

const Project = ({
  imgURL,
  imgAlt,
  link,
  children,
  tech,
  description,
}: Props) => {
  return (
    <>
      <div className={ProjectCSS.box}>
        <div className={ProjectCSS.imgContainer}>
          <img src={imgURL} alt={imgAlt} />
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
        <p>{tech}</p>
        <p className={ProjectCSS.description}>{description}</p>
      </div>
    </>
  );
};

export default Project;

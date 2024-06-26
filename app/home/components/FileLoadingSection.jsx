const FileLoadingSection = ({loadingMessage}) => {
  return (
    <section className="fileLoadingSection">
      <div className="loader"></div>
      <span>
        {loadingMessage}
      </span>
    </section>
  );
};
export default FileLoadingSection;

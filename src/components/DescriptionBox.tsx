interface DescriptionBoxProps {
  description: string;
}

const DescriptionBox = ({ description }: DescriptionBoxProps) => {
  return (
    <>
      <div
        style={{
          height: "50px",
          width: "100%",
          margin: "10px",
          padding: "10px"
        }}
      >
        <div>
          <h4 style={{ padding: "10px" }}>{description}</h4>
        </div>
      </div>
      <br />
    </>
  );
};

export default DescriptionBox;

interface MessageBoxProps {
  history: string[];
}

const MessageBox = ({ history }: MessageBoxProps) => {
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
        <h4 style={{ padding: "10px" }}>{history}</h4>
      </div>
      <br />
    </>
  );
};

export default MessageBox;

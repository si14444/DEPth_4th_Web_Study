const EmptyPage = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span>{text}</span>
    </div>
  );
};

export default EmptyPage;

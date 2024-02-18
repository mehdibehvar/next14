const newlayout = ({ children }) => {
  return (
    <div className="border border-y-4 border-yellow-500 p-4">
      <h1>new layout</h1>
      {children}
    </div>
  );
};

export default newlayout;

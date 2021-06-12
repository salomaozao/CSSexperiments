import AppIcon from "./appIcon";
const AppsRow = ({ title, children }) => {
  let RowItems = [];
  for (let i = 0; i < children.length; i++) {
    RowItems.push(<AppIcon title={children[i]} />);
  }

  return (
    <div className="appsRow center-self mt-3">
      <span>{title}</span>
      <div className="row">{RowItems}</div>
    </div>
  );
};

export default AppsRow;

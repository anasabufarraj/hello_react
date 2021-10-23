import TableHeader from './tableHeader';
import TableBody from './tableBody';

function Table(props) {
  return (
    <table className="table m-3">
      <TableHeader columns={props.columns} sortColumn={props.sortColumn} onSort={props.onSort} />
      <TableBody columns={props.columns} data={props.data} />
    </table>
  );
}

export default Table;

import React from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";

const HomePage = () => {
  // Sample data for the table
  const { posts } = useSelector((state) => state.post);
  const data = React.useMemo(
    () =>
    [{ platforms: "Platforms", image: "platforms" },]
  );

  const columns = React.useMemo(
    () => [
      { Header: "Platforms", accessor: "platforms" },
      { Header: "Image", accessor: "image" },
      { Header: "Scheduled Date", accessor: "scheduled_date" },
      { Header: "Caption", accessor: "caption" },
      { Header: "Actions", accessor: "actions" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="flex gap-4 flex-col w-full">
      <div className="flex text-white gap-2 w-full flex-wrap">
        <div className="flex p-3 rounded-lg bg-gray-800 flex-col gap-2 min-w-[180px] flex-1 w-full sm:[40%]">
          <p className="font-thin">Total Posts</p>
          <h1 className="text-2xl self-end">123</h1>
        </div>
        <div className="flex p-3 rounded-lg bg-gray-800 flex-col gap-2 min-w-[180px] flex-1 w-full sm:[40%]">
          <p className="font-thin">Scheduled Posts</p>
          <h1 className="text-2xl self-end">123</h1>
        </div>
        <div className="flex p-3 rounded-lg bg-gray-800 flex-col gap-2 min-w-[180px] flex-1 w-full sm:[40%]">
          <p className="font-thin">Draft Posts</p>
          <h1 className="text-2xl self-end">123</h1>
        </div>
      </div>
      {/* Table */}

      <h1 className="text-xl font-normal text-white mb-4">Scheduled Posts</h1>
      <table
        {...getTableProps()}
        className="min-w-full bg-black text-white rounded-lg overflow-hidden"
      >
        <thead className="bg-gray-800">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-3 text-left font-light text-gray-300 uppercase tracking-wider"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              <tr key={rowProps.key} {...rowProps} className="hover:bg-gray-700">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-2">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;

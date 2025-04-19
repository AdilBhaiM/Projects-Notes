import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";
import { Edit, Trash2 } from "lucide-react";
import { getAllPosts } from "../../redux/actions/PostActions";

const HomePage = () => {
  // Sample data for the table
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  // console.log(posts);

  const data = React.useMemo(() => {
    return posts?.map((post) => ({
      platforms: post.platforms.join(", ") || "Instagram",
      image: post.images || "https://via.placeholder.com/150",
      scheduleDate: post.scheduleDate
        ? new Date(post.scheduleDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "N/A",
      caption: post.caption || "No caption provided.",
      actions: (
        <div className="flex gap-2">
          <Edit className="w-5 h-5 text-blue-500 cursor-pointer hover:text-blue-700" />
          <Trash2 className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-700" />
        </div>
      ),
    }));
  }, [posts]);
  console.log(posts[0]);
  const columns = React.useMemo(
    () => [
      { Header: "Platforms", accessor: "platforms" },
      { Header: "Image", accessor: "image" },
      { Header: "Scheduled Date", accessor: "scheduleDate" },
      { Header: "Caption", accessor: "caption" },
      { Header: "Actions", accessor: "actions" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="flex gap-4 flex-col w-full">
      {/* Table */}
      <h1 className="text-xl font-normal text-white">Scheduled Posts</h1>
      <div className="overflow-x-auto w-full rounded-[14px]">
        <table
          {...getTableProps()}
          className="min-w-full bg-black text-white rounded-lg"
        >
          <thead className="bg-gray-800">
            {headerGroups.map((headerGroup) => {
              const { key, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...restHeaderGroupProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...restColumnProps } = column.getHeaderProps();
                    return (
                      <th
                        key={key}
                        {...restColumnProps}
                        className="px-4 py-5 text-left font-light text-gray-300 uppercase tracking-wider"
                      >
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              const { key, ...restRowProps } = row.getRowProps();
              return (
                <tr key={key} {...restRowProps} className="hover:bg-gray-700">
                  {row.cells.map((cell) => {
                    const { key, ...restCellProps } = cell.getCellProps();
                    return (
                      <td
                        key={key}
                        {...restCellProps}
                        className="px-4 py-5 whitespace-normal break-words min-w-full max-w-xs overflow-hidden text-ellipsis"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;

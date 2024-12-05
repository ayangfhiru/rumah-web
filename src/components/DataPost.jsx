import { useState } from "react";

const DataPost = (props) => {
  const { datas } = props;
  const [pagination, setPagination] = useState(0);

  const handlePrev = () => {
    setPagination(pagination - 5);
  };

  const handleNext = () => {
    setPagination(pagination + 5);
  };

  return (
    <>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Body
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {datas?.map((data, i) => (
                    <tr key={i} className="hover:bg-gray-100">
                      <td className="x-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {data.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 line-clamp-4">
                        {data.body}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPost;

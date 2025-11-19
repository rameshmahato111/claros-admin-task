import { useState, type ReactNode } from "react";
import Button from "./Button";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const PAGE_SIZE = 5;
const DEFAULT_PAGE = 1;

interface PaginationProps<T> {
  data: T[];
  renderRow: (item: T) => ReactNode;
  pageSize?: number;
}

const Pagination = <T,>({
  data,
  renderRow,
  pageSize = PAGE_SIZE,
}: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const dataPerPage = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className="space-y-4">
      <div>
        {dataPerPage?.map((item, index) => (
          <div key={index}>{renderRow(item)}</div>
        ))}
      </div>

      <section className="flex items-center justify-center gap-5">
        <Button
          icon={
            <GoChevronLeft className="bg-black text-white shadow-lg ring ring-gray-900/5 rounded-full p-1 text-3xl cursor-pointer" />
          }
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            children={index + 1}
            className={
              currentPage === index + 1
                ? "bg-green-400 shadow-lg ring ring-gray-900/5 rounded-lg px-3 py-1 text-white text-sm text-center cursor-pointer"
                : "bg-gray-500 shadow-lg ring ring-gray-900/5 rounded-lg px-3 py-1 text-white text-sm cursor-pointer text-center"
            }
          />
        ))}

        <Button
          icon={
            <GoChevronRight className="bg-black text-white shadow-lg ring ring-gray-900/5 rounded-full p-1 text-3xl cursor-pointer" />
          }
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          children={undefined}
        />
      </section>
    </div>
  );
};

export default Pagination;

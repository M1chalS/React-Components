import Table from "./Table";
import {GoArrowSmallDown, GoArrowSmallUp} from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {

    const {config, data} = props;

    const {sortOrder, sortBy, sortedData, setSortColumn} = useSort(config, data);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        } else {
            return {
                ...column,
                header: () => <th className="cursor-pointer hover:bg-gray-200"
                                  onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            }
        }
    });

    return (
        <Table {...props} config={updatedConfig} data={sortedData}/>
    );
}

const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>;
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>;
    } else if (sortOrder === "asc") {
        return <div>
            <GoArrowSmallUp/>
        </div>;
    } else if (sortOrder === "desc") {
        return <div>
            <GoArrowSmallDown/>
        </div>;
    }
}

export default SortableTable;
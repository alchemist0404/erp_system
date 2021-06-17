import { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(2)
    }
}))

function Datable(props) {

    const {
        optionData, 
        columnData, 
        contentData,
        title
    } = props;

    const classes = useStyles();
    const [options, setOptions] = useState(optionData);
    const [columns, setColumns] = useState(columnData);
    const [tableData, setTableData] = useState(contentData);
    const [customTitle, setCustomTitle] = useState(title);

    useEffect(() => {
        setColumns(columnData)
    }, [columnData])

    useEffect(() => {
        setTableData(contentData)
    }, [contentData])

    useEffect(() => {
        setOptions(optionData)
    }, [optionData])

    useEffect(() => {
        setCustomTitle(title)
    }, [title])

    return (
        <MUIDataTable
            width={100}
            title={customTitle}
            data={tableData}
            columns={columns}
            options={options}
            className={classes.root}
        />
    );
}

export default Datable

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './BasicTable.css';


/** Typical Column-Props
 *  [
 *      {
 *          id: 'date',
 *          label: 'Date',
 *          minWidth: 170,
 *          align: 'right',
 *          format: (value) => value.toLocaleString('en-US')
 *      },
 *      {
 *          id: 'name',
 *          label: 'Name',
 *          minWidth: 170,
 *          align: 'right',
 *          format: (value) => value.toFixed(2),
 *      },
 *  ]
 *
 ############################# END #####################################
 ** Typical RowProps - Key must be a valid Column-Props (id)
 *  [
 *      {
 *          Date: '02/12/2022',
 *          name: 'John Doe',
 *      },
 *      {
 *          Date: '04/10/2023',
 *          name: 'John Doe',
 *      },
 *      {
 *          Date: '07/01/2024',
 *          name: 'John Doe',
 *      },
 *  ]
 */
export default function BasicTable({columnProps=[ ], dataSet=[ ], hidePagination, isEmpty="No content found" }) {

    const historyRef = React.useRef();

    const [paperHeight, setPaperHeight] = React.useState(0);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(( ) => {
            if(paperHeight == 0)
                setPaperHeight(historyRef.current?.clientHeight)
        },
    [ ]);

    if(dataSet?.length == 0) {
        return(
            <div style= {{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                {isEmpty}
            </div>
        )
    }

    return(
        <Paper ref={historyRef}>
            <TableContainer className="Custom-scroll" sx={{ maxHeight: paperHeight }} >

                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow >
                            {columnProps.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{...column, ...column?.header }}
                                    sx={{fontWeight: 900,padding: '7.5px 10px',}} >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody >
                        { dataSet.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={'row'+index}
                                    sx={{height: 30}} >

                                    { columnProps.map((column) => {
                                        const value = row[column.id];

                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{...column, ...column?.body}}
                                                sx={{padding: '0 10px',}}>
                                                { column.format ? column.format(value, row.optional) : value }
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                !hidePagination && (
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        component="div"
                        count={dataSet.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                )
            }
        </Paper>
    );
}
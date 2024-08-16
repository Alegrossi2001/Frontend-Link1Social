import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@mui/material';
import { TableProps } from './TableProps';

export const L1DynamicTable = <T,>({
  columns,
  data,
  keyExtractor,
  onRowClick,
  actions,
}: TableProps<T>) => {
  const handleRowClick = (row: T) => {
    if (onRowClick) {
      onRowClick(row);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={String(column.id)}
                align={column.align || 'left'}
              >
                {column.label}
              </TableCell>
            ))}
            {actions && <TableCell align="center">Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={keyExtractor(row)}
              hover
              onClick={() => handleRowClick(row)}
              style={{ cursor: onRowClick ? 'pointer' : 'default' }}
            >
              {columns.map((column) => {
                const cellValue = row[column.id];
                return (
                  <TableCell
                    key={String(column.id)}
                    align={column.align || 'left'}
                  >
                    {column.render
                      ? column.render(cellValue, row)
                      : String(cellValue)}
                  </TableCell>
                );
              })}
              {actions && (
                <TableCell align="center">
                  {actions(row)}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
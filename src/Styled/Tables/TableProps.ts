export type ColumnConfig<T> = {
    id: keyof T;
    label: string;
    align?: 'left' | 'right' | 'center';
    render?: (value: any, row: T) => JSX.Element | string;
  };
  
  export type TableProps<T> = {
    columns: ColumnConfig<T>[];
    data: T[];
    keyExtractor: (row: T) => string | number;
    onRowClick?: (row: T) => void;
    actions?: (row: T) => JSX.Element;
  };
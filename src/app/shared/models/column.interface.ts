/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ColumnInterface {
  label: string;
  key: string;
  accessor: (row: any) => any;
}

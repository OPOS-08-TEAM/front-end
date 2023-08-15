import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { appConfig } from '@/config';

type TProps<T> = {
  rowKey?: string;
  total?: number;
  dataSource: T[];
  columns?: ColumnsType<T>;
  loading?: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  onRow?: any;
};

export const TableAntDesign = <T extends {}>({
  rowKey,
  total,
  dataSource,
  columns,
  loading,
  page,
  setPage,
  onRow,
}: TProps<T>) => {
  return (
    <div className="">
      <Table
        onRow={onRow}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 700, y: 500 }}
        loading={loading}
        pagination={{
          pageSize: appConfig.LIMIT_TABLE_SIZE,
          defaultCurrent: page,
          total,
          showSizeChanger: false,
          onChange: (nextPage: number) => {
            setPage(nextPage);
          },
        }}
        rowKey={rowKey}
      />
    </div>
  );
};

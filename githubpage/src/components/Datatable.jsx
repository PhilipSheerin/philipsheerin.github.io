import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeveloperExperienceData } from '../Data/HomepageData/HomePageData';

const columns = [
  { field: 'Software', headerName: 'Software Experience', width: 200 },
  { field: 'frameworks', headerName: 'Frameworks', width: 500 },
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '70%' }}>
      <DataGrid
        rows={DeveloperExperienceData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
    </div>
  );
}

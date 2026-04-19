import * as XLSX from 'xlsx';

export const exportToExcel = (data: any[], fileName: string, sheetName: string) => {
  // Create a worksheet from the JSON data
  const worksheet = XLSX.utils.json_to_sheet(data);
  
  // Create a new workbook
  const workbook = XLSX.utils.book_new();
  
  // Append the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  
  // Generate the Excel file and trigger a download
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

/**
 * Maps raw media data to a clean format for Excel export
 */
export const mapMediaForExport = (data: any[], type: 'book' | 'movie' | 'series') => {
  return data.map((item) => {
    const commonFields = {
      Id: item.id,
      Title: item.title,
      'Release Year': item.release_year,
      Category: item.category?.name || 'N/A',
      Status: item.status?.toUpperCase().replace('_', ' ') || 'N/A',
      'Created At': item.created_at ? new Date(item.created_at).toLocaleDateString() : 'N/A',
    };

    if (type === 'book') {
      return {
        ...commonFields,
        Author: item.author || 'N/A',
        Pages: item.total_pages || item.pages || 'N/A',
      };
    }

    if (type === 'movie') {
      return {
        ...commonFields,
        Director: item.director || 'N/A',
        'Watched At': item.watched_at ? new Date(item.watched_at).toLocaleDateString() : 'N/A',
      };
    }

    if (type === 'series') {
      return {
        ...commonFields,
        Seasons: item.total_seasons || 'N/A',
        'Last Watched': item.last_watched_at ? new Date(item.last_watched_at).toLocaleDateString() : 'N/A',
      };
    }

    return commonFields;
  });
};

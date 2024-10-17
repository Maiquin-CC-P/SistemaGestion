export class Pagination {
  searchString: string;
  page: number;
  pageSize: number;
  collectionSize: number;
  idEstado: number = 1;

  constructor(searchString: string = '', pageSize: number = 10, page: number = 1, collectionSize: number = 0) {
    this.searchString = searchString;
    this.pageSize = pageSize;
    this.page = page;
    this.collectionSize = collectionSize;
  }

  /**
   * Gets the row at which to start to retrieve the data. *Valid for MySQL
   * @return Number
   */
  offset = (): number => {
    return (this.page - 1) * this.pageSize;
  }
}

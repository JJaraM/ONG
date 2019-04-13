export default interface TableColumn {
  type: string;
  className: string;
  typeExtra: string;
  value: any;
  action: (n) => any;
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TransactionsTable({ monthlyTotals = {} }) {
  return (
    <Table>
      <TableCaption>Total Transactions for Quarter</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Month</TableHead >
          <TableHead scope="col">Customer ID</TableHead >
          <TableHead scope="col">Amount</TableHead >
          <TableHead scope="col">Rewards</TableHead >
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          Object.keys(monthlyTotals).map((month) => {
            const monthlyTotal = Object
              .entries(monthlyTotals[month])
              .toSorted((a, b) => a[0].localeCompare(b[0]));

            return monthlyTotal.map(([customerId, {amount, rewards}], i) => {
              return (
              <TableRow key={`${month}-${customerId}`}>
                <TableCell>{i === 0 ? month : ''}</TableCell >
                <TableCell>{customerId}</TableCell >
                <TableCell>{Number(amount.toFixed(2))}</TableCell >
                <TableCell>{rewards}</TableCell >
              </TableRow>
            )})
          })
        }
      </TableBody>
    </Table>
  );
}

export default TransactionsTable;
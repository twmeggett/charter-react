import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function TransactionsTable({transactions = []}) {
  return (
    <div className="h-150 overflow-y-scroll">
      <Table>
        <TableCaption>Total Transactions for Quarter</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead scope="col">Date</TableHead >
            <TableHead scope="col">Amount</TableHead >
            <TableHead scope="col">Rewards</TableHead >
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>{tx.date}</TableCell >
                <TableCell>{tx.amount}</TableCell >
                <TableCell>{tx.rewards}</TableCell >
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default TransactionsTable;
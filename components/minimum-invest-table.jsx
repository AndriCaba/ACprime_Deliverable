import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { funds } from '@/lib/constants';

const MinimumInvestTable = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Table>
          <TableHeader className="bg-transparent">
            <TableRow>
              <TableHead className="w-[280px] border font-semibold text-[#002060]">
                Name of Fund
              </TableHead>
              <TableHead className="w-[150px] border text-center font-semibold text-[#002060]">
                Fund Type
              </TableHead>
              <TableHead className="w-[150px] border text-center font-semibold text-[#002060]">
                Currency
              </TableHead>
              <TableHead className="w-[150px] border text-center font-semibold text-[#002060]">
                Initial Amount
              </TableHead>
              <TableHead className="w-[200px] border text-center font-semibold text-[#002060]">
                Additional or Top-up
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-start text-[13px] text-[#002060]">
            {funds.map((fund, index) => (
              <TableRow key={index}>
                <TableCell className="border text-start">{fund.name}</TableCell>
                <TableCell className="border text-center">
                  {fund.type}
                </TableCell>
                <TableCell className="border text-center">
                  {fund.currency}
                </TableCell>
                <TableCell className="border text-center">
                  {fund.initialAmount}
                </TableCell>
                <TableCell className="border text-center">
                  {fund.topUp}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="block md:hidden">
        <Accordion
          type="single"
          collapsible
          className="w-fulla bg-[#e3eef8] text-[#062d97]"
        >
          {funds.map((fund, index) => (
            <div key={index}>
              <AccordionItem
                value={index + 1}
                className="border-b-8 border-b-white"
              >
                <AccordionTrigger className="flex-row-reverse justify-end gap-2 px-4 py-3 text-start text-[13px] hover:no-underline">
                  {fund.name}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-4 py-3 text-[13px]">
                  <div className="mb-2 flex justify-between">
                    <p>Fund Type</p>
                    <p>{fund.type}</p>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <p>Currency</p>
                    <p>{fund.currency}</p>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <p>Initial Amount</p>
                    <p>{fund.initialAmount}</p>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <p>Additional or Top Up</p>
                    <p>{fund.topUp}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default MinimumInvestTable;

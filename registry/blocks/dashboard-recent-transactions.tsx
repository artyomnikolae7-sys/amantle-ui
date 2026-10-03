/**
 * @source https://amantle.dev/registry/blocks/dashboard-recent-transactions
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";
import { Badge } from "@/registry/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/registry/ui/card";

export function DashboardRecentTransactions() {
  const transactions = [
    {
      id: "TX-7891",
      customer: "Ольга Морозова",
      email: "olga.m@example.com",
      amount: "$250.00",
      status: "Успешно",
      date: "Сегодня, 14:32",
    },
    {
      id: "TX-7890",
      customer: "Игорь Кузнецов",
      email: "igor.k@example.com",
      amount: "$120.00",
      status: "В обработке",
      date: "Сегодня, 11:20",
    },
    {
      id: "TX-7889",
      customer: "Анна Соколова",
      email: "anna.s@example.com",
      amount: "$890.00",
      status: "Успешно",
      date: "Вчера, 18:45",
    },
    {
      id: "TX-7888",
      customer: "Михаил Попов",
      email: "m.popov@example.com",
      amount: "$49.00",
      status: "Отклонено",
      date: "Вчера, 15:10",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Последние транзакции</CardTitle>
        <CardDescription>Список недавних платежей и их текущий статус обработки</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Номер</TableHead>
              <TableHead>Клиент</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead className="text-right">Сумма</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell className="font-mono text-xs text-muted-foreground">{tx.id}</TableCell>
                <TableCell>
                  <div className="font-medium text-foreground">{tx.customer}</div>
                  <div className="text-xs text-muted-foreground">{tx.email}</div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      tx.status === "Успешно"
                        ? "default"
                        : tx.status === "В обработке"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {tx.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">{tx.date}</TableCell>
                <TableCell className="text-right font-medium">{tx.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default DashboardRecentTransactions;

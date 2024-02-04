import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { Key } from "react";

type Repo = {
  breed: string;
  country: string;
  origin: string;
  coat: string;
};

const columns = [
  {
    key: "breed",
    label: "BREED",
  },
  {
    key: "country",
    label: "COUNTRY",
  },
  {
    key: "origin",
    label: "ORIGIN",
  },
  {
    key: "coat",
    label: "COAT",
  },
];

export async function fetchData() {
  const res = await fetch("https://guide-cat-api.sanity-io.vercel.app/cats");
  if (!res.ok) {
    throw new Error("Error occurred when fetching");
  }
  return res.json();
}

export default async function Details({ promise }: { promise: Promise<any> }) {
  const post = await promise;

  return (
    <Table>
      <TableHeader columns={columns}>
        {(columns) => (
          <TableColumn key={columns.key}>{columns.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {post.map((p: { key: Key | null | undefined }) => (
          <TableRow key={p.key}>
            {(columnkey) => <TableCell>{getKeyValue(p, columnkey)}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
  // <div>
  //     <p>Contry list</p>
  //     {post.map((p: any)=>(
  //     <ul>
  //     <li key={p.id}>{p.origin}</li>
  //     </ul>
  // ))}</div>
}

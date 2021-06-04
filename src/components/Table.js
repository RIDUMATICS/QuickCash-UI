export function TableRow(props) {
  return (
    <tr class="border-b border-gray-200 hover:bg-gray-100">
      {/*
      <td class="py-3 px-6 text-center">
       
      </td> */}
      {props.children}
    </tr>
  );
}

export function TableCol(props) {
  return <td class="py-3 px-6 text-center">{props.children}</td>;
}

export default function Table(props) {
  return (
    <div class="bg-white shadow-md rounded">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {props.header.map((value, index) => (
              <th class="py-3 px-6 text-center" key={index}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">{props.children}</tbody>
      </table>
    </div>
  );
}

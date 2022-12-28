const RowsTable = (props) => {

  return(
  <tbody>
    <tr>
      <th scope="row">{props?.id}</th>
      <td className="table-info">{props?.title}</td>
      <td>{props?.length ? props?.length : 'Sin datos'}</td>
      <td>{props?.rating}</td>
      <td>{props?.genre?.name ? props?.genre?.name : 'Sin genero'}</td>
      <td className="table-success">{props.awards}</td>
    </tr>
  </tbody>
  )
}

export default RowsTable;
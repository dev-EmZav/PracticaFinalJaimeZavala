
import {Table,Button  } from "reactstrap"


const TablaItem = ({data}) => {
    return (
        <Table striped responsible>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Completado</th>
                </tr>
            </thead>

            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4"> Sin Registros </td>
                        </tr>
                        ): (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.IsCompleted}</td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2">Editar</Button>
                                        <Button color="danger"  size="sm" className="me-2">Eliminar</Button>
                                    </td>
                                </tr>
                            ))
                    )
                }
            </tbody>

        </Table>
    
    ) 
}
export default TablaItem;
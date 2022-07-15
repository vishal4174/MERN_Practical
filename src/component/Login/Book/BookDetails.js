import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosInstance from "../../../Services/AxiosInstance";

const BookDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    console.log(data);
    useEffect(() => {
        AxiosInstance.get(`/getBookById/${id}`).then((res) => {
            setData(res.data.data)
        })
    }, [])



    return (
        <form>
            <h1>Book details</h1>
            <table>
                <tbody className="tblBody">
                    <tr>
                        <td>
                            Book Name : {data.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Book Author : {data.author}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Book Price : {data.price}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Available Stock : {data.stock}
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </form>
    )
}

export default BookDetail
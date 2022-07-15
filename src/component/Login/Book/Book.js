import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AxiosInstance from "../../../Services/AxiosInstance";
import BookDetail from "./BookDetails";
import './style.css'

const Books = () => {
    let navigate = useNavigate();
    const [data, setData] = useState([])
    const [sort, setSort] = useState("ASC")

    useEffect(() => {
        AxiosInstance.get("/getAllBooks").then((res) => {
            setData(res.data.data)
        })
    }, [])

    const sorting = (col) => {
        if (sort === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            )
            setData(sorted)
            setSort("DSC")
        }
        if (sort === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            )
            setData(sorted)
            setSort("ASC")
        }
    }

    const orderNow = () => {
        navigate('/users')
    }

    return (
        <>
            <form>
                <h1>Books</h1>
                <h2 onClick={() => sorting("name")} style={{ cursor: "pointer" }} className="btn btn-primary">A-Z</h2>
                <table>
                    <thead className="thead-light">
                        <tr>
                            <th>Books</th>
                            <th>Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((input, index) => {
                                return (
                                    (
                                        <tr key={index}>
                                            <td className="tblData">
                                                {
                                                    <Link to={`details/${input._id}`}
                                                        className="BookDetail"
                                                    >
                                                        {input.name}
                                                    </Link>
                                                }
                                            </td>
                                            <td><button className="btn btn-primary" onClick={orderNow}>Order Now</button></td>
                                        </tr>
                                    )
                                )
                            })}
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default Books
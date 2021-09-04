import React, { useEffect, useState } from 'react';
import { RequestLetterPostApi, RequestBuyerPostApi } from './../../../../../api/api-request';

const ListRequestType = ({ type }) => {
    const [reqList, setReqList] = useState([])
    const url = "GetAll"
    useEffect(() => {
        type === 1 ? RequestLetterPostApi(url, (isOk, data) => {
            if (!isOk)
                return console.warn(data.message);
            setReqList(data);
        }) : RequestBuyerPostApi(url, (isOk, data) => {
            if (!isOk)
                return console.warn(data.message);
            setReqList(data);
        })
    }, []);

    return (
        <div>
            <ul>
                {reqList.map((data, index) => {
                    return <li key={index}>{data.item}</li>
                })}
            </ul>
        </div>
    )
}

export default ListRequestType;
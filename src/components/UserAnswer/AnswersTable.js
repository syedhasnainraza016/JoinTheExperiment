import React,{ useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAnswers} from "../../redux/actions/questionActions";
import BasicTable from '../../utils/Table/BasicTable';
const userInformation = JSON.parse(localStorage.getItem("userInformation"));

const columns = [
   

    {
      Header: "Answer",
      accessor: "answer",
    },
    {
      Header: "Sender Email",
      accessor: "userEmail",
     
    },
    
    {
      Header: "Rating",
      accessor: "rating",
    },

   
  ];
const AnswersTable = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    
        dispatch(getAnswers(userInformation.questionId))
      
    }, [])
    const answers = useSelector((state) => state.getAnswers.answers);
  return (
    <div>
       <BasicTable
        // edit={(id) => {
        // //   setEditId(id);
        // //   setEditDialog(true);
        // }}
        // remove="deleteData"
        counter={true}
        columns={columns}
        data={answers??[]}
        
      />
    </div> 
   
  )
}

export default AnswersTable
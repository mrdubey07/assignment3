import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddStatsToRedux, AddUserToRedux } from '../store/actions/ActionConstants';
import dashboardCss from '../Css/dashboardCss.module.css'
import Card from './Card';
function DashboardStats() {

    const dispatch = useDispatch();
    const stats = useSelector((state)=>state.stats);
    const users = useSelector((state)=> state.users)

    useEffect(() => {
        async function fetchStats(){
        const response = await fetch('https://630369f20de3cd918b34e39e.mockapi.io/transactionstats');
        const stats = await response.json();
        console.log(stats);
        dispatch({ type: AddStatsToRedux, payload: stats });
        }
        fetchStats();   
    },[dispatch])

    useEffect(() => {
        async function fetchUser(){
            const response = await fetch('https://630369f20de3cd918b34e39e.mockapi.io/users');
            const users = await response.json();
            console.log(users);
            dispatch({ type: AddUserToRedux, payload: users });
            }
            fetchUser();  
    },[dispatch])

  return (
    <div className={dashboardCss.container}>
           { stats.map((stat)=> <li key={stat.id}>{stat.label}</li>) }
            {users.map((user)=><Card src={user.avatar}> <li key={user.id}>{user.name}</li> </Card>)}
    </div>
  )
}

export default DashboardStats
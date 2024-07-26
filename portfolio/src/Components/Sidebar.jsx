import React from "react";
import portfolioPfp from "../assets/portfolio_pfp.jpg"; 
import { Avatar } from '@chakra-ui/react'
import "../styles/Sidebar.css"

export default function Sidebar() {
    return (
        <div className="Sidebar">
                <Avatar size='2xl' name='Leo Galan' src={portfolioPfp} className="avatar" />
            <h1 className="sidebar-description">
                Hello there, I hope you enjoy my portfolio and the rest of your day.
            </h1>
        
        
        
        </div>
    )




}
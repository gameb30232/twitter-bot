import React, {useState, useContext, useRef} from 'react';
import Header from '../../components/header/Header'
import DiscordPost from '../../components/home/DiscordPost'

import "./home.css"
// import "../assets/css/style.css"

const Home = () =>{
	return (
		<>
			<div className="wrapper">
				<Header />
				<div className="">
					<DiscordPost />
				</div>
			</div>
		</>
	)
};


export default Home;
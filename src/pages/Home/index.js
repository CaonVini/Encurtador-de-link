import { useState } from "react";
import "./home.css";
import { FaLink } from 'react-icons/fa';
import Menu from "../../Components/menu/index";
import LinkItem from "../../Components/LinkItem/index";

import api from "../../services/api";
import { getLinksSave, saveLinks } from "../../services/storeLinks";

function Home() {
  const [link, setLink] = useState(''); 
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(false);

  async function disparaLink() {
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);

      saveLinks('@encurtaLink', response.data)

      setLink('')

    }catch{
      alert("Ops.. Parece que algo deu errado!")
      setLink('');
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Logo"></img>
        <h1>CAON LINKS</h1>
        <span>Cole seu link para encurtar! 👇🏼</span>
      </div>

      <div className="input-area">
        <div>
          <FaLink size="24" color="#FFF"></FaLink>
          <input
            placeholder='Cole seu link aqui....'
            value={link}
            onChange={(e) => setLink(e.target.value)} 
          ></input>
        </div>

        <button onClick={disparaLink}>Encurtar Link</button>
      </div>

      
      
      { showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}


    </div>
  );
}

export default Home;
 
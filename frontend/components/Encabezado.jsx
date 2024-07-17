import React, { useState } from 'react';
import logo from "../assets/logoHechoEnOaxaca.jpg"; 

const Encabezado = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  return (
    <div style={{
      backgroundColor: '#F5F5DC', // warm beige
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        style={{ position: 'relative' }}
      >
        <button style={{
          backgroundColor: '#F7DC6F', // yellow
          color: '#333',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '1.2em',
          borderRadius: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          Menú
        </button>
        {menuVisible && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
            overflow: 'hidden',
            zIndex: 1,
            padding: '10px'
          }}>
            <button style={{
              padding: '10px 20px',
              width: '100%',
              textAlign: 'left',
              border: 'none',
              backgroundColor: '#333',
              cursor: 'pointer',
              color: '#FFFFFF'
            }}>
              Textiles
            </button>
            <button style={{
              padding: '10px 20px',
              width: '100%',
              textAlign: 'left',
              border: 'none',
              backgroundColor: '#333',
              cursor: 'pointer',
              color: '#FFFFFF'
            }}>
              Dulces Tradicionales
            </button>
            <button style={{
              padding: '10px 20px',
              width: '100%',
              textAlign: 'left',
              border: 'none',
              backgroundColor: '#333',
              cursor: 'pointer',
              color: '#FFFFFF'
            }}>
              Artesanías
            </button>
          </div>
        )}
      </div>
      <h1 style={{
        margin: '0 auto',
        fontSize: '2.5em',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#7A288A' // purple
      }}>
        HECHO EN OAXACA
        <h1 style={{
        margin: '0 auto',
        fontSize: '0.5em',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FA7268' // purple
      }}>
        Hecho a Mano, Hecho con Alma
      </h1>
      </h1>

      <img src={logo} alt="Logo" style={{ height: '120px', marginBottom: '10px' }} />
    </div>
  );
};

export { Encabezado };

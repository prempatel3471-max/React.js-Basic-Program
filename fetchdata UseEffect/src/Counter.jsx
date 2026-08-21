import React, { useEffect, useState } from 'react'

function Counter() {

  const [value,setValue] = useState([])

  

  function fetchData()
  {
      fetch("https://fakestoreapi.com/products")
      .then((res)=>res.json())
      .then((data)=>setValue(data))
      .catch((err)=>console.log(err))
  }
  
  useEffect(()=>{
    fetchData()
  },[])


  return (
    value.map((el)=><div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#222",
          marginBottom: "30px",
        }}
      >
        Products
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {value.map((el) => (
          <div
            key={el.id}
            style={{
              width: "300px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={el.image}
              alt={el.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />

            <p
              style={{
                color: "#777",
                fontSize: "13px",
                textTransform: "uppercase",
              }}
            >
              {el.category}
            </p>

            <h2
              style={{
                fontSize: "18px",
                color: "#222",
                lineHeight: "1.4",
                minHeight: "50px",
              }}
            >
              {el.title}
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {el.description}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "15px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#16a34a",
                }}
              >
                ${el.price}
              </span>

              <span
                style={{
                  color: "#f59e0b",
                  fontWeight: "bold",
                }}
              >
                ⭐ {el.rating.rate}
              </span>
            </div>

            <p
              style={{
                color: "#777",
                fontSize: "13px",
              }}
            >
              {el.rating.count} reviews
            </p>

            <button
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>)
  )
}

export default Counter
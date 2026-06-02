/* Set background color */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: lightpink;
}

/* Header scrolling store name */
.header {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background: #ffcccc;
  font-size: 28px;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  position: relative;
}

.header span {
  display: inline-block;
  padding-left: 100%;
  animation: scroll 12s linear infinite;
  color: #333;
}

/* Animation for scrolling */
@keyframes scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* Sample product grid */
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.product h3 {
  margin: 10px 0 5px;
  font-size: 20px;
}

.product p {
  font-size: 16px;
  color: #666;
}


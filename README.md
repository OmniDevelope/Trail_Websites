/* Reset some default browser styles */
* {
    margin: 2;
    padding: 1;
    box-sizing: border-box;
}

/* Style the header */
header {
    background-color: #423;
    color: #fff;
    padding: 20px;
    text-align: center;
}

header h1 {
    margin: 0;
}

nav ul {
    list-style-type: none;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

/* Style the main content */
main {
    padding: 20px;
}

#products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.product {
    border: 1px solid #ccc;
    padding: 10px;
}

.product img {
    max-width: 100%;
    height: auto;
}

.product h2 {
    margin-top: 10px;
}

.product button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 10px;
}

.product button:hover {
    background-color: #555;
}

/* Style the footer */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
}

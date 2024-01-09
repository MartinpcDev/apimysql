create table producto(
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  precio DECIMAL(5,2) NOT NULL,
  fecha DATETIME NOT NULL DEFAULT NOW(),
  stock BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO producto (nombre, descripcion, imagen, precio, stock) VALUES
  ('Natsu Dragneel', 'Fairy Tail Fanart Dragon Cry', 'https://i.pinimg.com/564x/c8/f2/02/c8f2025db117f9ed121d05171eff6a15.jpg', 150.99, True),
  ('Ichigo Kurosaki', 'Bleach Fanart', 'https://i.pinimg.com/564x/d3/7b/87/d37b87a689889eec1be049d2a1805b96.jpg', 120.50, True),
  ('Itachi Uchiha', 'Naruto Shippuden Fanart', 'https://i.pinimg.com/564x/7c/08/2f/7c082fb3bf7d41407dbc7ab0a3e960a1.jpg', 123.95, True);
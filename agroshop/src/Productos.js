import React, { useState, useCallback } from 'react';


export const productos = [
  {
    id: 1,
    nombre: 'Engeo de 1Lt.',
    descripcion: 'ENGEO® Producto de amplio espectro que controla masticadores, chupadores y raspadores. Insecticida de acción de contacto y con propiedades sistémicas. Moderna formulación, contiene micro cápsulas de lambdacialotrina combinada con tiametoxam formulada en una suspensión concentrada.',
    precio: 250.00,
    cantidad: 1,
    disponibles: 100,
    imagen: 'https://cdn11.bigcommerce.com/s-xeihv17pvg/images/stencil/1920w/products/1583/3689/Syngenta-Engeo_247_Ec_1_Lt-Frontal__56765.1722014125.png'
  },
  {
    id: 2,
    nombre: 'Karate Zeon de 1 LT',
    descripcion: 'KARATE ZEON® 5 CS es un insecticida altamente activo a bajas dosis, rápida acción. Amplio espectro de control de plagas. Efecto Inmediato.',
    precio: 1200.00,
    cantidad: 1,
    disponibles: 110,
    imagen: 'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-syngenta-KARATE-ZEON.jpg'
  },
  {
    id: 3,
    nombre: 'Match de 1lt',
    descripcion: 'Match® tiene bajo impacto sobre insectos benéficos o enemigos naturales, por lo que es recomendable para programas de Manejo Integrado de Plagas (MIP), principalmente en áreas donde las plagas son resistentes a organofosforados, piretroides y otros modos de acción',
    precio: 950.80,
    cantidad: 1,
    disponibles: 120,
    imagen: 'https://acdn.mitiendanube.com/stores/001/016/872/products/9-c56afd5e800f10ded217273692761420-640-0.png'
  },
  {
    id: 4,
    nombre: 'Primagram Gold de 1 lt',
    descripcion: 'PRIMAGRAM® GOLD es una mezcla de dos ingredientes activos: atrazina y s-metolaclor, que combinados, ejercen acción contra las malezas',
    precio: 300.00,
    cantidad: 1,
    disponibles: 130,
    imagen: 'https://http2.mlstatic.com/D_Q_NP_678806-MLM72887284637_112023-AB.webp'
  },
  {
    id: 5,
    nombre: 'Coloso Total de 1 Lt.',
    descripcion: 'Por ser un herbicida sistémico requiere que la maleza esté en activo crecimiento para obtener el control adecuado. Coloso® Total 360 se absorbe por las hojas y se transloca hasta las raíces y otras partes de las plantas',
    precio: 435.00,
    cantidad: 1,
    disponibles: 140,
    imagen: 'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-syngenta-COLOSO-TOTAL.jpg'
  },
  {
    id: 6,
    nombre: 'Semilla de Maíz P3966W',
    descripcion: 'Combina rusticidad y rendimiento en condiciones difíciles, Tolerancia a enfermedades foliares, Alto rendimiento de forraje de buena calidad, Excelente daptacion a manejo con agua de presa',
    precio: 4350.00,
    cantidad: 1,
    disponibles: 150,
    imagen: 'https://www.agricenter.com.mx/sistema/images/products/76/BEWtn5GrmdJJbd0yeePnGuumHNi6Tp2L08g4at0t.png'
  },

  // Agregar más productos aquí
];

const ProductosList = () => {
  const [productosState, setProductosState] = useState(productos);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [cantidad, setCantidad] = useState({});

  const agregarAlCarrito = useCallback((producto) => {
    const cantidadProducto = cantidad[producto.id] || 1;
    const productoEnCarrito = productosCarrito.find((p) => p.id === producto.id);
    let nuevosProductosCarrito = [...productosCarrito];

    if (productoEnCarrito) {
      nuevosProductosCarrito = productosCarrito.map((p) => {
        if (p.id === producto.id) {
          return { ...p, cantidad: p.cantidad + cantidadProducto };
        }
        return p;
      });
    } else {
      nuevosProductosCarrito = [...productosCarrito, { ...producto, cantidad: cantidadProducto }];
    }

    // Disminuir la cantidad disponible
    const nuevosProductos = productos.map((p) => {
      if (p.id === producto.id) {
        return { ...p, disponibles: p.disponibles - cantidadProducto };
      }
      return p;
    });

    setProductosState(nuevosProductos);
    setProductosCarrito(nuevosProductosCarrito);
    localStorage.setItem('productosCarrito', JSON.stringify(nuevosProductosCarrito));
  }, [productosCarrito, cantidad, productos]);


  return (
    <div>
      <div className="titulo-productos">
      <h2>Productos</h2>
      <a href="/carrito" className="carrito-icono">
    <i className="fas fa-shopping-cart"></i>
  </a>
  <div className="menu">
          <a href="/" className="menu-item">
            <i className="fa fa-home fa-lg"></i> Inicio
          </a>
          <a href="/nosotros" className="menu-item">
            <i className="fa fa-users fa-lg"></i> Nosotros
          </a>
          <a href="/productos" className="menu-item">
            <i className="fa fa-shopping-cart fa-lg"></i> Productos
          </a>
          <a href="/carrito" className="menu-item">
            <i className="fa fa-cart-plus fa-lg"></i> Carrito
          </a>
          <a href="/contacto" className="menu-item">
            <i className="fa fa-envelope fa-lg"></i> Contacto
          </a>
        </div>
      </div>
      <div style={{marginTop: '50px'}}>
      <table className="productos-table">
  <thead>
    <tr>
      <th>Imagen</th>
      <th>Nombre</th>
      <th>Descripción</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Agregar al carrito</th>
    </tr>
  </thead>
  <tbody>
  {productosState.map((producto) => (
  <tr key={producto.id}>
    <td><img src={producto.imagen} alt={producto.nombre} width="100px"/></td>
    <td><h3>{producto.nombre}</h3></td>
    <td><p>{producto.descripcion}</p></td>
    <td><p> ${producto.precio}</p></td>
    <td>
                  <input
                    type="number"
                    value={cantidad[producto.id] || 1}
                    onChange={(e) => {
                      const nuevaCantidad = parseInt(e.target.value);
                      // Asegúrate de que la nueva cantidad no exceda la cantidad disponible
                      if (nuevaCantidad >= 1 && nuevaCantidad <= producto.disponibles) {
                        setCantidad({ ...cantidad, [producto.id]: nuevaCantidad });
                      } else {
                        setCantidad({ ...cantidad, [producto.id]: 1 });
                      }
                    }}
                    className="cantidad-input"
                  />
                  <span style={{ marginLeft: '10px' }}>Disponibles: {producto.disponibles}</span>
                </td>
<td>
  <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
</td>
  </tr>
))}
  </tbody>
</table>

</div>

    </div>
  );
};

export default ProductosList;
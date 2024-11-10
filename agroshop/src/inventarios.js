import React, { useState } from 'react';
import { productos } from './Productos';
import PropTypes from 'prop-types';

const Inventarios = ({ carrito }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const obtenerEnTransito = (producto) => {
        if (!carrito) return 0; // Asegúrate de que carrito no sea undefined
        const productoEnCarrito = carrito.find(p => p.id === producto.id);
        return productoEnCarrito ? productoEnCarrito.cantidad : 0;
    };

    Inventarios.propTypes = {
        carrito: PropTypes.array.isRequired,
    };

    return (
        <div className="inventarios-container">
            <h2 className="inventarios-title">Inventarios de Productos</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="table-container2">
                <table className="productos-table2">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Existencia</th>
                            <th>En tránsito</th>
                            <th>Disponibles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((producto) => {
                            const enTransito = obtenerEnTransito(producto);
                            const disponibles = producto.disponibles - enTransito; // Calcular disponibles
                            return (
                                <tr key={producto.id}>
                                    <td><img src={producto.imagen} alt={producto.nombre} /></td>
                                    <td><h3>{producto.nombre}</h3></td>
                                    <td><span>{producto.disponibles}</span></td>
                                    <td>
                                        <span style={{ color: enTransito > 0 ? 'red' : 'black' }}>
                                            {enTransito}
                                        </span>
                                    </td> {/* Mostrar cantidad en tránsito */}
                                    <td><span>{disponibles}</span></td> {/* Mostrar cantidad disponibles */}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {filteredProducts.length === 0 && (
                <div className="no-results">
                    <p>No se encontraron productos</p>
                </div>
            )}
        </div>
    );
};

export default Inventarios;
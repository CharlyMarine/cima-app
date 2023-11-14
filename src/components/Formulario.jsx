import useClima from "../hooks/useClima"


const Formulario = () => {

    const {busqueda, datosBusqueda} = useClima()
    const {ciudad, pais} = busqueda

  return (
    <div className="contenedor">
        <form>
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="test"
                    id="ciudad"
                    name="ciudad"
                    onChange={datosBusqueda}
                    value={ciudad}
                />
            </div>
            <div className="campo">
                <label htmlFor="pais">País</label>
                <select
                    id="pais"
                    name="pais"
                    onChange={datosBusqueda}
                    value={pais}
                >
                    <option value="">Seleccione un país</option>
                    <option value="MX">México</option>
                    <option value="US">Estados Unidos</option>
                    <option value="AR">Argentina</option>
                    <option value="PE">Perú</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                </select>
            </div>
            <input
                type="submit"
                value="Consultar Clima"
            />
        </form>
    </div>
  )
}

export default Formulario
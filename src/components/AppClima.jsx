import useClima from '../hooks/useClima'
import Formulario from './Formulario'
import Resultado from './Resultado'
import Spinner from './Spinner'


const AppClima = () => {

  const {resultado, cargando, noResultado} = useClima()
  return (
    <main className='dos-columnas'>
        <Formulario />
        {cargando ? <Spinner/> : resultado?.name ? <Resultado/> : noResultado ? <p>{noResultado}</p> : ''}
    </main>
  )
}

export default AppClima
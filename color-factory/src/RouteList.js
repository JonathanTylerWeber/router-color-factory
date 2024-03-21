import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import AddColor from './AddColor';
import ColorList from './ColorList';
import FilterColors from './FilterColors'

function RouteList({ colors, onAddColor }) {
  return (
    <Routes>
      <Route
        path='/colors'
        element={<ColorList colors={colors} />}
      />

      <Route
        path="/colors/add"
        element={<AddColor onAddColor={onAddColor} />}
      />

      <Route
        path='/colors/:name'
        element={<FilterColors colors={colors} />}
      />

      <Route
        path='/*'
        element={<Navigate to='/colors' />}
      />

    </Routes>
  )
}

export default RouteList
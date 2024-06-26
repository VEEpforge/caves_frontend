import { provinces } from '@/constants/4AProvincesGeoJSON';
import { Polygon } from 'react-leaflet';
import { getColor } from '@/lib/utils';

export default function ProvinceMapLayer({strains, handleSetFilter, setSelectedLocation, setSelectedLocStrainCount}) {
  return (
		<>
		{
			provinces.features.map((province) => {
				var coordinates;
				// Polygon
				if(province.geometry.type === 'Polygon') coordinates = province.geometry.coordinates[0].map((item) => [item[1], item[0]]);
				// Multipolygon
				else coordinates = province.geometry.coordinates.map( (coor) => coor[0].map((item) => [item[1], item[0]]))

				const strainCount = strains?.filter( (item) => item.province?.toLowerCase().includes(province.properties.ADM2_EN.toLowerCase())).length
				
				return (<Polygon
					pathOptions={{
						fillColor: getColor(strainCount),
						// fillColor: '#168b46',
						fillOpacity: 0.7,
						weight: 2,
						opacity: 1,
						dashArray: 3,
						color: 'white'
					}}
					positions={coordinates}
					eventHandlers={{
						mouseover: (e) => {
							const layer = e.target;
							layer.setStyle({
								dashArray: '',
								weight: 2,
								opacity: 1,
								color: 'black',
							})
							setSelectedLocation(province.properties.ADM2_EN)
							setSelectedLocStrainCount(strainCount)
						},
						mouseout: (e) => {
							const layer = e.target;
							layer.setStyle({
								weight: 2,
								dashArray: '3',
								color: 'white',
							});
						},
						click: (e) => {
							handleSetFilter({
								id: 'province',
								value: province.properties.ADM2_EN.toLowerCase()
							})
						}
					}}
					key={province.properties.ADM2_EN}
				/>)
			})
		}
		</>
	)
}

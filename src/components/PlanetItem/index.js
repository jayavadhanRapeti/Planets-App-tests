// Write your code here

import Slider from 'react-slick'

import './index.css'

const PlanetItem = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planets_app_card">
      <h1 className="Planets_app_heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <div className="planet_card">
            <img
              src={eachPlanet.imageUrl}
              alt={`planet ${eachPlanet.name}`}
              className="planet_image"
            />
            <h1 className="planet_name">{eachPlanet.name}</h1>
            <p className="planet_description">{eachPlanet.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PlanetItem

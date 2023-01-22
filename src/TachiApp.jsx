import PropTypes from 'prop-types'

// const getSuma = (a, b) => {
//   return a + b;
// }

// const newValue = {
//   message: 'Tahci',
//   tittle: 'Developer JR'
// };

// export const TachiApp = ( props ) => {
export const TachiApp = ( { title, subTitle, name } ) => {

  // console.log(props);
   
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <h1> { props.title } </h1> */}
      {/* <h1> { title } </h1>
      <h1> { getSuma(21,12)} </h1>
      <code> { JSON.stringify( newValue  ) } </code>
      <p>Soy Developer Jr</p> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

TachiApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

TachiApp.defaultProps = {
  name: 'Tachi Dito',
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo',
}
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countrys }) => {
  return (
    <>
      <h2>CountryList</h2>
      <Grid>
        {countrys.map(({ id, flag, country }) => {
          return (
            <GridItem key={id}>
              <Link to={`/country/${id}.`.toLowerCase()}>
                <img src={flag} alt={country} />
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

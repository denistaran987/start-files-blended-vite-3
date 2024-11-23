import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countrys, setCountrys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getCountrysData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getCountries();
        setCountrys(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCountrysData();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {countrys && <CountryList countrys={countrys} />}
        {isLoading && <Loader />}
        {isError && <p style={{ color: 'red' }}>Sorry, something went wrong</p>}
      </Container>
    </Section>
  );
};

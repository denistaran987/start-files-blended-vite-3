import { Container, Heading, SearchForm, Section } from 'components';

export const SearchCountry = () => {
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit}></SearchForm>
      </Container>
    </Section>
  );
};

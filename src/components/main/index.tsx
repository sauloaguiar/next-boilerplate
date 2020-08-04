import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React js, Next js, Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e react avançado escrito"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desevolvedor de frente para tela com codigo"
    />
  </S.Wrapper>
)

export default Main

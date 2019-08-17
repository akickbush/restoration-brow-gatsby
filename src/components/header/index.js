import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Parent = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 2px 5px 5px 0 rgba(0, 0, 0, 0.12);
`
const FakeBgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${({ opacity }) => opacity};
  height: ${({ height }) => height};
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`
const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: center;
`
const H1 = styled.h1`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 0;
  font-size: 2.5rem;
  @media all and (max-width: 500px) {
    font-size: 1.4rem;
  }
`
const Header = ({
  headerImg,
  headerInnerImg,
  imgCaption,
  height,
  mobileHeight,
  opacity,
  headerTitle,
  className,
}) => (
  <Parent opacity={opacity}>
    <FakeBgImage
      fluid={headerImg}
      title={imgCaption}
      height={height}
      mobileHeight={mobileHeight}
    />
    <Content className={className}>
      {headerTitle && <H1>{headerTitle}</H1>}
    </Content>
  </Parent>
)

Header.propTypes = {
  headerImg: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  imgTitle: PropTypes.string,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  opacity: PropTypes.string,
  headerTitle: PropTypes.string,
  className: PropTypes.string,
}

export default Header

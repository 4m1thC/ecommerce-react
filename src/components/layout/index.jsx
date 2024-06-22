import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col mt-[68px] items-center mx-5">
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout };

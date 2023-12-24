/* eslint-disable react/prop-types */

const Error = ({error}) => {
  return (
    <p className="text-red-600">{error?.message}</p>
  )
}

export default Error
type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

function Status(props: StatusProps) {
  let message;
  if (props.status === 'loading') {
    message = 'loading...';
  }
  if (props.status === 'success') {
    message = 'Data fetched successfully!';
  }
  if (props.status === 'error') {
    message = 'Error fetching data...';
  }
  return <div>Status: {message}</div>;
}

export default Status;


export default function Comment({thisComment}) {
  return (
    <div className='comment'>
        Comment:
        <h5>{thisComment.name}</h5>
    </div>
  );
}
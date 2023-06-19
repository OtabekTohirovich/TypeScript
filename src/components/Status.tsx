type StatusProp ={
  status: "loading" | 'success' |'error'
}
const Status = (props: StatusProp) => {
  let massage 
   if (props.status === 'loading') {
    massage = 'loading...'    
   } else if (props.status === 'success'){
    massage = 'data successfully'
   }
   else if (props.status === 'error'){
    massage = 'data error'
   }
  return (
    <div>
        <h2>{massage}</h2>
    </div>
  )
}

export default Status